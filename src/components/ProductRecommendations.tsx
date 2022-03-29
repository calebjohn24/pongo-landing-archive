import * as React from 'react';
import {
  Card,
  CartIcon,
  SubHeadline,
  CardHeader,
  Header3,
  Divider,
  Button,
  Stack,
  Container,
} from '@pongo-ui/react-components';
import Image from 'next/image';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  buttonStyles: {
    maxWidth: '300px',
  },
});

export const ProductRecommendations = () => {
  const styles = useStyles();

  return (
    <Container appearance="relaxed" horizontalAlignment="center">
      <Stack horizontalAlignment="center">
        <Card>
          <Stack horizontalAlignment="center">
            <Image src={'image/suggestion-bag.png'} width="150px" height="150px" />
          </Stack>
          <CardHeader header={<Header3>Leather Bag</Header3>} />
          <SubHeadline>$300</SubHeadline>
        </Card>
      </Stack>
      <Divider />
      <Stack appearance="relaxed" vertical horizontalAlignment="center" grow>
        <Stack verticalAlignment="center">
          <CartIcon size="large" />
          <SubHeadline>Your Cart</SubHeadline>
        </Stack>
      </Stack>
      <Stack grow horizontalAlignment="center">
        <Button className={styles.buttonStyles} color="brand" appearance="primary" size="large" disabled>
          Submit to checkout
        </Button>
      </Stack>
    </Container>
  );
};
