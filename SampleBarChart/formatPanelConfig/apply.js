import properties from "./properties.js";

/**
 * Fires after changes in the format panel and applies changes to the properties
 * @param {object} host
 * @param {string} propertyKey
 * @param {any} value
 */
const apply = (host, propertyKey, value) => {
  if (properties.indexOf(propertyKey) < 0) return;

  let unifiedProperty = JSON.parse(host.getProperty("unifiedProperty"));

  const notRefresh = {
    callback: () => {},
  };

  let useDefaultPropertySave = true;

  const preventDefaultPropertySave = () => {
    useDefaultPropertySave = false;
  };

  switch (propertyKey) {
  }

  if (useDefaultPropertySave) {
    unifiedProperty = { ...unifiedProperty, [propertyKey]: value };

    host.savePropertyAndUpdateWidgetAsync(
      "unifiedProperty",
      JSON.stringify(unifiedProperty),
      notRefresh
    );
  }

  host.plot(unifiedProperty);
};

export default apply;
