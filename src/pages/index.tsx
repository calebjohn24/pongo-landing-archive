import * as React from 'react';
import {
  Text,
  Container,
  Display,
  Stack,
  Body,
  Header1,
  SubHeadline,
  LogoIcon,
  Divider,
  tokens,
  Button,
} from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { ContactForm } from './contactForm';

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
          <Image
            width="324px"
            height="648px"
            src="https://pongo-logos.s3.us-west-2.amazonaws.com/623a3ad8785c6a3896c3c314_finaldemolanding.gif"
          />
          <Stack vertical>
            <Header1 color="white" align="center">
              Super-charge your post-purchase conversions ⚡
            </Header1>
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
            <Header1 color="white" align="center">
              Intelligent Cross-Sells 🧠
            </Header1>
            <Text className={styles.textMaxWidth} color="white" size={500}>
              Our advanced recommendation system combines the customer's survey response with their purchase history,
              serving up perfect product recommendations.
            </Text>
          </Stack>
          <Image
            width="316px"
            height="300px"
            src="https://pongo-logos.s3.us-west-2.amazonaws.com/623a6bf16015b6bb5f7da477_Group+174.png"
          />
        </Stack>
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Image
            width="400px"
            height="400px"
            src="https://pongo-logos.s3.us-west-2.amazonaws.com/623a770f356a4f1326e082ab_surveycutoff.png"
          />
          <Stack vertical>
            <Header1 color="white" align="center">
              Simple Surveys = More Results📈
            </Header1>
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
        <Stack grow>
          <Body color="white">© 2022 Pongo Technologies, Inc. 🦧</Body>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
