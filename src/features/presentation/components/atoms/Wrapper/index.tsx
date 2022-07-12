import React from 'react';
import { View, ViewProps } from 'react-native';

export type WrapperProps = Pick<ViewProps, 'style' | 'children' | 'testID'>;

function Wrapper({ style, testID, children }: WrapperProps) {
  return (
    <View testID={testID} style={style}>
      {children}
    </View>
  );
}

export default Wrapper;
