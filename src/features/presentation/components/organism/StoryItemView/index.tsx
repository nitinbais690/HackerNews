import React from 'react';
import Colors from 'theme/colors';

import RowContainer from 'atoms/RowContainer';
import Label, { LabelVariant } from 'modules/Label';
import styles from './styles';
import Container from 'modules/Container';
import { boxShadow } from 'theme/mixins';
import { StoryItem } from 'entities/story';
import { timeConvert } from 'utils/helpers';

export type StoryItemViewProps = {
  item: StoryItem;
  testID?: string;
};

function Header({ title }: Pick<StoryItem, 'title'>) {
  return (
    <Label
      testID="title"
      variant={LabelVariant.HEADING}
      value={title}
      style={styles.title}
    />
  );
}

function Body({ by, score }: Pick<StoryItem, 'score' | 'by'>) {
  return (
    <RowContainer style={styles.row}>
      <Label
        variant={LabelVariant.SUB_HEADING}
        value={`${score} point(s)`}
        style={styles.score}
        testID="score"
      />
      <Label
        variant={LabelVariant.SUB_HEADING}
        value={`by ${by}`}
        style={styles.by}
        testID="by"
      />
    </RowContainer>
  );
}

function Footer({
  descendants,
  time,
}: Pick<StoryItem, 'descendants' | 'time'>) {
  return (
    <RowContainer style={styles.row}>
      <Label
        value={` ${descendants} comment(s)`}
        style={styles.score}
        testID="comments"
      />
      <Label
        value={` ${timeConvert(time)} hour:minutes ago`}
        style={styles.by}
        testID="time"
      />
    </RowContainer>
  );
}

function StoryItemView({ item, testID }: StoryItemViewProps) {
  return (
    <Container
      testID={testID}
      style={{
        ...styles.itemContainer,
        ...boxShadow(Colors.black, undefined, 30),
      }}>
      <Header title={item.title} />
      <Body score={item.score} by={item.by} />
      <Footer descendants={item.descendants} time={item.time} />
    </Container>
  );
}

export default StoryItemView;
