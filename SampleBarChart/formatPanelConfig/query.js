import properties from "./properties.js";
import { checkIfDropzoneIsPopulated, DROPZONES_INDEXES } from "./utils.js";
import { PROPERTIES_ENUM } from "./enums";

/**
 * @param {object} host
 * @param {string} propertyKey property name
 *
 * @returns {object} {value: any, visible: boolean, enable: boolean}
 */
const query = (host, propertyKey) => {
  if (properties.indexOf(propertyKey) < 0) return {};

  const unifiedProperty = JSON.parse(host.getProperty("unifiedProperty"));

  const currentValue = unifiedProperty[propertyKey];

  const isSomeMetricAdded = checkIfDropzoneIsPopulated(
    host,
    DROPZONES_INDEXES.METRIC
  );

  const isSomeAttributeAdded = checkIfDropzoneIsPopulated(
    host,
    DROPZONES_INDEXES.ATTRIBUTE
  );

  switch (propertyKey) {
    case PROPERTIES_ENUM.EMPTY_VIZ_WARNING_MESSAGE:
      return {
        visible: !isSomeMetricAdded || !isSomeAttributeAdded,
      };

    case PROPERTIES_ENUM.VIZ_FIRST_TAB_SECTION:
    case PROPERTIES_ENUM.VIZ_SECOND_TAB_SECTION:
      return {
        visible: isSomeMetricAdded && isSomeAttributeAdded,
      };
    default:
      return {
        value: currentValue,
      };
  }
};

export default query;
