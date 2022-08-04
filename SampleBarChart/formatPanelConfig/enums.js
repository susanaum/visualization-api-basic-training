import {
  PROPERTIES_INFO,
  PROPERTIES_VALUES_INFO as PROPERTIES_VALUES_ENUM,
} from "../src/properties/propertiesInfo";

const PROPERTIES_ENUM = {};

Object.entries(PROPERTIES_INFO).forEach(([key, { name }]) => {
  PROPERTIES_ENUM[key] = name;
});

export { PROPERTIES_ENUM, PROPERTIES_VALUES_ENUM };
