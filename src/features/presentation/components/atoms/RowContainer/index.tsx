import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import styles from './styles';

export type RowContainerProps = {
  style?: ViewStyle;
  testID?: string;
  children: ReactNode;
};

function RowContainer({ style, testID, children }: RowContainerProps) {
  return (
    <View testID={testID} style={[styles.row, style]}>
      {children}
    </View>
  );
}

export default RowContainer;
