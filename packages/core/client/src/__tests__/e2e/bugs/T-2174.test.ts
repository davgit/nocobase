import { expect, test } from '@nocobase/test/client';

const config = {
  pageSchema: {
    _isJSONSchemaObject: true,
    version: '2.0',
    type: 'void',
    'x-component': 'Page',
    properties: {
      x9ersztdq7x: {
        _isJSONSchemaObject: true,
        version: '2.0',
        type: 'void',
        'x-component': 'Grid',
        'x-initializer': 'BlockInitializers',
        properties: {
          ppgwx2drpng: {
            _isJSONSchemaObject: true,
            version: '2.0',
            type: 'void',
            'x-component': 'Grid.Row',
            properties: {
              c25gfj884oe: {
                _isJSONSchemaObject: true,
                version: '2.0',
                type: 'void',
                'x-component': 'Grid.Col',
                properties: {
                  urmc26btvb5: {
                    _isJSONSchemaObject: true,
                    version: '2.0',
                    type: 'void',
                    'x-decorator': 'TableBlockProvider',
                    'x-acl-action': 't_ylz5vtxncxq:list',
                    'x-decorator-props': {
                      collection: 't_ylz5vtxncxq',
                      resource: 't_ylz5vtxncxq',
                      action: 'list',
                      params: {
                        pageSize: 20,
                      },
                      rowKey: 'id',
                      showIndex: true,
                      dragSort: false,
                      disableTemplate: false,
                    },
                    'x-designer': 'TableBlockDesigner',
                    'x-component': 'CardItem',
                    'x-filter-targets': [],
                    properties: {
                      actions: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
                        type: 'void',
                        'x-initializer': 'TableActionInitializers',
                        'x-component': 'ActionBar',
                        'x-component-props': {
                          style: {
                            marginBottom: 'var(--nb-spacing)',
                          },
                        },
                        'x-uid': 'ixeu99rujou',
                        'x-async': false,
                        'x-index': 1,
                      },
                      yxgybgmfhkp: {
                        _isJSONSchemaObject: true,
                        version: '2.0',
                        type: 'array',
                        'x-initializer': 'TableColumnInitializers',
                        'x-component': 'TableV2',
                        'x-component-props': {
                          rowKey: 'id',
                          rowSelection: {
                            type: 'checkbox',
                          },
                          useProps: '{{ useTableBlockProps }}',
                        },
                        properties: {
                          actions: {
                            _isJSONSchemaObject: true,
                            version: '2.0',
                            type: 'void',
                            title: '{{ t("Actions") }}',
                            'x-action-column': 'actions',
                            'x-decorator': 'TableV2.Column.ActionBar',
                            'x-component': 'TableV2.Column',
                            'x-designer': 'TableV2.ActionColumnDesigner',
                            'x-initializer': 'TableActionColumnInitializers',
                            properties: {
                              actions: {
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                type: 'void',
                                'x-decorator': 'DndContext',
                                'x-component': 'Space',
                                'x-component-props': {
                                  split: '|',
                                },
                                properties: {
                                  r51kgwrhpgd: {
                                    _isJSONSchemaObject: true,
                                    version: '2.0',
                                    type: 'void',
                                    title: '{{ t("View") }}',
                                    'x-action': 'view',
                                    'x-designer': 'Action.Designer',
                                    'x-component': 'Action.Link',
                                    'x-component-props': {
                                      openMode: 'drawer',
                                    },
                                    'x-decorator': 'ACLActionProvider',
                                    'x-designer-props': {
                                      linkageAction: true,
                                    },
                                    properties: {
                                      drawer: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        type: 'void',
                                        title: '{{ t("View record") }}',
                                        'x-component': 'Action.Container',
                                        'x-component-props': {
                                          className: 'nb-action-popup',
                                        },
                                        properties: {
                                          tabs: {
                                            _isJSONSchemaObject: true,
                                            version: '2.0',
                                            type: 'void',
                                            'x-component': 'Tabs',
                                            'x-component-props': {},
                                            'x-initializer': 'TabPaneInitializers',
                                            properties: {
                                              tab1: {
                                                _isJSONSchemaObject: true,
                                                version: '2.0',
                                                type: 'void',
                                                title: '{{t("Details")}}',
                                                'x-component': 'Tabs.TabPane',
                                                'x-designer': 'Tabs.Designer',
                                                'x-component-props': {},
                                                properties: {
                                                  grid: {
                                                    _isJSONSchemaObject: true,
                                                    version: '2.0',
                                                    type: 'void',
                                                    'x-component': 'Grid',
                                                    'x-initializer': 'RecordBlockInitializers',
                                                    properties: {
                                                      g8w7wq09bgo: {
                                                        _isJSONSchemaObject: true,
                                                        version: '2.0',
                                                        type: 'void',
                                                        'x-component': 'Grid.Row',
                                                        properties: {
                                                          '42t1ais26x8': {
                                                            _isJSONSchemaObject: true,
                                                            version: '2.0',
                                                            type: 'void',
                                                            'x-component': 'Grid.Col',
                                                            properties: {
                                                              zmq6hmh2i3a: {
                                                                _isJSONSchemaObject: true,
                                                                version: '2.0',
                                                                type: 'void',
                                                                'x-acl-action-props': {
                                                                  skipScopeCheck: true,
                                                                },
                                                                'x-acl-action': 't_ylz5vtxncxq.f_q32e4ieq49n:create',
                                                                'x-decorator': 'FormBlockProvider',
                                                                'x-decorator-props': {
                                                                  useSourceId: '{{ useSourceIdFromParentRecord }}',
                                                                  useParams: '{{ useParamsFromRecord }}',
                                                                  action: null,
                                                                  resource: 't_ylz5vtxncxq.f_q32e4ieq49n',
                                                                  collection: 't_ylz5vtxncxq',
                                                                  association: 't_ylz5vtxncxq.f_q32e4ieq49n',
                                                                },
                                                                'x-designer': 'FormV2.Designer',
                                                                'x-component': 'CardItem',
                                                                'x-component-props': {},
                                                                properties: {
                                                                  qii0gw1cb8e: {
                                                                    _isJSONSchemaObject: true,
                                                                    version: '2.0',
                                                                    type: 'void',
                                                                    'x-component': 'FormV2',
                                                                    'x-component-props': {
                                                                      useProps: '{{ useFormBlockProps }}',
                                                                    },
                                                                    properties: {
                                                                      grid: {
                                                                        _isJSONSchemaObject: true,
                                                                        version: '2.0',
                                                                        type: 'void',
                                                                        'x-component': 'Grid',
                                                                        'x-initializer': 'FormItemInitializers',
                                                                        properties: {
                                                                          s3hhb0ohnv1: {
                                                                            _isJSONSchemaObject: true,
                                                                            version: '2.0',
                                                                            type: 'void',
                                                                            'x-component': 'Grid.Row',
                                                                            properties: {
                                                                              t2qtgv250s0: {
                                                                                _isJSONSchemaObject: true,
                                                                                version: '2.0',
                                                                                type: 'void',
                                                                                'x-component': 'Grid.Col',
                                                                                properties: {
                                                                                  f_nr8xi7ezw5t: {
                                                                                    _isJSONSchemaObject: true,
                                                                                    version: '2.0',
                                                                                    type: 'string',
                                                                                    'x-designer': 'FormItem.Designer',
                                                                                    'x-component': 'CollectionField',
                                                                                    'x-decorator': 'FormItem',
                                                                                    'x-collection-field':
                                                                                      't_ylz5vtxncxq.f_nr8xi7ezw5t',
                                                                                    'x-component-props': {
                                                                                      style: {
                                                                                        width: '100%',
                                                                                      },
                                                                                    },
                                                                                    'x-uid': 'gr6ye0ejgkj',
                                                                                    'x-async': false,
                                                                                    'x-index': 1,
                                                                                  },
                                                                                },
                                                                                'x-uid': 'jz51fg61juf',
                                                                                'x-async': false,
                                                                                'x-index': 1,
                                                                              },
                                                                            },
                                                                            'x-uid': 'dw9potxn5az',
                                                                            'x-async': false,
                                                                            'x-index': 2,
                                                                          },
                                                                        },
                                                                        'x-uid': 'vyprewc6op9',
                                                                        'x-async': false,
                                                                        'x-index': 1,
                                                                      },
                                                                      actions: {
                                                                        _isJSONSchemaObject: true,
                                                                        version: '2.0',
                                                                        type: 'void',
                                                                        'x-initializer': 'CreateFormActionInitializers',
                                                                        'x-component': 'ActionBar',
                                                                        'x-component-props': {
                                                                          layout: 'one-column',
                                                                          style: {
                                                                            marginTop: 24,
                                                                          },
                                                                        },
                                                                        properties: {
                                                                          afuxokt3osc: {
                                                                            _isJSONSchemaObject: true,
                                                                            version: '2.0',
                                                                            title: '{{ t("Submit") }}',
                                                                            'x-action': 'submit',
                                                                            'x-component': 'Action',
                                                                            'x-designer': 'Action.Designer',
                                                                            'x-component-props': {
                                                                              type: 'primary',
                                                                              htmlType: 'submit',
                                                                              useProps: '{{ useCreateActionProps }}',
                                                                            },
                                                                            'x-action-settings': {
                                                                              triggerWorkflows: [],
                                                                            },
                                                                            type: 'void',
                                                                            'x-uid': '5fz8e6oboog',
                                                                            'x-async': false,
                                                                            'x-index': 1,
                                                                          },
                                                                        },
                                                                        'x-uid': 'up7fy4jbynz',
                                                                        'x-async': false,
                                                                        'x-index': 2,
                                                                      },
                                                                    },
                                                                    'x-uid': 'rts053txv5d',
                                                                    'x-async': false,
                                                                    'x-index': 1,
                                                                  },
                                                                },
                                                                'x-uid': '84cihdbgsy4',
                                                                'x-async': false,
                                                                'x-index': 1,
                                                              },
                                                            },
                                                            'x-uid': 'e58k99p8v7t',
                                                            'x-async': false,
                                                            'x-index': 1,
                                                          },
                                                        },
                                                        'x-uid': 'glf52r13dz6',
                                                        'x-async': false,
                                                        'x-index': 1,
                                                      },
                                                    },
                                                    'x-uid': '14rfeq12sgv',
                                                    'x-async': false,
                                                    'x-index': 1,
                                                  },
                                                },
                                                'x-uid': '6j7qo163w0u',
                                                'x-async': false,
                                                'x-index': 1,
                                              },
                                            },
                                            'x-uid': 'nzslc0b3a5a',
                                            'x-async': false,
                                            'x-index': 1,
                                          },
                                        },
                                        'x-uid': 'umv8rca71ox',
                                        'x-async': false,
                                        'x-index': 1,
                                      },
                                    },
                                    'x-uid': 'dormxy03out',
                                    'x-async': false,
                                    'x-index': 1,
                                  },
                                },
                                'x-uid': 's5hys18b8r1',
                                'x-async': false,
                                'x-index': 1,
                              },
                            },
                            'x-uid': 'e5641icd1oh',
                            'x-async': false,
                            'x-index': 1,
                          },
                          x6soi4xw3yn: {
                            _isJSONSchemaObject: true,
                            version: '2.0',
                            type: 'void',
                            'x-decorator': 'TableV2.Column.Decorator',
                            'x-designer': 'TableV2.Column.Designer',
                            'x-component': 'TableV2.Column',
                            properties: {
                              f_nr8xi7ezw5t: {
                                'x-uid': 'if1clbvakzu',
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-collection-field': 't_ylz5vtxncxq.f_nr8xi7ezw5t',
                                'x-component': 'CollectionField',
                                'x-component-props': {
                                  style: {
                                    width: '100%',
                                  },
                                  ellipsis: true,
                                },
                                'x-read-pretty': true,
                                'x-decorator': null,
                                'x-decorator-props': {
                                  labelStyle: {
                                    display: 'none',
                                  },
                                },
                                default: 'np55dbbny0e',
                                'x-async': false,
                                'x-index': 1,
                              },
                            },
                            'x-uid': '46jf982acnq',
                            'x-async': false,
                            'x-index': 2,
                          },
                          aoj0myt8kgn: {
                            _isJSONSchemaObject: true,
                            version: '2.0',
                            type: 'void',
                            'x-decorator': 'TableV2.Column.Decorator',
                            'x-designer': 'TableV2.Column.Designer',
                            'x-component': 'TableV2.Column',
                            properties: {
                              f_q32e4ieq49n: {
                                'x-uid': 'nmevvkp1dyq',
                                _isJSONSchemaObject: true,
                                version: '2.0',
                                'x-collection-field': 't_ylz5vtxncxq.f_q32e4ieq49n',
                                'x-component': 'CollectionField',
                                'x-component-props': {
                                  ellipsis: true,
                                  size: 'small',
                                  fieldNames: {
                                    label: 'f_nr8xi7ezw5t',
                                    value: 'id',
                                  },
                                },
                                'x-read-pretty': true,
                                'x-decorator': null,
                                'x-decorator-props': {
                                  labelStyle: {
                                    display: 'none',
                                  },
                                },
                                properties: {
                                  ony7hpl5247: {
                                    _isJSONSchemaObject: true,
                                    version: '2.0',
                                    type: 'void',
                                    title: '{{ t("View record") }}',
                                    'x-component': 'AssociationField.Viewer',
                                    'x-component-props': {
                                      className: 'nb-action-popup',
                                    },
                                    'x-index': 1,
                                    properties: {
                                      tabs: {
                                        _isJSONSchemaObject: true,
                                        version: '2.0',
                                        type: 'void',
                                        'x-component': 'Tabs',
                                        'x-component-props': {},
                                        'x-initializer': 'TabPaneInitializers',
                                        properties: {
                                          tab1: {
                                            _isJSONSchemaObject: true,
                                            version: '2.0',
                                            type: 'void',
                                            title: '{{t("Details")}}',
                                            'x-component': 'Tabs.TabPane',
                                            'x-designer': 'Tabs.Designer',
                                            'x-component-props': {},
                                            properties: {
                                              grid: {
                                                _isJSONSchemaObject: true,
                                                version: '2.0',
                                                type: 'void',
                                                'x-component': 'Grid',
                                                'x-initializer': 'RecordBlockInitializers',
                                                'x-uid': 'z8chebednow',
                                                'x-async': false,
                                                'x-index': 1,
                                              },
                                            },
                                            'x-uid': 'bemxws6nlsp',
                                            'x-async': false,
                                            'x-index': 1,
                                          },
                                        },
                                        'x-uid': 'kkiviyd3hax',
                                        'x-async': false,
                                        'x-index': 1,
                                      },
                                    },
                                    'x-uid': 'g2ynjolpxxr',
                                    'x-async': false,
                                  },
                                },
                                'x-async': false,
                                'x-index': 1,
                              },
                            },
                            'x-uid': 'mxhts7v66xt',
                            'x-async': false,
                            'x-index': 3,
                          },
                        },
                        'x-uid': 'jvbe1vvv2x5',
                        'x-async': false,
                        'x-index': 2,
                      },
                    },
                    'x-uid': 'q8igo0fwc04',
                    'x-async': false,
                    'x-index': 1,
                  },
                },
                'x-uid': 'bxeh7r9vao9',
                'x-async': false,
                'x-index': 1,
              },
            },
            'x-uid': '2kiklqcijua',
            'x-async': false,
            'x-index': 1,
          },
        },
        'x-uid': 'pyrahf1c66i',
        'x-async': false,
        'x-index': 1,
      },
    },
    'x-uid': 'u9vjrr5ehhq',
    'x-async': true,
    'x-index': 1,
  },
  collections: [
    {
      key: '14ptm4bp2ws',
      name: 't_ylz5vtxncxq',
      title: 'Test',
      inherit: false,
      hidden: false,
      description: null,
      fields: [
        {
          key: 'hlv63gj1nta',
          name: 'id',
          type: 'bigInt',
          interface: 'id',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          uiSchema: {
            type: 'number',
            title: '{{t("ID")}}',
            'x-component': 'InputNumber',
            'x-read-pretty': true,
          },
        },
        {
          key: 'g17u6c8oi7v',
          name: 'f_lkqy3eh4ag7',
          type: 'bigInt',
          interface: 'integer',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          isForeignKey: true,
          uiSchema: {
            type: 'number',
            title: 'f_lkqy3eh4ag7',
            'x-component': 'InputNumber',
            'x-read-pretty': true,
          },
        },
        {
          key: 'h11dyzaed9u',
          name: 'f_rathx54cqpy',
          type: 'bigInt',
          interface: 'integer',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          isForeignKey: true,
          uiSchema: {
            type: 'number',
            title: 'f_rathx54cqpy',
            'x-component': 'InputNumber',
            'x-read-pretty': true,
          },
        },
        {
          key: '1oxxnl3fpnn',
          name: 'createdAt',
          type: 'date',
          interface: 'createdAt',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          field: 'createdAt',
          uiSchema: {
            type: 'datetime',
            title: '{{t("Created at")}}',
            'x-component': 'DatePicker',
            'x-component-props': {},
            'x-read-pretty': true,
          },
        },
        {
          key: 'r3fbal67uj7',
          name: 'createdBy',
          type: 'belongsTo',
          interface: 'createdBy',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          target: 'users',
          foreignKey: 'createdById',
          uiSchema: {
            type: 'object',
            title: '{{t("Created by")}}',
            'x-component': 'AssociationField',
            'x-component-props': {
              fieldNames: {
                value: 'id',
                label: 'nickname',
              },
            },
            'x-read-pretty': true,
          },
          targetKey: 'id',
        },
        {
          key: 'fx55l7mh3it',
          name: 'updatedAt',
          type: 'date',
          interface: 'updatedAt',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          field: 'updatedAt',
          uiSchema: {
            type: 'string',
            title: '{{t("Last updated at")}}',
            'x-component': 'DatePicker',
            'x-component-props': {},
            'x-read-pretty': true,
          },
        },
        {
          key: 'j7gjg9nql34',
          name: 'updatedBy',
          type: 'belongsTo',
          interface: 'updatedBy',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          target: 'users',
          foreignKey: 'updatedById',
          uiSchema: {
            type: 'object',
            title: '{{t("Last updated by")}}',
            'x-component': 'AssociationField',
            'x-component-props': {
              fieldNames: {
                value: 'id',
                label: 'nickname',
              },
            },
            'x-read-pretty': true,
          },
          targetKey: 'id',
        },
        {
          key: '8lnta543skc',
          name: 'f_nr8xi7ezw5t',
          type: 'string',
          interface: 'select',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          uiSchema: {
            enum: [
              {
                value: 'np55dbbny0e',
                label: 'option1',
              },
              {
                value: 'zxteco8rjfc',
                label: 'option2',
              },
              {
                value: 'p7pi40zd91q',
                label: 'option3',
              },
            ],
            type: 'string',
            'x-component': 'Select',
            title: 'Single select',
          },
        },
        {
          key: '7emqqfzq3c3',
          name: 'f_q32e4ieq49n',
          type: 'hasMany',
          interface: 'o2m',
          description: null,
          collectionName: 't_ylz5vtxncxq',
          parentKey: null,
          reverseKey: null,
          foreignKey: 'f_rathx54cqpy',
          onDelete: 'SET NULL',
          uiSchema: {
            'x-component': 'AssociationField',
            'x-component-props': {
              multiple: true,
              fieldNames: {
                label: 'id',
                value: 'id',
              },
            },
            title: 'One to many',
          },
          target: 't_ylz5vtxncxq',
          targetKey: 'id',
          sourceKey: 'id',
        },
      ],
      category: [],
      logging: true,
      autoGenId: true,
      createdBy: true,
      updatedBy: true,
      createdAt: true,
      updatedAt: true,
      sortable: true,
      template: 'general',
      view: false,
    },
  ],
};

// fix https://nocobase.height.app/T-2174
test('BUG: should show default value option', async ({ page, mockPage }) => {
  await mockPage(config).goto();

  await page.getByRole('row', { name: '1 View' }).getByText('View').click();
  await page.getByText('Single select:').hover();
  await page.getByTestId('t_ylz5vtxncxq.f_nr8xi7ezw5t-field').getByTestId('designer-schema-settings').hover();

  await expect(page.getByRole('menuitem', { name: 'Set default value' })).toBeVisible();
});
