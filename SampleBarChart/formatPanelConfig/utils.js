import { PROPERTIES_ENUM } from "./enums";

export const emptyVizWarningMessage = {
  tagName: "VerticalLayout",
  key: PROPERTIES_ENUM.EMPTY_VIZ_WARNING_MESSAGE,
  children: [
    {
      tagName: "Text",
      text: {
        desc: 19565,
        name: "Add objects to the container to start formatting.",
      },
    },
  ],
};

/**
 * Checks whether a specific dropzone is populated
 * @param {object} host
 * @param {number} dropzoneIndex
 *
 * @returns {boolean}
 */
export const checkIfDropzoneIsPopulated = (host, dropzoneIndex) => {
  return host.zonesModel.getDropZoneObjectsByIndex(dropzoneIndex).length > 0;
};

export const DROPZONES_INDEXES = {
  ATTRIBUTE: 0,
  METRIC: 1,
  TOOLTIP: 2,
};
