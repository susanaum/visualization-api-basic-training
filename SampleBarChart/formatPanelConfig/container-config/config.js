import { FONT_ALIGN_VALUES, FONT_PROPS_SECTION } from './enum';
import { TITLE_AND_CONTAINER_PROP } from './titleAndContainerProperties';

const fontConfig = {
	tagName: 'FontConfig',
	keyIDs: {
		fontName: TITLE_AND_CONTAINER_PROP.TITLEBAR_FONT_FAMILY,
		fontStyle: TITLE_AND_CONTAINER_PROP.TITLEBAR_FONTSTYLE,
		fontSize: TITLE_AND_CONTAINER_PROP.TITLEBAR_FONT_SIZE,
		fontColor: TITLE_AND_CONTAINER_PROP.TITLEBAR_FONT_COLOR,
		textAlignment: TITLE_AND_CONTAINER_PROP.TITLEBAR_TEXT_ALIGNMENT
	},
	displayOptions: [
		FONT_PROPS_SECTION.NAME_SELECT,
		FONT_PROPS_SECTION.STYLE,
		FONT_PROPS_SECTION.SIZE_AND_COLOR,
		FONT_PROPS_SECTION.HORIZONTAL_ALIGN
	],
	horizontalAlignmentOptions: FONT_ALIGN_VALUES.HORIZONTAL_ALIGN_OPTIONS,
	textAlignmentStyle: FONT_ALIGN_VALUES.HORIZONTAL_ALIGN_STYLE
};

/**
 * @param {object} props
 *
 * @returns {object}
 */
const containerLayout = (props = {}) => ({
	tagName: 'BorderAndColorFillConfig',
	keyIDs: {
		fillColor: TITLE_AND_CONTAINER_PROP.CONTAINER_FILL_COLOR,
		fillOpacity: TITLE_AND_CONTAINER_PROP.CONTAINER_BORDER_OPACITY,
		borderStyle: TITLE_AND_CONTAINER_PROP.CONTAINER_BORDER_STYLE,
		borderColor: TITLE_AND_CONTAINER_PROP.CONTAINER_BORDER_COLOR
	},
	useFillGradient: props.useFillGradient
});

const positionAndSizeLayout = {
	tagName: 'PositionSizeConfig',
	min: 0,
	max: 100,
	format: '%',
	keyIDs: {
		section: TITLE_AND_CONTAINER_PROP.POSITION_AND_SIZE_SECTION,
		leftPosition: TITLE_AND_CONTAINER_PROP.CONTAINER_LEFT_POSITION,
		topPosition: TITLE_AND_CONTAINER_PROP.CONTAINER_TOP_POSITION,
		width: TITLE_AND_CONTAINER_PROP.CONTAINER_WIDTH,
		height: TITLE_AND_CONTAINER_PROP.CONTAINER_HEIGHT
	}
};

const containerConfig = {
	tagName: 'VerticalLayout',
	className: 'title-and-container-layout',
	key: 'graphFont',
	children: [
		{
			tagName: 'VerticalLayout',
			children: [
				{
					tagName: 'HorizontalLayout',
					className: 'horizontal-flex-space-between title-bar-container',
					children: [
						{
							tagName: 'Text',
							className: 'section-header-text title-bar-text',
							text: { desc: 7806, name: 'Title Bar' }
						},
						{
							tagName: 'Switch',
							key: TITLE_AND_CONTAINER_PROP.TITLEBAR_SHOW,
							func: {
								type: 'hide',
								targets: ['titleFontContent']
							}
						}
					]
				},
				{
					tagName: 'VerticalLayout',
					key: 'titleFontContent',
					children: [
						fontConfig,
						{
							tagName: 'HorizontalLayout',
							className: 'horizontal-flex-space-between _3item-stretch',
							children: [
								{
									tagName: 'Text',
									text: { desc: 13601, name: 'Fill' }
								},
								{
									tagName: 'ColorPicker',
									key: TITLE_AND_CONTAINER_PROP.TITLEBAR_BACKGROUND_COLOR
								},
								{
									tagName: 'InputNumber',
									key: TITLE_AND_CONTAINER_PROP.TITLEBAR_BACKGROUND_OPACITY,
									format: '%',
									min: 0,
									max: 100,
									value: 100
								}
							]
						}
					]
				}
			]
		},
		containerLayout(),
		positionAndSizeLayout
	]
};

const containerConfigWithBackgroundOpacity = {
	tagName: 'VerticalLayout',
	className: 'title-and-container-layout',
	children: [
		{
			tagName: 'VerticalLayout',
			children: [
				{
					tagName: 'HorizontalLayout',
					className: 'horizontal-flex-space-between title-bar-container',
					children: [
						{
							tagName: 'Text',
							className: 'section-header-text title-bar-text',
							text: { desc: 7806, name: 'Title Bar' }
						},
						{
							tagName: 'Switch',
							key: TITLE_AND_CONTAINER_PROP.TITLEBAR_SHOW,
							func: {
								type: 'hide',
								targets: ['titleFontContent']
							}
						}
					]
				},
				{
					tagName: 'VerticalLayout',
					children: [
						fontConfig,
						{
							tagName: 'Text',
							text: { desc: 3905, name: 'Background' }
						},
						{
							tagName: 'HorizontalLayout',
							className: 'background-color-container',
							children: [
								{
									tagName: 'ColorPicker',
									key: TITLE_AND_CONTAINER_PROP.TITLEBAR_BACKGROUND_COLOR
								},
								{
									tagName: 'InputNumber',
									format: '%',
									min: 0,
									max: 100,
									value: 100
								}
							]
						}
					]
				}
			]
		},
		containerLayout(),
		positionAndSizeLayout
	]
};

const containerNoFontConfig = {
	tagName: 'VerticalLayout',
	className: 'title-and-container-layout',
	children: [containerLayout(), positionAndSizeLayout]
};

/**
 * @param {object} props
 *
 * @returns {object}
 */
const getContainerNoFontConfig = (props = {}) => ({
	tagName: 'VerticalLayout',
	className: 'title-and-container-layout',
	key: 'graphFont',
	children: [containerLayout({ useFillGradient: props.useFillGradient }), positionAndSizeLayout]
});

export {
	containerConfig,
	containerNoFontConfig,
	positionAndSizeLayout,
	containerConfigWithBackgroundOpacity,
	getContainerNoFontConfig
};
