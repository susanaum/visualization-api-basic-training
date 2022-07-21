const TITLE_AND_CONTAINER_PROP = {
	POSITION_AND_SIZE_SECTION: 'positionAndSizeSection', // position and size
	// title properties
	TITLEBAR_SHOW: 'title_tbShw', // Show title bar
	TITLEBAR_FONTSTYLE: 'title_fontStyle', // font style
	TITLEBAR_TEXT_ALIGNMENT: 'title_alh', // horizontal text alignment
	TITLEBAR_FONT_COLOR: 'title_fc', // font color
	TITLEBAR_BACKGROUND_COLOR: 'title_bc', // background color
	TITLEBAR_BACKGROUND_OPACITY: 'title_fill_opacity', // title bar fill opacity
	TITLEBAR_FONT_SIZE: 'title_fsz', // font size
	TITLEBAR_FONT_FAMILY: 'title_ff',
	// container properties
	CONTAINER_FILL_COLOR: 'containerFill', // container fill
	CONTAINER_BORDER_OPACITY: 'container_bo', // border opacity
	CONTAINER_BORDER_STYLE: 'container_borderStyle',
	CONTAINER_BORDER_COLOR: 'container_borderColor',
	CONTAINER_LEFT_POSITION: 'container_left', // container X position
	CONTAINER_TOP_POSITION: 'container_top', // container Y position
	CONTAINER_HEIGHT: 'container_height', // container height
	CONTAINER_WIDTH: 'container_width' // container width
};

// these are some common property names which are used by many vizs and to avoid conflicts we separate them into commond props
// and specific props e.g. title_fsz to use in config files and query func, but to set we use 'fsz'
const COMMOM_PROP_NAMES = {
	FONTSTYLE: 'fontStyle', // font style
	TEXT_ALIGNMENT: 'alh', // horizontal text alignment
	VERTICAL_ALIGN: 'alv', // vertical text alignment
	FONT_COLOR: 'fc', // font color
	BACKGROUND_COLOR: 'bc', // background color
	FONT_SIZE: 'fsz', // font size
	FONT_FAMILY: 'ff',
	BORDER_OPACITY: 'bo', // border opacity
	BORDER_STYLE: 'borderStyle',
	BORDER_COLOR: 'borderColor',
	LEFT_POSITION: 'left', // X position
	TOP_POSITION: 'top', // Y position
	HEIGHT: 'height', // height
	WIDTH: 'width' // width
};

export { TITLE_AND_CONTAINER_PROP, COMMOM_PROP_NAMES };
