mstrmojo.requiresCls("mstrmojo.vi.models.CustomVisDropZones");

/**
 * @enum {number} ENUM_ALLOW_DROP_TYPE - { ATTRIBUTE, METRIC, ATTRIBUTE_AND_METRIC, ATTRIBUTE_OR_METRIC }
 */
const { ENUM_ALLOW_DROP_TYPE } = mstrmojo.vi.models.CustomVisDropZones;

// dropzone name list
const ATTRIBUTE = "Attribute";
const METRIC = "Metric";
const TOOLTIP = "Tooltip";

mstrmojo.plugins.SampleBarChart.SampleBarChartDropZones = mstrmojo.declare(
  mstrmojo.vi.models.CustomVisDropZones,
  null,
  {
    scriptClass: "mstrmojo.plugins.SampleBarChart.SampleBarChartDropZones",
    cssClass: "samplebarchart-dropzones",
    getExtraUnitMenuItems: function W(x, w, AB, AA) {
      var z = this, 
        AC = this.id;
      
      x.addSeparator();
      this.buildThresholdMenuOptions(x, AA, false);

      if (this.shouldShowDisplayFormsMenu(AB)) {
        x.addEditorMenuItem(mstrmojo.desc(11908, "Display Attribute Forms"), AC, this.getDisplayFormsMenu, AB);
      }
      if (this.showNumberFormat(AB)) {
        x.addEditorMenuItem(mstrmojo.desc(13237, "Number Format"), AC, this.getNumberFormatEditorCfg, AA);
      }
      this.visModel.xtab._gatherData=true;
    },
    buildThresholdMenuOptions: function buildThresholdMenuOptions(cfg, itemContext, isColorBy) {
      mstrmojo.all[this.hostId].model.buildThresholdMenuOptions(cfg, itemContext, false, false);
    },
    showNumberFormat: function N(AL) {
      if(AL.hasOwnProperty("fs")){
        return false;
      }
      return true;
    },
    shouldShowDisplayFormsMenu:function N(AL){
    //check if it is n attribute
      if(AL.hasOwnProperty("fs")){
        return true;
      }
      return false;
    },
    showQuickSubtotals:function N(){
      return true;
    },
    getCustomDropZones() {
      return [
        {
          name: ATTRIBUTE,
          title: "Drag attributes here",
          maxCapacity: 1,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE,
        },
        {
          name: METRIC,
          title: "Drag metrics here",
          maxCapacity: 1,
          allowObjectType: ENUM_ALLOW_DROP_TYPE.METRIC,
        },
        {
          name: TOOLTIP,
          isAdditionalInfo: true,
          title: "Drag objects here",
          allowObjectType: ENUM_ALLOW_DROP_TYPE.ATTRIBUTE_AND_METRIC,
        },
      ];
    },
    getActionsForObjectsDropped(
      zone,
      droppedObjects,
      idx,
      replaceObject,
      extras
    ) {
      const actions = [];
      if (this.getDropZoneName(zone) === METRIC) {
        this.getAddDropZoneObjectsActions(
          actions,
          TOOLTIP,
          droppedObjects,
          idx,
          extras
        );
      }
      return actions;
    },
    getActionsForObjectsRemoved(zone, objects) {
      const actions = [];
      if (this.getDropZoneName(zone) === METRIC) {
        this.getRemoveDropZoneObjectsActions(actions, TOOLTIP, objects);
      }
      return actions;
    },
  }
);
