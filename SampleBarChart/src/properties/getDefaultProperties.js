import { PROPERTIES_INFO } from "./propertiesInfo";

/**
 * Creates and returns object with default properties
 * @returns {object} properties
 */
export const getDefaultProperties = () => {
  const DEFAULT_PROPERTIES = {};

  Object.values(PROPERTIES_INFO).forEach(({ name, defaultValue }) => {
    DEFAULT_PROPERTIES[name] = defaultValue;
  });

  return { ["unifiedProperty"]: JSON.stringify({ ...DEFAULT_PROPERTIES }) };
};
