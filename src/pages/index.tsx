import * as React from 'react';
import {
  Container,
  CardHeader,
  Display,
  Stack,
  Body,
  Header1,
  Header2,
  Header3,
  RadioGroup,
  Radio,
  LinkedinIcon,
  TwitterIcon,
  ToggleButton,
  Button,
  SubHeadline,
  InstagramIcon,
  LogoIcon,
  TabList,
  Tab,
  Divider,
  tokens,
  Card,
} from '@pongo-ui/react-components';
import type { TabListProps } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { ContactForm, LandingToolbar, ReceiveSurvey, CompleteSurvey, ProductRecommendations } from '../components';

const useStyles = makeStyles({
  mainSection: {
    backgroundColor: tokens.brand,
    minHeight: '90vh',
  },
  secondaryBackground: {
    backgroundColor: tokens.secondary,
  },
  textMaxWidth: {
    maxWidth: '500px',
  },
  wrapper: {
    width: '352px',
    height: '575px',
  },
  cardWidth: {
    width: '300px',
  },
  imageShadow: {
    filter: tokens.elevate,
  },
  canvas: {
    width: '530px',
    height: '585px',
  },
  iconStyles: {
    width: 'min(12vw, 128px)',
    height: 'min(12vw, 128px)',
  },
  emojiButtonStyles: {
    fontSize: '30px',
  },
  grow: {
    display: 'flex',
    flexGrow: '1',
  },
  joinSection: {
    backgroundColor: tokens.inheritForegroundHover,
  },
});

const Home: NextPage = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const formRef = React.useRef<HTMLDivElement>(null);
  const styles = useStyles();

  const onButtonClick = () => window.scrollTo({ top: formRef?.current?.getBoundingClientRect().y });

  const onTabValueChange: TabListProps['onTabSelect'] = (ev, data) => {
    setTabValue(data.value as string);
  };

  return (
    <>
      <LandingToolbar />
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
        <Stack vertical horizontalAlignment="center">
          <Button onClick={onButtonClick} size="large" appearance="primary" color="secondary">
            Join the beta
          </Button>
          <Body color="white" align="center">
            Free, but a limited space.
          </Body>
        </Stack>
      </Container>
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <div className={styles.wrapper}>
            {tabValue === '1' ? <ReceiveSurvey /> : tabValue === '2' ? <CompleteSurvey /> : <ProductRecommendations />}
          </div>
          <Stack vertical>
            <Header1>How we do it</Header1>
            <TabList selectedValue={tabValue} onTabSelect={onTabValueChange} vertical>
              <Tab value="1">
                <Body color={tabValue !== '1' ? 'inherit' : 'base'} className={styles.textMaxWidth} size={500}>
                  Receive survey
                </Body>
              </Tab>
              <Tab value="2">
                <Body color={tabValue !== '2' ? 'inherit' : 'base'} className={styles.textMaxWidth} size={500}>
                  Complete survey
                </Body>
              </Tab>
              <Tab value="3">
                <Body color={tabValue !== '3' ? 'inherit' : 'base'} className={styles.textMaxWidth} size={500}>
                  Product recommendations
                </Body>
              </Tab>
            </TabList>
          </Stack>
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Header1>Easily collect feedback</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our feedback interface is intuitive for customers.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              Giving feedback on a product has never been easier.
            </Body>
          </Stack>
          <Card inline>
            <CardHeader header={<Header2>Printed Tote Bag</Header2>} />
            <Stack horizontalAlignment="center">
              <Image src={'image/bag.png'} width="200px" height="200px" />
            </Stack>
            <Body>How happy are you with your purchases?</Body>
            <Stack horizontalAlignment="center">
              <RadioGroup className={styles.emojiButtonStyles} layout="horizontal">
                <Radio label={'👍'} value={'0'} />
                <Radio label={'👎'} value={'1'} />
              </RadioGroup>
            </Stack>
            <Body>What could have gone better?</Body>
            <Stack>
              <ToggleButton shape="circular">Material</ToggleButton>
              <ToggleButton shape="circular">Packaging</ToggleButton>
              <ToggleButton shape="circular">Price</ToggleButton>
            </Stack>
          </Card>
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Card className={styles.cardWidth}>
            <Stack horizontalAlignment="center">
              <Image src={'image/suggestion-bag.png'} width="250px" height="250px" className={styles.imageShadow} />
            </Stack>
            <CardHeader header={<Header3>Leather Bag</Header3>} />
            <SubHeadline>$300</SubHeadline>
            <Button>Add to cart</Button>
          </Card>
          <Stack vertical>
            <Header1>Supercharge sales</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Boost your sales through personalized product recommendations.
            </Body>
          </Stack>
        </Stack>
        <Divider />
        <Stack appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
          <Stack vertical>
            <Header1>Smart recommendations</Header1>
            <Body className={styles.textMaxWidth} size={500}>
              Our recommendation algorithm merges customer feedback with purchase history.
            </Body>
            <Body className={styles.textMaxWidth} size={500}>
              The result is highly engaging product recommendations.
            </Body>
          </Stack>
          <Image width="316px" height="300px" src="image/increase-sales.png" />
        </Stack>
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
          <Header1 align="center">Join the beta</Header1>
          <Body align="center">Free, but a limited space.</Body>
        </Stack>
        <ContactForm />
      </Container>
      <Divider />
      <Container appearance="relaxed" horizontalAlignment="center" verticalAlignment="center">
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
      </Container>
    </>
  );
};

export default Home;
