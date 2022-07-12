import Wrapper, { WrapperProps } from 'atoms/Wrapper';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import styles from './styles';

export enum ContainerVariant {
  WRAPPER_WITH_SAFE_AREA_VIEW,
  WRAPPER,
  CENTER_WRAPPER,
}

export type ContainerPropsType = {
  /**
   * Used to container with safeAreaView or normal.
   */
  variant?: ContainerVariant;
  edges?: Pick<SafeAreaViewProps, 'edges'>;
} & WrapperProps;

function Container({
  variant,
  children,
  style,
  edges,
  testID = 'container',
}: ContainerPropsType) {
  const { width, height } = useWindowDimensions();
  if (variant === ContainerVariant.CENTER_WRAPPER) {
    return (
      <Wrapper
        testID={testID}
        style={{ ...styles.centerContainer, width, height }}>
        {children}
      </Wrapper>
    );
  }
  if (variant === ContainerVariant.WRAPPER_WITH_SAFE_AREA_VIEW) {
    return (
      <SafeAreaView edges={edges} style={styles.safeAreaView} testID={testID}>
        <Wrapper style={style}>{children}</Wrapper>
      </SafeAreaView>
    );
  }
  return (
    <Wrapper testID={testID} style={style}>
      {children}
    </Wrapper>
  );
}

export default Container;
