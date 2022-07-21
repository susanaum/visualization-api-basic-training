/**
 * Saves property as async request
 * @param {string} property
 * @param {void} value
 * @param {object} refresh
 */
function savePropertyAndUpdateWidgetAsync(property, value, refresh) {
	setTimeout(() => {
		this.savePropertyAndUpdateWidget(property, value, refresh);
	});
}

/**
 * Adds additional functionalities to the host object
 * @param {object} host
 */
export const enhanceHost = (host) => {
	host.savePropertyAndUpdateWidgetAsync = savePropertyAndUpdateWidgetAsync;
};
