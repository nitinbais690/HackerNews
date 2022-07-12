import { scaleFont } from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_FAMILY_SEMI_BOLD = 'OpenSans-SemiBold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '200';
export const FONT_WEIGHT_BOLD_SEMI_BOLD = '600';
export const FONT_WEIGHT_BOLD = 'bold';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

//ICON SIZE

export const ICON_SIZE_20 = scaleFont(20);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_SEMI_BOLD = {
  fontFamily: FONT_FAMILY_SEMI_BOLD,
  fontWeight: FONT_WEIGHT_BOLD_SEMI_BOLD,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
