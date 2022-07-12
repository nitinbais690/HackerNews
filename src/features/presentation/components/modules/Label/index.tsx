import TextView, { TextViewProps } from 'atoms/TextView';
import React from 'react';
import {
  FONT_BOLD,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  FONT_REGULAR,
  FONT_SEMI_BOLD,
} from 'theme/typography';

export enum LabelVariant {
  HEADING = 'heading',
  SUB_HEADING = 'subHeading',
  NORMAL = 'normal',
}

export type LabelProps = {
  testID?: string;
  variant?: LabelVariant;
} & TextViewProps;

const FontStyle = {
  heading: [FONT_BOLD, FONT_FAMILY_BOLD],
  subHeading: [FONT_SEMI_BOLD, FONT_FAMILY_SEMI_BOLD],
  normal: [FONT_REGULAR, FONT_FAMILY_REGULAR],
};

function Label({
  variant = LabelVariant.NORMAL,
  value,
  style,
  testID,
}: LabelProps) {
  return (
    <TextView
      value={value}
      style={[FontStyle[variant], style]}
      testID={testID}
    />
  );
}

export default Label;
