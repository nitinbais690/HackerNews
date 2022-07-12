import Label, { LabelProps, LabelVariant } from 'modules/Label';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SCALE_12 } from 'theme/spacing';
import { FONT_SIZE_16 } from 'theme/typography';

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  text: {
    padding: SCALE_12,
    fontSize: FONT_SIZE_16,
  },
});

export enum HeadingVariant {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

export type HeadingProps = {
  variant?: HeadingVariant;
} & Pick<LabelProps, 'value'>;

function Heading({ value, variant = HeadingVariant.LEFT }: HeadingProps) {
  return (
    <Label
      variant={LabelVariant.HEADING}
      value={value}
      testID="heading"
      style={[styles.text, styles[variant] as object]}
    />
  );
}

export default Heading;
