import * as React from 'react';
import { Button, Stack, Body, LinkedinIcon, InstagramIcon, TwitterIcon } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  grow: {
    display: 'flex',
    flexGrow: '1',
  },
});

export const Footer = () => {
  const styles = useStyles();

  return (
    <Stack grow>
      <Stack appearance="relaxed" verticalAlignment="center">
        <Body>© 2022 Pongo Technologies, Inc. 🦧</Body>
        <div className={styles.grow} />
        <div>
          <Button href="https://www.linkedin.com/company/pongoai" as="a" appearance="transparent" shape="circle">
            <LinkedinIcon color="inherit" />
          </Button>
          <Button href="https://twitter.com/joinpongo" as="a" appearance="transparent" shape="circle">
            <TwitterIcon color="inherit" />
          </Button>
          <Button href="https://www.instagram.com/joinpongo" as="a" appearance="transparent" shape="circle">
            <InstagramIcon color="inherit" />
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};
