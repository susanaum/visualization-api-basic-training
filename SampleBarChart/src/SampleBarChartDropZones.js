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
