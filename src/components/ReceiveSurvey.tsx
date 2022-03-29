import * as React from 'react';
import { Body, CardHeader, Avatar, Divider, Stack, Link, Container, tokens } from '@pongo-ui/react-components';
import { makeStyles, shorthands } from '@griffel/react';
import Image from 'next/image';

const useStyles = makeStyles({
  contentStyles: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding(`0px`, tokens.relaxedLayout),
  },

  mainStyles: {
    ...shorthands.padding(`0px`, tokens.relaxedLayout),
  },
});

export const ReceiveSurvey = () => {
  const styles = useStyles();

  return (
    <Container horizontalAlignment="center">
      <Stack grow vertical appearance="relaxed" horizontalAlignment="center">
        <Stack grow vertical>
          <div>
            <CardHeader
              avatar={<Avatar name="Pongo" />}
              header="Pongo <notifcations@pongo.com>"
              description={<Body>Mon 3/28/2021 4:03 PM</Body>}
            />
            <div className={styles.contentStyles}>
              <Body>To: You</Body>
              <Body>Cc: You; Author</Body>
            </div>
          </div>
          <Divider className={styles.mainStyles} />
          <Stack className={styles.mainStyles} grow vertical>
            <Body>Thanks for purchasing at Pongo!</Body>
            <Body>Please take a second to write a review.</Body>
            <Image src={'image/bag.png'} width="250px" height="250px" />
          </Stack>
        </Stack>
      </Stack>

      <Stack className={styles.mainStyles} divider={<Divider vertical />}>
        <Link>Reply</Link>
        <Link>Reply all</Link>
        <Link>Forward</Link>
      </Stack>
    </Container>
  );
};
