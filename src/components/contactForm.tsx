import * as React from 'react';
import { Text, Input, Body, Button, Stack, createIcon, InstagramIcon } from '@pongo-ui/react-components';
import { InputProps } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import { useForm } from '@formspree/react';
import { useId } from '@fluentui/react-utilities';

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
  },
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

export const MailIcon = createIcon({
  path: (
    <path d="M448 341.333H1600C1747.88 341.333 1868.73 457.084 1876.9 602.929L1877.33 618.667V1429.33C1877.33 1577.22 1761.58 1698.06 1615.74 1706.23L1600 1706.67H448C300.115 1706.67 179.264 1590.91 171.106 1445.07L170.667 1429.33V618.667C170.667 470.781 286.417 349.931 432.263 341.772L448 341.333H1600H448ZM1749.33 799.829L1053.81 1165.97C1037.82 1174.38 1019.14 1175.59 1002.39 1169.58L994.193 1165.97L298.667 799.915V1429.33C298.667 1507.69 359.007 1571.94 435.752 1578.17L448 1578.67H1600C1678.35 1578.67 1742.61 1518.33 1748.84 1441.58L1749.33 1429.33V799.829ZM1600 469.333H448C369.65 469.333 305.392 529.673 299.162 606.419L298.667 618.667V655.275L1024 1037.01L1749.33 655.189V618.667C1749.33 540.316 1688.99 476.058 1612.25 469.828L1600 469.333Z" />
  ),
  displayName: 'MailIcon',
});

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

    // The email is invalid update state
    if (email.length > 0 && !validateEmail(email)) {
      updateEmailError(true);
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
        <>
          <form onSubmit={state.succeeded ? emailSubmitted : trySubmit}>
            <Stack grow verticalAlignment="center" horizontalAlignment="center">
              <Stack horizontalAlignment="center" grow>
                <div className={styles.flex}>
                  <Input
                    value={email}
                    onChange={handleUpdateEmail}
                    danger={emailError}
                    type="email"
                    label="Email"
                    placeholder="Enter you email"
                    name="email"
                    input={{ 'aria-describedby': helperTextId }}
                    contentAfter={<MailIcon />}
                  />
                  <div style={{ opacity: !emailError ? 0 : 1 }}>
                    <Body color="danger" id={helperTextId}>
                      Please enter a valid email
                    </Body>
                  </div>
                </div>
                <Input
                  value={ig}
                  onChange={handleUpdateIg}
                  label="Instagram"
                  placeholder="Enter your handle"
                  type="text"
                  name="instagram"
                  contentAfter={<InstagramIcon />}
                />
              </Stack>
              <Button appearance="primary" color="brand" type="submit" disabled={state.submitting}>
                {state.succeeded ? 'Thanks!' : state.submitting ? 'Sending...' : 'Submit'}
              </Button>
            </Stack>
          </form>
        </>
      )}
    </Stack>
  );
};
