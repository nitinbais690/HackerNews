import { ColorValue, Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export function boxShadow(
  color: ColorValue,
  offset?: object,
  radius?: number,
  opacity?: number,
) {
  return {
    shadowColor: color,
    shadowOffset: offset ?? { height: 2, width: 2 },
    shadowOpacity: opacity ?? 0.2,
    shadowRadius: radius ?? 0.2,
    elevation: radius ?? 0.2,
  };
}
