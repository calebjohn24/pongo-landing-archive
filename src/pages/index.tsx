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
  createIcon,
  LogoIcon,
  Divider,
  tokens,
  Header3,
} from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { ContactForm } from '../components';

const InstagramIcon = createIcon({
  path: (
    <path d="M682.533 204.8C419.092 204.8 204.8 419.29 204.8 682.8V1365.47C204.8 1628.91 419.29 1843.2 682.8 1843.2H1365.47C1628.91 1843.2 1843.2 1628.71 1843.2 1365.2V682.533C1843.2 419.092 1628.71 204.8 1365.2 204.8H682.533ZM1501.87 477.866C1539.55 477.866 1570.13 508.45 1570.13 546.133C1570.13 583.816 1539.55 614.4 1501.87 614.4C1464.18 614.4 1433.6 583.816 1433.6 546.133C1433.6 508.45 1464.18 477.866 1501.87 477.866ZM1024 614.4C1249.89 614.4 1433.6 798.105 1433.6 1024C1433.6 1249.89 1249.89 1433.6 1024 1433.6C798.105 1433.6 614.4 1249.89 614.4 1024C614.4 798.105 798.105 614.4 1024 614.4ZM1024 750.933C951.578 750.933 882.122 779.703 830.912 830.912C779.703 882.122 750.933 951.578 750.933 1024C750.933 1096.42 779.703 1165.88 830.912 1217.09C882.122 1268.3 951.578 1297.07 1024 1297.07C1096.42 1297.07 1165.88 1268.3 1217.09 1217.09C1268.3 1165.88 1297.07 1096.42 1297.07 1024C1297.07 951.578 1268.3 882.122 1217.09 830.912C1165.88 779.703 1096.42 750.933 1024 750.933V750.933Z" />
  ),
  displayName: 'InstagramIcon',
});

const useStyles = makeStyles({
  mainSection: {
    backgroundColor: tokens.brand,
    minHeight: '100vh',
  },
  secondaryBackground: {
    backgroundColor: tokens.secondary,
  },
  textMaxWidth: {
    maxWidth: '500px',
  },
  iconStyles: {
    width: 'min(12vw, 128px)',
    height: 'min(12vw, 128px)',
  },
});

const Home: NextPage = () => {
  const formRef = React.useRef<HTMLDivElement>(null);
  const styles = useStyles();

  const onButtonClick = () => window.scrollTo({ top: formRef?.current?.getBoundingClientRect().y });

  return (
    <>
      <Container
        className={styles.mainSection}
        appearance="relaxed"
        horizontalAlignment="center"
        verticalAlignment="center"
      >
        <LogoIcon className={styles.iconStyles} color="white" />
        <Display color="white" align="center">
          Turn Follow-Ups Into Sales
        </Display>
        <SubHeadline color="white" align="center">
          Pongo makes it easy to turn post-purchase surveys into a one-click buying experience.
        </SubHeadline>
        <Stack vertical>
          <Button onClick={onButtonClick} size="large" appearance="primary" color="secondary">
            Join the beta
          </Button>
        </Stack>
        <Header3 color="white" align="center">
          100% Free, But limited Space
        </Header3>
      </Container>

      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Image width="324px" height="648px" src="image/feedback-demo.gif" />
          <Stack vertical>
            <Header1>Super-charge Your Customer Return Rate ⚡</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Post-purchase feedback requests have the highest open and click rates of any customer interaction, but 75%
              of customers never re-buy.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              Pongo fixes this by turning feedback into personalized product recommendations that can be purchased in
              one click.
            </Body>
          </Stack>
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Header1>Intelligent Cross-Sells 🧠</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our advanced recommendation system combines the customer's feedback with their purchase history, to serve
              up personalized product recommendations.
            </Body>
          </Stack>
          <Image width="316px" height="300px" src="image/increase-sales.png" />
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Image width="400px" height="400px" src="image/survey-demo.png" />
          <Stack vertical>
            <Header1>An Interface Built for Conversions 📈</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our feedback interface is built from the ground up to be intuitive and easy for the customer to fill out.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              Don't settle for clunky surveys your customer will close out of.
            </Body>
          </Stack>
        </Stack>
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center" ref={formRef}>
        <Header1 align="center">Join the beta</Header1>
        <Text align="center">100% Free, But Limited Space</Text>
        <ContactForm />
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack verticalAlignment="center" grow>
          <Body>© 2022 Pongo Technologies, Inc. 🦧</Body>
          <Button href="https://www.linkedin.com/company/pongoai" as="a" appearance="transparent" shape="circle">
            <LinkedinIcon color="inherit" />
          </Button>
          <Button href="https://twitter.com/joinpongo" as="a" appearance="transparent" shape="circle">
            <TwitterIcon color="inherit" />
          </Button>
          <Button href="https://www.instagram.com/joinpongo" as="a" appearance="transparent" shape="circle">
            <InstagramIcon color="inherit" />
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
