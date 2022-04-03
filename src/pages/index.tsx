import * as React from 'react';
import {
  Container,
  Display,
  Stack,
  Header1,
  Header2,
  Button,
  SubHeadline,
  Divider,
  tokens,
  Card,
  Title,
} from '@pongo-ui/react-components';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { NextPage } from 'next';
import { Toolbar, Footer, ContactForm } from '../components';

const useStyles = makeStyles({
  mainSection: {
    backgroundColor: 'black',
    minHeight: '90vh',
  },
  displayMaxWidth: {
    maxWidth: '900px',
  },
  textMaxWidth: {
    width: '100%',
    maxWidth: '570px',
  },
  joinSection: {
    backgroundColor: tokens.inheritForegroundHover,
  },
  grow: {
    display: 'flex',
    flexGrow: '1',
  },
  slider: {
    width: '100%',
    height: '45px',
    backgroundColor: tokens.inheritBackground,
    ...shorthands.borderRadius(tokens.circular),
    ':after': {
      position: 'absolute',
      height: '45px',
      ...shorthands.borderRadius(tokens.circular, '0px', '0px', tokens.circular),
      content: "''",
    },
  },
  depopSlider: {
    ':after': {
      width: '13.49%',
      backgroundColor: tokens.brand,
    },
  },
  etsySlider: {
    ':after': {
      width: '9.4%',
      backgroundColor: tokens.brand,
    },
  },
  pongoSlider: {
    ':after': {
      width: '5%',
      backgroundColor: tokens.success,
    },
  },
});

const Home: NextPage = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const styles = useStyles();

  const onButtonClick = () => window.scrollTo({ top: formRef?.current?.getBoundingClientRect().y });

  return (
    <>
      <Toolbar />
      <Container
        className={styles.mainSection}
        appearance="relaxed"
        horizontalAlignment="start"
        verticalAlignment="center"
      >
        <Display className={styles.displayMaxWidth} color="white">
          Start selling online in a flash ⚡️
        </Display>
        <SubHeadline color="white">
          Pongo lets you build and manage your own e-commerce business from your phone
        </SubHeadline>
        <Stack vertical>
          <SubHeadline color="white">Payments, shipping, inventory, SEO and marketing tools built-in.</SubHeadline>
          <SubHeadline color="white">Go be you.</SubHeadline>
          <SubHeadline color="white">Let us handle the rest.</SubHeadline>
        </Stack>
        <Stack vertical horizontalAlignment="center">
          <Button onClick={onButtonClick} size="large" appearance="primary" color="brand">
            Join the waitlist
          </Button>
        </Stack>
      </Container>
      <Divider />
      {/* <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Title align="center">Start selling in 5 minutes.</Title>
          <Card>Content Here</Card>
        </Stack>
      </Container>
      <Divider /> */}
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Title className={styles.textMaxWidth} align="center">
          More features, less fees
        </Title>
        <Card className={styles.textMaxWidth}>
          <Stack>
            <Header2 nowrap>Depop + Paypal</Header2>
            <div className={styles.grow} />
            <Header2 nowrap>13.49% + $0.50 😭</Header2>
          </Stack>
          <div className={mergeClasses(styles.slider, styles.depopSlider)} />
          <Stack>
            <Header2 nowrap>Etsy</Header2>
            <div className={styles.grow} />
            <Header2 nowrap>9.4% + $0.30 😭</Header2>
          </Stack>
          <div className={mergeClasses(styles.slider, styles.etsySlider)} />
          <Stack>
            <Header2 nowrap>Pongo</Header2>
            <div className={styles.grow} />
            <Header2 nowrap>5% 😍</Header2>
          </Stack>
          <div className={mergeClasses(styles.slider, styles.pongoSlider)} />
        </Card>
      </Container>
      <Divider />
      <Container
        className={styles.joinSection}
        appearance="relaxed"
        horizontalAlignment="center"
        verticalAlignment="center"
        ref={formRef}
      >
        <Stack vertical horizontalAlignment="center">
          <Header1 align="center">Join the waitlist (limited space)</Header1>
        </Stack>
        <ContactForm />
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Footer />
      </Container>
    </>
  );
};

export default Home;
