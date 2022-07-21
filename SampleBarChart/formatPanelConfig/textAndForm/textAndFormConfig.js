import { PROPERTIES_ENUM } from "../enums";
import { emptyVizWarningMessage } from "../utils";

const attributeConfig = {
  tagName: "VerticalLayout",
  children: [
    {
      tagName: "Text",
      className: "section-header-text",
      text: mstrmojo.descP("SampleBarChart.", "10", "Attribute"),
    },
    {
      tagName: "FontConfig",
      keyIDs: {
        fontName: PROPERTIES_ENUM.ATTRIBUTE_FONT_FAMILY,
        fontStyle: PROPERTIES_ENUM.ATTRIBUTE_FONT_STYLE,
        fontSize: PROPERTIES_ENUM.ATTRIBUTE_FONT_SIZE,
        fontColor: PROPERTIES_ENUM.ATTRIBUTE_FONT_COLOR,
      },
      displayOptions: ["nameSelect", "style", "sizeAndColor"],
    },
  ],
};

const metricConfig = {
  tagName: "VerticalLayout",
  children: [
    {
      tagName: "Text",
      className: "section-header-text",
      text: mstrmojo.descP("SampleBarChart.", "12", "Metric"),
    },
    {
      tagName: "FontConfig",
      keyIDs: {
        fontName: PROPERTIES_ENUM.METRIC_FONT_FAMILY,
        fontStyle: PROPERTIES_ENUM.METRIC_FONT_STYLE,
        fontSize: PROPERTIES_ENUM.METRIC_FONT_SIZE,
        fontColor: PROPERTIES_ENUM.METRIC_FONT_COLOR,
      },
      displayOptions: ["nameSelect", "style", "sizeAndColor"],
    },
  ],
};

const textAndFormConfig = {
  tagName: "VerticalLayout",
  children: [
    emptyVizWarningMessage,
    {
      tagName: "VerticalLayout",
      key: PROPERTIES_ENUM.VIZ_SECOND_TAB_SECTION,
      children: [attributeConfig, metricConfig],
    },
  ],
};

export default textAndFormConfig;
