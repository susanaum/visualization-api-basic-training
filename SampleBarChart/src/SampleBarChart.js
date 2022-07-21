import { adjustProperties } from "./properties/adjustProperties";
import { getDefaultProperties } from "./properties/getDefaultProperties";
import { enhanceHost } from "./utils/enhanceHost";

mstrmojo.requiresDescsWPrefix("SampleBarChart.", 10, 11, 12, 13);

// mojo module
mstrmojo.requiresCls("mstrmojo.CustomVisBase");

const { GraphicModel } = mstrmojo.customviz;
const { ENUM_RAW_DATA_FORMAT } = mstrmojo.models.template.DataInterface;

mstrmojo.plugins.SampleBarChart.SampleBarChart = mstrmojo.declare(
  mstrmojo.CustomVisBase,
  null,
  {
    scriptClass: "mstrmojo.plugins.SampleBarChart.SampleBarChart",
    cssClass: "samplebarchart",
    errorMessage:
      "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
    errorDetails:
      "This visualization requires one or more attributes and one metric.",
    useRichTooltip: false,
    reuseDOMNode: false,
    draggable: false,
    supportNEE: true,
    init(props) {
      this._super(props);
      enhanceHost(this);
      const defaultPropertyValues = getDefaultProperties();
      this.setDefaultPropertyValues(defaultPropertyValues);
    },
    createGraphicModels() {
      const rawData = this.dataInterface.getRawData(
        ENUM_RAW_DATA_FORMAT.ROWS_ADV,
        {
          hasSelection: true,
          hasTitleName: true,
          hasThreshold: true,
          additionalAttrIds: this.additionalAttrIds,
        }
      );

      return rawData.map((row) => {
        const { values, headers } = row;
        const graphicModel = new GraphicModel();

        graphicModel.idValueMapping = row.idValueMapping;
        graphicModel.setCustomProperties({
          text: headers[0].name,
          value: values[0].rv,
        });
        graphicModel.setId(this.getSelectorHash(row.metricSelector));
        graphicModel.setSelector(row.metricSelector, true);
        return graphicModel;
      });
    },
    clearDomNode() {
      const host = this;
      const { domNode } = host;
      domNode.innerHTML = "";
    },
    plot(appliedProperties = null) {
      const host = this;

      host.clearDomNode();

      const graphicModels = host.getGraphicModels();

      if (graphicModels.length === 0) {
        return;
      }

      let properties;
      if (appliedProperties) {
        properties = adjustProperties(appliedProperties, host);
      } else {
        const savedProperties = JSON.parse(host.getProperty("unifiedProperty"));
        properties = adjustProperties(savedProperties, host);
      }

      // render part
      const {
        showAttribute,
        showMetric,
        attributeBackgroundColor,
        metricBackgroundColor,
        attributeFontFamily,
        attributeFontStyle,
        attributeFontColor,
        attributeFontSize,
        metricFontFamily,
        metricFontStyle,
        metricFontColor,
        metricFontSize,
      } = properties;

      const addStyle = (
        element,
        fontFamily,
        fontColor,
        fontSize,
        fontStyle
      ) => {
        element.style.fontFamily = fontFamily;
        element.style.color = fontColor;
        element.style.fontSize = `${fontSize}px`;
        const [isBold, isItalic, isUnderlined, isCrossedOut] = fontStyle;
        element.style.fontWeight = isBold ? "bold" : "normal";
        element.style.fontStyle = isItalic ? "italic" : "normal";
        const textDecorationOptions = [];
        if (isUnderlined) textDecorationOptions.push("underline");
        if (isCrossedOut) textDecorationOptions.push("line-through");
        const textDecoration = textDecorationOptions.join(" ");
        element.style.textDecoration = textDecoration;
      };

      graphicModels.forEach((graphicModel) => {
        const container = document.createElement("div");
        container.classList.add("container");
        const attributeContainer = document.createElement("div");
        attributeContainer.classList.add("attributeContainer");
        attributeContainer.style.backgroundColor = attributeBackgroundColor;
        const attributeContainerText = document.createTextNode(
          showAttribute ? graphicModel.text : ""
        );
        addStyle(
          attributeContainer,
          attributeFontFamily,
          attributeFontColor,
          attributeFontSize,
          attributeFontStyle
        );
        attributeContainer.appendChild(attributeContainerText);

        const metricContainer = document.createElement("div");
        metricContainer.classList.add("metricContainer");
        metricContainer.style.backgroundColor = metricBackgroundColor;
        const metricContainerText = document.createTextNode(
          showMetric ? graphicModel.value : ""
        );
        addStyle(
          metricContainer,
          metricFontFamily,
          metricFontColor,
          metricFontSize,
          metricFontStyle
        );
        metricContainer.appendChild(metricContainerText);

        container.appendChild(attributeContainer);
        container.appendChild(metricContainer);

        host.domNode.appendChild(container);
      });
    },
  }
);
