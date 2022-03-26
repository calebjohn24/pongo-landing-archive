import * as React from 'react';
import {
  Toolbar,
  ToolbarButton,
  Button,
  Stack,
  Text,
  LogoIcon,
  SettingsIcon,
  Menu,
  MenuItemRadio,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from '@pongo-ui/react-components';
import type { MenuProps } from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import { useAppContext } from '../context';
import Link from 'next/link';

const useStyles = makeStyles({
  toolbar: {
    position: 'fixed',
  },

  logoButtonStyles: {
    textDecorationLine: 'none',
  },
});

const useAppContextSelectors = () => {
  const setTheme = useAppContext(context => context.setTheme);
  const findTheme = useAppContext(context => context.findTheme);

  return {
    setTheme,
    findTheme,
  };
};

export const LandingToolbar = () => {
  const appContext = useAppContextSelectors();
  const userTheme = localStorage.getItem('theme') || 'Light';

  const styles = useStyles();

  const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
    theme: [userTheme],
  });

  const onChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
    setCheckedValues({ [name]: checkedItems });
    localStorage.setItem('theme', checkedItems[0]);
  };

  React.useEffect(() => {
    appContext.setTheme(appContext.findTheme(userTheme));
  });

  return (
    <Toolbar className={styles.toolbar}>
      <Link href="https://www.joinpongo.com" passHref>
        <Button className={styles.logoButtonStyles} as="a" appearance="transparent">
          <Stack wrap={false}>
            <LogoIcon color="white" />
            <Text color="white" size={500} weight={'bold'}>
              Pongo
            </Text>
          </Stack>
        </Button>
      </Link>
      <Stack grow />
      <Menu>
        <MenuTrigger>
          <ToolbarButton>
            <SettingsIcon />
          </ToolbarButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <Menu>
              <MenuTrigger>
                <MenuItem>Appearance</MenuItem>
              </MenuTrigger>
              <MenuPopover>
                <MenuList checkedValues={checkedValues} onCheckedValueChange={onChange}>
                  <MenuItemRadio name="theme" value="System">
                    System Default
                  </MenuItemRadio>
                  <MenuItemRadio name="theme" value="Light">
                    Light Mode
                  </MenuItemRadio>
                  <MenuItemRadio name="theme" value="Dark">
                    Dark Mode
                  </MenuItemRadio>
                </MenuList>
              </MenuPopover>
            </Menu>
          </MenuList>
        </MenuPopover>
      </Menu>
    </Toolbar>
  );
};
