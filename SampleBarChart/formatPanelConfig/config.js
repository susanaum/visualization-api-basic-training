/* eslint-disable import/extensions */
import { containerConfig } from "./container-config/config";
import visualizationConfig from "./vizOptions/visualizationConfig.js";
import textAndFormConfig from "./textAndForm/textAndFormConfig.js";
import apply from "./apply.js";
import query from "./query.js";
import properties from "./properties.js";

const config = {
  tagName: "SegmentControl",
  key: "tabSelector",
  options: [
    {
      icon: "_samplebarchart",
      ariaLabel: { desc: 19962, name: "Visualization Options" },
    },
    { icon: "text-format", ariaLabel: { desc: 19961, name: "Text and Form" } },
    {
      icon: "title-container",
      ariaLabel: { desc: 12049, name: "Title and Container" },
    },
  ],
  children: [visualizationConfig, textAndFormConfig, containerConfig],
};

const mstrSampleBarChart = { config, properties, apply, query };
export { mstrSampleBarChart };
