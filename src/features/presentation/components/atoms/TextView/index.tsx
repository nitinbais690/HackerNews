import React from 'react';
import { Text, TextStyle } from 'react-native';

/**
 * TextViewProps definition of Text properties
 */
export type TextViewProps = {
  // Content of Text View
  value: string;
  // Text Style
  style?: TextStyle;
  // Total number of lines does not exceed this number
  numberOfLines?: number;
  testID?: string;
};

export default function TextView({
  style,
  testID,
  numberOfLines,
  value,
}: TextViewProps) {
  return (
    <Text style={style} testID={testID} numberOfLines={numberOfLines}>
      {value}
    </Text>
  );
}
