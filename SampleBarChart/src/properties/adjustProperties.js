/**
 * Goes through all the property keys.
 * If necessary - makes adjustments to the property value and performs additional actions
 * @param {object} properties
 * @param {object} host
 *
 * @returns {object} properties
 */
export const adjustProperties = (properties, host) => {
  for (const [propertyKey] of Object.entries(properties)) {
    let propertyValue = properties[propertyKey];

    switch (propertyKey) {
    }

    properties[propertyKey] = propertyValue;
  }

  return properties;
};
