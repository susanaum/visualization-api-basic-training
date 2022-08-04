import { PROPERTIES_ENUM } from "./enums";

const properties = ["unifiedProperty"];

/**
 * @param {object} property
 */
const getPropertiesStringsArray = (property) => {
  if (typeof property === "object") {
    Object.values(property).forEach((nestedProperty) => {
      getPropertiesStringsArray(nestedProperty);
    });
  } else if (Array.isArray(property)) {
    property.forEach((nestedProperty) => {
      getPropertiesStringsArray(nestedProperty);
    });
  } else {
    properties.push(property);
  }
};

getPropertiesStringsArray(PROPERTIES_ENUM);

export default properties;
