import { Schema, useFieldSchema } from '@formily/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SchemaInitializer, useCollection, useCollectionManager, SchemaInitializerItemOptions } from '../..';
import { gridRowColWrap } from '../utils';

const recursiveParent = (schema: Schema) => {
  if (!schema) return null;

  if (schema['x-decorator']?.endsWith('BlockProvider')) {
    return schema['x-decorator-props']?.['collection'];
  } else {
    return recursiveParent(schema.parent);
  }
};

const useRelationFields = () => {
  const fieldSchema = useFieldSchema();
  const { getCollectionFields } = useCollectionManager();
  let fields = [];

  if (fieldSchema['x-initializer']) {
    fields = useCollection().fields;
  } else {
    const collection = recursiveParent(fieldSchema.parent);
    if (collection) {
      fields = getCollectionFields(collection);
    }
  }

  const relationFields = fields
    .filter((field) => ['linkTo', 'subTable', 'o2m', 'm2m', 'obo', 'oho', 'o2o', 'm2o'].includes(field.interface))
    .map((field) => {
      if (['hasOne', 'belongsTo'].includes(field.type)) {
        return {
          key: field.name,
          type: 'subMenu',
          title: field?.uiSchema?.title || field.name,
          children: [
            {
              key: `${field.name}_details`,
              type: 'item',
              title: '{{t("Details")}}',
              field,
              component: 'RecordReadPrettyAssociationFormBlockInitializer',
            },
            // {
            //   key: `${field.name}_form`,
            //   type: 'item',
            //   title: '{{t("Form")}}',
            //   field,
            //   component: 'RecordAssociationFormBlockInitializer',
            // },
          ],
        };
      }

      if (['hasMany', 'belongsToMany'].includes(field.type)) {
        return {
          key: field.name,
          type: 'subMenu',
          title: field?.uiSchema?.title || field.name,
          children: [
            {
              key: `${field.name}_table`,
              type: 'item',
              title: '{{t("Table")}}',
              field,
              component: 'RecordAssociationBlockInitializer',
            },
            {
              key: `${field.name}_details`,
              type: 'item',
              title: '{{t("Details")}}',
              field,
              component: 'RecordAssociationDetailsBlockInitializer',
            },
            {
              key: `${field.name}_form`,
              type: 'item',
              title: '{{t("Form")}}',
              field,
              component: 'RecordAssociationFormBlockInitializer',
            },
            {
              key: `${field.name}_calendar`,
              type: 'item',
              title: '{{t("Calendar")}}',
              field,
              component: 'RecordAssociationCalendarBlockInitializer',
            },
          ],
        };
      }

      return {
        key: field.name,
        type: 'item',
        field,
        title: field?.uiSchema?.title || field.name,
        component: 'RecordAssociationBlockInitializer',
      };
    }) as any;
  return relationFields;
};

const useDetailCollections = (props) => {
  const { actionInitializers } = props;
  const collection = useCollection();
  const { getChildrenCollections } = useCollectionManager();
  const childrenCollections = getChildrenCollections(collection.name);
  const detailCollections = [
    {
      key: collection.name,
      type: 'item',
      title: collection?.title || collection.name,
      component: 'RecordReadPrettyFormBlockInitializer',
      icon: false,
      targetCollection: collection,
      actionInitializers,
    },
  ].concat(
    childrenCollections.map((c) => {
      return {
        key: c.name,
        type: 'item',
        title: c?.title || c.name,
        component: 'RecordReadPrettyFormBlockInitializer',
        icon: false,
        targetCollection: c,
        actionInitializers,
      };
    }),
  ) as SchemaInitializerItemOptions[];
  return detailCollections;
};

const useFormCollections = (props) => {
  const { actionInitializers } = props;
  const collection = useCollection();
  const { getChildrenCollections } = useCollectionManager();
  const childrenCollections = getChildrenCollections(collection.name);
  const formCollections = [
    {
      key: collection.name,
      type: 'item',
      title: collection?.title || collection.name,
      component: 'RecordFormBlockInitializer',
      icon: false,
      targetCollection: collection,
      actionInitializers,
    },
  ].concat(
    childrenCollections.map((c) => {
      return {
        key: c.name,
        type: 'item',
        title: c?.title || c.name,
        component: 'RecordFormBlockInitializer',
        icon: false,
        targetCollection: c,
        actionInitializers,
      };
    }),
  ) as SchemaInitializerItemOptions[];

  return formCollections;
};

export const RecordBlockInitializers = (props: any) => {
  const { t } = useTranslation();
  const { insertPosition, component } = props;
  return (
    <SchemaInitializer.Button
      wrap={gridRowColWrap}
      insertPosition={insertPosition}
      component={component}
      title={component ? null : t('Add block')}
      icon={'PlusOutlined'}
      items={[
        {
          key: 'detail',
          type: 'subMenu',
          title: '{{t("Details")}}',
          children: useDetailCollections(props),
        },
        {
          key: 'form',
          type: 'subMenu',
          title: '{{t("Form")}}',
          children: useFormCollections(props),
        },
        {
          type: 'itemGroup',
          title: '{{t("Relationship blocks")}}',
          children: useRelationFields(),
        },
        {
          type: 'itemGroup',
          title: '{{t("Other blocks")}}',
          children: [
            {
              key: 'markdown',
              type: 'item',
              title: '{{t("Markdown")}}',
              component: 'MarkdownBlockInitializer',
            },
            {
              key: 'auditLogs',
              type: 'item',
              title: '{{t("Audit logs")}}',
              component: 'AuditLogsBlockInitializer',
            },
          ],
        },
      ]}
    />
  );
};
