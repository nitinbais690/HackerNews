import { StyleSheet } from 'react-native';
import Colors from 'theme/colors';

import { SCALE_12, SCALE_18, SCALE_5 } from 'theme/spacing';
import { scaleSize } from 'theme/mixins';
import { FONT_SIZE_12, FONT_SIZE_16 } from 'theme/typography';

export default StyleSheet.create({
  itemContainer: {
    paddingHorizontal: SCALE_12,
    paddingVertical: SCALE_18,
    borderRadius: scaleSize(5),
    backgroundColor: Colors.white,
    margin: SCALE_5,
    marginHorizontal: SCALE_12,
  },
  title: {
    fontSize: FONT_SIZE_16,
    textTransform: 'capitalize',
    color: Colors.text.link,
  },
  score: {
    fontSize: FONT_SIZE_12,
    color: Colors.black,
  },
  by: {
    fontSize: FONT_SIZE_12,
    color: Colors.text.gray,
  },
  row: {
    justifyContent: 'space-between',
    marginTop: SCALE_5,
  },
});
