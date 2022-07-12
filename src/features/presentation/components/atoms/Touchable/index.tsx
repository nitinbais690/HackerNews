import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';

export type TouchableProps = Pick<
  TouchableOpacityProps,
  'style' | 'children' | 'onPress' | 'onLongPress' | 'testID'
>;

function Touchable({ children, ...props }: TouchableProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      {children}
    </TouchableOpacity>
  );
}

export default Touchable;
