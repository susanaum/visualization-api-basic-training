module.exports = {
  // ####################################################
  // THE NAME OF PLUGIN DIRECTORY, CLASS, NAMESPACE,
  // PLEASE DO NOT CHANGE THIS FIELD!!!
  plugin_name: 'SampleBarChart',
  // ####################################################
  // path_of_plugins:'C://Program Files//MicroStrategy//Workstation//Code//plugins',
  // the dir path of MicroStrategy plugins, relative or absolute path are both valid
  path_of_plugins: '/Users/smonje/Development/apache-tomcat-9.0.63/webapps/113U51/plugins',
  // path_of_plugins: 'plugins',
  // Whether you wanna manage WEB-INF altogether by yourself.
  // By default, files(e.g. messageBundle, styleCatalog.xml and visualizations.xml) in WEB-INF
  // would be created and updated based on this config file.
  // Only in the following two cases, the flag would be set to `TRUE`.
  // 1. You are an expert on MSTR custom vis.
  // 2. The custom vis is migrated from an old one, because we don't know if you've ever changed the WEB-INF.
  manual: false,
  // This field will be displayed in the vis gallery.
  // As default, this value is same as plugin_name.
  // But if plugin_name is D3WordCloud, then 'Word Cloud' is more readable and suitable as visualization_name.
  visualization_name: 'SampleBarChart',
  available_for_reports: true,
  available_for_documents: true,
  available_for_dossiers: true,
  categories: 'Custom', // category of the custome viz in gallery.
  desc_id: '', // id of viz description string defined in i18n message bundle.
  summary_id: '', // id of viz summary string defined in i18n message bundle.
  use_case_id: '', // id of viz use case string defined in i18n message bundle.
  requirements_id: '', // id of viz requirement string defined in i18n message bundle.
  summary: '', // default value of viz summary string defined in i18n message bundle.
  use_case: '', // default value of viz use case string defined in i18n message bundle.
  requirements: '', // default value of viz requirements string defined in i18n message bundle.
  format_panel_build_entry: './formatPanelConfig/config.js', // the build entry file of new format panel for the viz.
  use_react_config: true //Use react format panel.
};
