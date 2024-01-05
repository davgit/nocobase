import { CollectionFieldInterfaceV2 } from '../../application';
import { dateTimeProps, defaultProps, operators } from './properties';
import { IField } from './types';

export const createdAt: IField = {
  name: 'createdAt',
  type: 'object',
  group: 'systemInfo',
  order: 1,
  title: '{{t("Created at")}}',
  sortable: true,
  default: {
    type: 'date',
    field: 'createdAt',
    // name,
    uiSchema: {
      type: 'datetime',
      title: '{{t("Created at")}}',
      'x-component': 'DatePicker',
      'x-component-props': {},
      'x-read-pretty': true,
    },
  },
  availableTypes: ['date'],
  properties: {
    ...defaultProps,
    ...dateTimeProps,
  },
  filterable: {
    operators: operators.datetime,
  },
  titleUsable: true,
};

export class CreatedAtFieldInterface extends CollectionFieldInterfaceV2 {
  name = 'createdAt';
  type = 'object';
  group = 'systemInfo';
  order = 1;
  title = '{{t("Created at")}}';
  sortable = true;
  default = {
    type: 'date',
    field: 'createdAt',
    uiSchema: {
      type: 'datetime',
      title: '{{t("Created at")}}',
      'x-component': 'DatePicker',
      'x-component-props': {},
      'x-read-pretty': true,
    },
  };
  availableTypes = ['date'];
  properties = {
    ...defaultProps,
    ...dateTimeProps,
  };
  filterable = {
    operators: operators.datetime,
  };
  titleUsable = true;
}
