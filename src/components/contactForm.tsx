import * as React from 'react';
import { Text, Input, Body, Button, Stack } from '@pongo-ui/react-components';
import { InputProps } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import { useForm } from '@formspree/react';
import { useId } from '@fluentui/react-utilities';

const useStyles = makeStyles({
  textMaxWidth: {
    maxWidth: '500px',
  },
});

/**
 * Determines whether a given email is valid.
 */
const validateEmail = (inputEmail: string) => {
  return String(inputEmail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const ContactForm = () => {
  const styles = useStyles();
  const [email, updateEmail] = React.useState('');
  const [ig, updateIg] = React.useState('');
  const helperTextId = useId('input-label');
  const [emailError, updateEmailError] = React.useState(false);
  const [state, handleSubmit] = useForm('xvolboby', {
    data: { emailField: email, igField: ig },
  });

  /**
   * Callback to update the controlled email value.
   */
  const handleUpdateEmail: InputProps['onChange'] = ev => {
    updateEmail(ev.target.value);
    updateEmailError(false);
  };

  /**
   * Callback to update the controlled email value.
   */
  const handleUpdateIg: InputProps['onChange'] = ev => {
    updateIg(ev.target.value);
    updateEmailError(false);
  };

  /**
   * Callback to attempt to submit the form if it is valid.
   */
  const trySubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    if (ig.length == 0) {
      // The email is invalid update state
      if (!validateEmail(email)) {
        updateEmailError(true);
      }
    }

    // The email is valid, submit it.
    else {
      handleSubmit(ev);
    }
  };

  /**
   * Callback to stop the event since it is already submitted.
   */
  const emailSubmitted = (ev: React.FormEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
  };

  return (
    <Stack className={styles.textMaxWidth} verticalAlignment="center" horizontalAlignment="center" grow>
      {state.succeeded ? (
        <Text className={styles.textMaxWidth} size={500} align="center">
          Thanks for joining!
        </Text>
      ) : (
        <form onSubmit={state.succeeded ? emailSubmitted : trySubmit}>
          <Stack className={styles.textMaxWidth} verticalAlignment="center" horizontalAlignment="center" grow>
            <Input
              value={email}
              onChange={handleUpdateEmail}
              danger={emailError}
              label="Email"
              placeholder="Enter you email"
              type="email"
              name="email"
              input={{ 'aria-describedby': helperTextId }}
            />
            <Text className={styles.textMaxWidth} size={500} align="center">
              or{' '}
            </Text>
            <Input
              value={ig}
              onChange={handleUpdateIg}
              danger={emailError}
              label="Instagram"
              placeholder="Instagram handle"
              type="text"
              name="instagram"
              input={{ 'aria-describedby': helperTextId }}
            />
            <Button appearance="primary" color="brand" type="submit" disabled={state.submitting}>
              {state.succeeded ? 'Thanks!' : state.submitting ? 'Sending...' : 'Submit'}
            </Button>
          </Stack>
          <div style={{ opacity: !emailError ? 0 : 1 }}>
            <Body color="danger" id={helperTextId}>
              Please enter a valid email
            </Body>
          </div>
        </form>
      )}
    </Stack>
  );
};
