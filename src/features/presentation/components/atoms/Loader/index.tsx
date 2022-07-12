import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';
import Colors from 'theme/colors';
import styles from './styles';

export type LoaderProps = Pick<
  ActivityIndicatorProps,
  'size' | 'color' | 'accessibilityHint'
>;

function Loader({ size = 'large', color, accessibilityHint }: LoaderProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        accessibilityHint={accessibilityHint}
        size={size}
        color={color ?? Colors.background.secondary}
      />
    </View>
  );
}

export default Loader;
