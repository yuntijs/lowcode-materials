/**
 * 所有设置器
 */
export const Setters = {
  /**
   * 短文本型数据设置器，不可换行
   */
  StringSetter: {
    componentName: 'StringSetter',
  },
  /**
   * 数值型数据设置器
   */
  NumberSetter: {
    componentName: 'NumberSetter',
  },
  /**
   * 布尔型数据设置器
   */
  BoolSetter: {
    componentName: 'BoolSetter',
  },
  /**
   * 枚举型数据设置器，采用下拉的形式展现
   */
  SelectSetter: {
    componentName: 'SelectSetter',
  },
  /**
   * 变量型数据设置器
   */
  VariableSetter: {
    componentName: 'VariableSetter',
  },
  /**
   * 枚举型数据设置器，采用 tab 选择的形式展现
   */
  RadioGroupSetter: {
    componentName: 'RadioGroupSetter',
  },
  /**
   * 长文本型数据设置器，可换行
   */
  TextAreaSetter: {
    componentName: 'TextAreaSetter',
  },
  /**
   * 日期型数据设置器
   */
  DateSetter: {
    componentName: 'DateSetter',
  },
  /**
   * 时间型数据设置器
   */
  TimePicker: {
    componentName: 'TimePicker',
  },
  /**
   * 日期型 - 年数据设置器
   */
  DateYearSetter: {
    componentName: 'DateYearSetter',
  },
  /**
   * 日期型 - 月数据设置器
   */
  DateMonthSetter: {
    componentName: 'DateMonthSetter',
  },
  /**
   * 日期型数据设置器，可选择时间区间
   */
  DateRangeSetter: {
    componentName: 'DateRangeSetter',
  },
  /**
   * 事件绑定设置器
   */
  EventsSetter: {
    componentName: 'EventsSetter',
  },
  /**
   * 颜色设置器
   */
  ColorSetter: {
    componentName: 'ColorSetter',
  },
  /**
   * json 型数据设置器
   */
  JsonSetter: {
    componentName: 'JsonSetter',
  },
  /**
   * 样式设置器
   */
  StyleSetter: {
    componentName: 'StyleSetter',
  },
  /**
   * 样式名设置器
   */
  ClassNameSetter: {
    componentName: 'ClassNameSetter',
  },
  /**
   * 函数型数据设置器
   */
  FunctionSetter: {
    componentName: 'FunctionSetter',
  },
  /**
   * 混合型数据设置器
   */
  MixedSetter: {
    componentName: 'MixedSetter',
  },
  /**
   * 节点型数据设置器
   */
  SlotSetter: {
    componentName: 'SlotSetter',
  },
  /**
   * 列表数组行数据设置器
   */
  ArraySetter: {
    componentName: 'ArraySetter',
  },
  /**
   * 对象数据设置器，一般内嵌在 ArraySetter 中
   */
  ObjectSetter: {
    componentName: 'ObjectSetter',
  },
};

export const CLASS_NAME_PROP = {
  name: 'className',
  title: { label: '类名', tip: '自定义样式类名' },
  setter: { componentName: 'StringSetter' },
};

export const STYLE_PROP = {
  name: 'style',
  title: { label: '样式', tip: '自定义样式' },
  setter: { componentName: 'StyleSetter' },
};

export const STYLE_ONLY_CSS_CODE_PROP = {
  ...STYLE_PROP,
  setter: {
    ...STYLE_PROP.setter,
    props: {
      showModuleList: [],
    },
  },
};
