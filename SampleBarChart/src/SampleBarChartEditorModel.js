mstrmojo.requiresCls("mstrmojo.vi.models.editors.CustomVisEditorModel");

const { WIDGET_TYPE: $WT } = mstrmojo.vi.models.editors.CustomVisEditorModel;

mstrmojo.plugins.SampleBarChart.SampleBarChartEditorModel = mstrmojo.declare(
  mstrmojo.vi.models.editors.CustomVisEditorModel,
  null,
  {
    scriptClass: "mstrmojo.plugins.SampleBarChart.SampleBarChartEditorModel",
    cssClass: "samplebarchart-editor-model",
    getCustomProperty() {
      return [
        {
          name: "Demo Custom Vis",
          value: [],
        },
      ];
    },
  }
);
