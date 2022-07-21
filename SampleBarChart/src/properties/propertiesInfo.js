export const PROPERTIES_VALUES_INFO = {};

const sharedFontOptions = {
  fontFamily: "Open Sans",
  fontStyle: [false, false, false, false],
  fontSize: 12,
  fontColor: "#FFFFFF",
};

export const PROPERTIES_INFO = {
  EMPTY_VIZ_WARNING_MESSAGE: {
    name: "emptyVizWarningMessage",
    defaultValue: null,
  },
  VIZ_FIRST_TAB_SECTION: {
    name: "vizFirstTabSection",
    defaultValue: null,
  },
  VIZ_SECOND_TAB_SECTION: {
    name: "vizSecondTabSection",
    defaultValue: null,
  },
  SHOW_ATTRIBUTE: {
    name: "showAttribute",
    defaultValue: true,
  },
  SHOW_METRIC: {
    name: "showMetric",
    defaultValue: true,
  },
  ATTRIBUTE_BACKGROUND_COLOR: {
    name: "attributeBackgroundColor",
    defaultValue: "#449c4c",
  },
  METRIC_BACKGROUND_COLOR: {
    name: "metricBackgroundColor",
    defaultValue: "#d4b33b",
  },
  ATTRIBUTE_FONT_FAMILY: {
    name: "attributeFontFamily",
    defaultValue: sharedFontOptions.fontFamily,
  },
  ATTRIBUTE_FONT_STYLE: {
    name: "attributeFontStyle",
    defaultValue: sharedFontOptions.fontStyle,
  },
  ATTRIBUTE_FONT_COLOR: {
    name: "attributeFontColor",
    defaultValue: sharedFontOptions.fontColor,
  },
  ATTRIBUTE_FONT_SIZE: {
    name: "attributeFontSize",
    defaultValue: sharedFontOptions.fontSize,
  },
  METRIC_FONT_FAMILY: {
    name: "metricFontFamily",
    defaultValue: sharedFontOptions.fontFamily,
  },
  METRIC_FONT_STYLE: {
    name: "metricFontStyle",
    defaultValue: sharedFontOptions.fontStyle,
  },
  METRIC_FONT_COLOR: {
    name: "metricFontColor",
    defaultValue: sharedFontOptions.fontColor,
  },
  METRIC_FONT_SIZE: {
    name: "metricFontSize",
    defaultValue: sharedFontOptions.fontSize,
  },
};
