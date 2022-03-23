import * as React from 'react';
import { Text, Input, tokens, Button, Stack } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import { useForm } from '@formspree/react';

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
  textMaxWidthBlack: {
    maxWidth: '500px',
    color: tokens.black,
  },
});

export function ContactForm() {
  const styles = useStyles();
  const [state, handleSubmit] = useForm('xjvjebrj');

  if (state.succeeded) {
    return (
      <Text className={styles.textMaxWidthBlack} color="white" size={400}>
        Thanks for joining!
      </Text>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <Stack className={styles.textMaxWidth} verticalAlignment="center" horizontalAlignment="center" grow>
          <Input label="Email" placeholder="Enter you email" type="email" name="email" required />
          <Button appearance="primary" color="brand" type="submit" disabled={state.submitting}>
            Join
          </Button>
        </Stack>
      </form>
    );
  }
}

export default ContactForm;
