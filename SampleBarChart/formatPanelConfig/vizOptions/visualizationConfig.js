import { emptyVizWarningMessage } from "../utils";
import { PROPERTIES_ENUM } from "../enums";

const attributeConfig = {
  tagName: "VerticalLayout",
  children: [
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
          key: PROPERTIES_ENUM.BAR_BACKGROUND_COLOR,
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
      children: [attributeConfig],
    },
  ],
};

export default visualizationConfig;
