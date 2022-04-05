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
  Body,
  Title,
} from '@pongo-ui/react-components';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Toolbar, Footer, ContactForm } from '../components';

const useStyles = makeStyles({
  mainSection: {
    backgroundColor: 'black',
    minHeight: '70vh',
  },
  displayMaxWidth: {
    maxWidth: '900px',
  },
  textMaxWidth: {
    width: '100%',
    maxWidth: '490px',
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
  pongoSlider: {
    ':after': {
      width: '5%',
      backgroundColor: tokens.success,
    },
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse',
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
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack
          className={styles.wrapReverse}
          appearance="relaxed"
          horizontalAlignment="center"
          verticalAlignment="center"
        >
          <Card>
            <Image src="/image/store.png" width="270px" height="589px" />
          </Card>
          <Stack vertical>
            <Title className={styles.textMaxWidth}>Build a storefront in minutes, all from your phone</Title>
            <Body className={styles.textMaxWidth} size={500}>
              Pongo is the newest storefront builder. We make owning your own e-commerce store cheap and simple.
            </Body>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Title className={styles.textMaxWidth}>Easily process payments and manage customer relations.</Title>
            <Body className={styles.textMaxWidth} size={500}>
              Process and analyze your customers payments using our app. We also provide analytical tools to track your
              stores growth.
            </Body>
          </Stack>
          <Card>
            <Image src="/image/payments.png" width="270px" height="589px" />
          </Card>
        </Stack>
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack
          className={styles.wrapReverse}
          appearance="relaxed"
          horizontalAlignment="center"
          verticalAlignment="center"
        >
          <Card>
            <Image src="/image/orders.png" width="270px" height="589px" />
          </Card>
          <Stack vertical>
            <Title className={styles.textMaxWidth}>Manage and ship orders without leaving the app</Title>
            <Body className={styles.textMaxWidth} size={500}>
              Managing your orders has never been easier. We provide a clean interface that quickly lets you keep track
              of your customers and their purchases.
            </Body>
          </Stack>
        </Stack>
      </Container>
      <Divider />
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
          <Body>Please provide a method of contact.</Body>
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
