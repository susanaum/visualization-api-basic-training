const fontSectionEnum = {
	TITLE: 'title',
	NAME_SELECT: 'nameSelect',
	STYLE: 'style',
	SIZE_AND_COLOR: 'sizeAndColor',
	HORIZONTAL_ALIGN: 'horizontalAlign',
	VERTICAL_ALIGN: 'verticalAlign',
	ROTATION: 'rotation',
	WRAP_TEXT: 'wrapText'
};

const getFontSection = function getFontSection(
	keyIdEnum = {},
	displayOptions = [],
	disabledEnum = {},
	extraParam = {}
) {
	// in the future, pass along keyID enum object to pass along properties to the config

	const fontSection = {
		// begin font controls
		tagName: 'VerticalLayout',
		className: 'font-layout',
		children: []
	};

	const fontSectionElements = {
		[fontSectionEnum.TITLE]: {
			tagName: 'Text',
			className: 'section-header-text',
			text: { desc: 3433, name: 'Font' }
		},
		[fontSectionEnum.NAME_SELECT]: {
			tagName: 'Select',
			key: keyIdEnum.fontName || 'fontName',
			ariaLabel: { desc: 2027, name: 'Font' },
			className: 'select-font-name',
			disabled: disabledEnum.fontName,
			options: [
				'Arial',
				'Arial Black',
				'Arial Narrow',
				'Arial Unicode MS',
				'Batang',
				'Book Antiqua',
				'Bookman Old Style',
				'Bookshelf Symbol 1',
				'Bookshelf Symbol 2',
				'Bookshelf Symbol 3',
				'Comic Sans MS',
				'Courier New',
				'Garamond',
				'Haettenschweiler',
				'Helvetica',
				'Impact',
				'Lucida Console',
				'Lucida Sans Unicode',
				'Map Symbols',
				'Marlett',
				'Monotype Corsiva',
				'Monotype Sorts',
				'MS Gothic',
				'MS Outlook',
				'Microsoft Sans Serif',
				'MT Extra',
				'Open Sans SemiBold',
				'Open Sans',
				'Symbol',
				'Tahoma',
				'Times New Roman',
				'Trebuchet MS',
				'Verdana',
				'Webdings',
				'Wingdings',
				'Wingdings 2',
				'Wingdings 3'
			]
		},
		[fontSectionEnum.STYLE]: {
			// style
			tagName: 'MultiSelectBarLogic',
			key: keyIdEnum.fontStyle || 'fontStyle',
			disabled: disabledEnum.fontStyle,
			className: 'dossier-font-style',
			checked: [false, false, false, false],
			innerClassName: 'font-style-icons',
			options: ['bold', 'italic', 'underline', 'underscore']
		},
		[fontSectionEnum.SIZE_AND_COLOR]: {
			// size
			tagName: 'HorizontalLayout',
			className: 'size-and-color',
			children: [
				{
					tagName: 'InputNumber',
					key: keyIdEnum.fontSize || 'fontSize',
					disabled: disabledEnum.fontSize,
					format: 'pt',
					min: 1,
					value: 12,
					isValueString: extraParam.isFontSizeString,
					showStepper: true
				},
				{
					// font Color
					tagName: 'ColorPicker',
					key: keyIdEnum.fontColor || 'fontColor',
					disabled: disabledEnum.fontColor
				}
			]
		},
		[fontSectionEnum.HORIZONTAL_ALIGN]: {
			tagName: 'Radio',
			key: keyIdEnum.textAlignment || 'textAlignment',
			className: keyIdEnum.textAlignmentStyle || 'toggle-button-radio _4item',
			innerClassName: 'font-style-icons',
			horizontal: true,
			useIcons: true,
			useButtons: true,
			options: keyIdEnum.textAlignmentOptions || ['align-left', 'align-center', 'align-right', 'justify']
		},
		[fontSectionEnum.VERTICAL_ALIGN]: {
			tagName: 'Radio',
			key: keyIdEnum.verticalAlign || 'verticalAlign',
			className: 'toggle-button-radio _3item',
			innerClassName: 'vertical-align-icons',
			horizontal: true,
			useIcons: true,
			useButtons: true,
			options: ['top', 'middle', 'bottom']
		},
		[fontSectionEnum.ROTATION]: {
			tagName: 'HorizontalLayout',
			className: 'horizontal-flex-space-between _2item-stretch',
			children: [
				{
					tagName: 'Text',
					text: { desc: 12283, name: 'Rotation' }
				},
				{
					tagName: 'Select',
					key: keyIdEnum.rotation || 'rotation',
					ariaLabel: { desc: 12283, name: 'Rotation' },
					className: 'select-font-name',
					options: disabledEnum.NGM_ROTATION
						? [
								{ desc: 2066, name: 'Horizontal', value: 0 },
								{ desc: 2069, name: 'Vertical', value: 270 }
						  ]
						: [
								{ desc: 4604, name: 'Auto' },
								{ desc: 2066, name: 'Horizontal' },
								{ desc: 2069, name: 'Vertical' },
								{ desc: 2056, name: 'Custom' }
						  ]
				}
			]
		},
		[fontSectionEnum.WRAP_TEXT]: {
			tagName: 'Checkbox',
			key: keyIdEnum.wrapText || 'wrapText',
			text: { desc: 19360, name: 'Wrap texts' }
		}
	};

	if (displayOptions.length > 0) {
		// delete elements that were not passed in by the user
		Object.keys(fontSectionElements).forEach((key) => displayOptions.includes(key) || delete fontSectionElements[key]);
	}

	Object.keys(fontSectionElements).forEach((key) => fontSection.children.push(fontSectionElements[key]));

	return fontSection;
};

export { fontSectionEnum, getFontSection };
