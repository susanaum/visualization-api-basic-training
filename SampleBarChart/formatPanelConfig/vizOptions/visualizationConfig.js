import { emptyVizWarningMessage } from "../utils";
import { PROPERTIES_ENUM } from "../enums";

const attributeConfig = {
  tagName: "VerticalLayout",
  children: [
    {
      tagName: "Text",
      className: "section-header-text",
      text: mstrmojo.descP("SampleBarChart.", "10", "Attribute"),
    },
    {
      tagName: "Checkbox",
      key: PROPERTIES_ENUM.SHOW_ATTRIBUTE,
      text: mstrmojo.descP("SampleBarChart.", "11", "Show attribute"),
    },
    {
      tagName: "HorizontalLayout",
      className: "horizontal-flex-space-between _2item-stretch",
      children: [
        {
          tagName: "Text",
          text: { desc: 9738, name: "Area" },
        },
        {
          tagName: "ColorPicker",
          key: PROPERTIES_ENUM.ATTRIBUTE_BACKGROUND_COLOR,
        },
      ],
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
      tagName: "Checkbox",
      key: PROPERTIES_ENUM.SHOW_METRIC,
      text: mstrmojo.descP("SampleBarChart.", "13", "Show metric"),
    },
    {
      tagName: "HorizontalLayout",
      className: "horizontal-flex-space-between _2item-stretch",
      children: [
        {
          tagName: "Text",
          text: { desc: 9738, name: "Area" },
        },
        {
          tagName: "ColorPicker",
          key: PROPERTIES_ENUM.METRIC_BACKGROUND_COLOR,
        },
      ],
    },
  ],
};

const visualizationConfig = {
  tagName: "VerticalLayout",
  children: [
    emptyVizWarningMessage,
    {
      tagName: "VerticalLayout",
      key: PROPERTIES_ENUM.VIZ_FIRST_TAB_SECTION,
      children: [attributeConfig, metricConfig],
    },
  ],
};

export default visualizationConfig;
