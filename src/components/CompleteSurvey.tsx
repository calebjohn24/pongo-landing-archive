import * as React from 'react';
import {
  Header2,
  Card,
  CardHeader,
  Container,
  Stack,
  Header1,
  RadioGroup,
  Radio,
  SubHeadline,
} from '@pongo-ui/react-components';
import Image from 'next/image';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  emojiButtonStyles: {
    fontSize: '20px',
  },

  buttonStyles: {
    maxWidth: '300px',
  },
});

export const CompleteSurvey = () => {
  const styles = useStyles();

  return (
    <Container appearance="relaxed" horizontalAlignment="center">
      <Stack vertical horizontalAlignment="center">
        <Header1 align="center">Thanks for your purchase!</Header1>
        <SubHeadline align="center">Did you like this item?</SubHeadline>
      </Stack>
      <Stack horizontalAlignment="center">
        <Card inline>
          <CardHeader header={<Header2>Printed Tote Bag</Header2>} />
          <Stack horizontalAlignment="center">
            <Image src={'image/bag.png'} width="100px" height="100px" />
          </Stack>
          <Stack horizontalAlignment="center">
            <RadioGroup className={styles.emojiButtonStyles} layout="horizontal">
              <Radio label={'👍'} value={'0'} />
              <Radio label={'👎'} value={'1'} />
            </RadioGroup>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
