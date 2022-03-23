import * as React from 'react';
import {
  Text,
  Container,
  Display,
  Stack,
  Body,
  Header1,
  LinkedinIcon,
  TwitterIcon,
  Button,
  SubHeadline,
  LogoIcon,
  Divider,
  tokens,
} from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { ContactForm } from '../components';

const useStyles = makeStyles({
  brandBackground: {
    backgroundColor: tokens.brand,
  },
  secondaryBackground: {
    backgroundColor: tokens.secondary,
  },
  textMaxWidth: {
    maxWidth: '500px',
  },
});

const Home: NextPage = () => {
  const styles = useStyles();

  return (
    <>
      <Container
        className={styles.brandBackground}
        appearance="relaxed"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <LogoIcon color="white" size="display" />
        <Display color="white" align="center">
          Turn Surveys Into Sales
        </Display>
        <SubHeadline color="white" align="center">
          Pongo makes it easy to use post-purchase surveys to increase sales.
        </SubHeadline>
        <Stack vertical>
          <Button size="large" appearance="primary" color="secondary">
            Join the waitlist
          </Button>
          <Body color="white" align="center">
            No credit card required
          </Body>
        </Stack>
        <Stack horizontalAlignment="center" verticalAlignment="center">
          <Image width="324px" height="648px" src="image/feedback-demo.gif" />
          <Stack vertical>
            <Header1 color="white">Super-charge your post-purchase conversions ⚡</Header1>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Post-purchase feedback collection is a critical point for retaining customers.
            </Text>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Pongo lets you collect feedback that instantly generates personalized product recommendations that can be
              purchased in one click
            </Text>
          </Stack>
        </Stack>
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Header1 color="white">Intelligent Cross-Sells 🧠</Header1>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Our advanced recommendation system combines the customer's survey response with their purchase history,
              serving up perfect product recommendations.
            </Text>
          </Stack>
          <Image width="316px" height="300px" src="image/increase-sales.png" />
        </Stack>
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Image width="400px" height="400px" src="image/survey-demo.png" />
          <Stack vertical>
            <Header1 color="white">Simple Surveys = More Results 📈</Header1>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Our survey interface is built from the ground up to be intuitive and easy for the customer to fill out.
            </Text>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Don't settle for clunky surveys your customer will close out of.
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Header1>Join our waitlist</Header1>
        <ContactForm />
      </Container>
      <Container
        className={styles.brandBackground}
        appearance="relaxed"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <LogoIcon size="large" color="white" />
        <Divider />
        <Stack verticalAlignment="center" grow>
          <Body color="white">© 2022 Pongo Technologies, Inc. 🦧</Body>
          <Button href="https://www.linkedin.com/company/pongoai" as="a" appearance="transparent" shape="circle">
            <LinkedinIcon color="white" />
          </Button>
          <Button href="https://twitter.com/joinpongo" as="a" appearance="transparent" shape="circle">
            <TwitterIcon color="white" />
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
