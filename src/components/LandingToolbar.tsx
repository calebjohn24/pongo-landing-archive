import * as React from 'react';
import {
  Toolbar,
  // ToolbarButton,
  Button,
  Stack,
  Text,
  // SettingsIcon,
  // Menu,
  // MenuItemRadio,
  // MenuTrigger,
  // MenuPopover,
  // MenuList,
  // MenuItem,
  tokens,
  // createIcon,
  Switch,
} from '@pongo-ui/react-components';
import type {
  // MenuProps,
  SwitchProps,
} from '@pongo-ui/react-components';
import { makeStyles } from '@griffel/react';
import { useAppContext } from '../context';
import Link from 'next/link';

const useStyles = makeStyles({
  logoButtonStyles: {
    textDecorationLine: 'none',
  },

  logoText: {
    color: tokens.textColor,
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

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#2060CF" />
    <path d="M11.8726 19.9942L24.0355 8.00012L28.3232 12.2284L16.1603 24.2225L11.8726 19.9942Z" fill="white" />
    <path d="M27.4528 11.3695L36.1861 19.9816L31.8983 24.2099L23.165 15.5978L27.4528 11.3695Z" fill="white" />
    <path
      d="M34.5824 34.991C28.7287 38.9931 19.2179 39.0032 13.3829 35.0136C9.34134 32.2503 7.9669 28.2245 9.79659 24.5072C9.87939 24.3401 10.1074 24.2271 10.3642 24.2268C10.6213 24.2265 10.8505 24.3378 10.933 24.504C11.6128 25.8753 12.7207 27.0921 14.224 28.1201C19.5927 31.7907 28.3418 31.7814 33.7269 28.0998C35.252 27.057 36.3713 25.8231 37.0569 24.4317C37.1393 24.2646 37.3673 24.1517 37.6241 24.1514C37.8821 24.1508 38.1104 24.2627 38.1924 24.4287C40.0436 28.1552 38.6598 32.2029 34.5821 34.991H34.5824Z"
      fill="white"
    />
  </svg>
);

// const ColorIcon = createIcon({
//   path: (
//     <path d="M151.582 326.852C402.548 -7.28013 922.112 -104.508 1291.97 125.455C1657.18 352.528 1791.5 789.099 1641.92 1198.72C1500.67 1585.51 1128.52 1738.75 860.288 1544.19C759.817 1471.3 720.862 1379.94 702.037 1231.54L693.043 1147.23L689.169 1113.32C678.699 1033.61 662.624 997.91 629.065 979.205C583.361 953.724 552.928 953.135 492.917 976.389L462.955 988.813L447.703 995.469C361.194 1033.03 303.646 1046.23 230.857 1030.98L213.769 1026.96L199.814 1022.98C-38.1773 949.236 -73.4276 626.426 151.582 326.852ZM235.569 899.99L246.057 903.096L257.487 905.733C294.955 913.148 326.976 906.962 380.113 885.091L431.498 863.143C534.081 821.082 600.905 816.969 691.379 867.392C769.681 911.04 800.205 978.121 815.77 1094.35L820.309 1133.53L824.934 1178.91L828.954 1214.96C843.64 1331.11 870.332 1393.34 935.45 1440.58C1129.61 1581.41 1407.72 1466.89 1521.68 1154.82C1651.07 800.5 1536.54 428.242 1224.38 234.157C910.848 39.2155 465.05 122.64 253.928 403.724C76.8794 639.443 98.595 854.243 235.569 899.99ZM1193.4 729.801C1178.15 672.899 1211.91 614.41 1268.81 599.163C1325.72 583.916 1384.21 617.684 1399.46 674.588C1414.71 731.491 1380.93 789.978 1324.03 805.227C1267.13 820.476 1208.64 786.701 1193.4 729.801ZM1235.59 1027.5C1220.35 970.595 1254.12 912.107 1311.02 896.858C1367.93 881.618 1426.42 915.384 1441.66 972.284C1456.9 1029.19 1423.14 1087.68 1366.24 1102.93C1309.33 1118.17 1250.84 1084.4 1235.59 1027.5ZM1024.56 473.573C1009.31 416.67 1043.08 358.181 1099.98 342.934C1156.89 327.687 1215.38 361.455 1230.63 418.358C1245.87 475.261 1212.1 533.751 1155.2 548.998C1098.29 564.245 1039.8 530.476 1024.56 473.573ZM1022.13 1241.43C1006.88 1184.53 1040.65 1126.05 1097.56 1110.8C1154.46 1095.55 1212.95 1129.31 1228.19 1186.22C1243.44 1243.12 1209.67 1301.61 1152.77 1316.86C1095.87 1332.11 1037.37 1298.33 1022.13 1241.43ZM723.721 390.664C708.48 333.761 742.246 275.271 799.147 260.025C856.055 244.777 914.543 278.546 929.792 335.449C945.033 392.352 911.266 450.841 854.366 466.089C797.457 481.336 738.97 447.567 723.721 390.664Z" />
//   ),
//   displayName: 'ColorIcon',
// });

export const LandingToolbar = () => {
  const appContext = useAppContextSelectors();
  const userTheme = localStorage.getItem('theme') || 'Light';

  const styles = useStyles();

  // TODO: Switch to Menu when there are more options.
  // const [checkedValues, setCheckedValues] = React.useState<Record<string, string[]>>({
  //   theme: [userTheme],
  // });

  // const onChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
  //   setCheckedValues({ [name]: checkedItems });
  //   localStorage.setItem('theme', checkedItems[0]);
  // };

  const [switchValue, setSwitchValue] = React.useState(userTheme === 'Light');

  const switchOnChange: SwitchProps['onChange'] = (ev, data) => {
    localStorage.setItem('theme', data.checked ? 'Light' : 'Dark');
    setSwitchValue(data.checked);
  };

  React.useEffect(() => {
    appContext.setTheme(appContext.findTheme(userTheme));
  }, [appContext, userTheme]);

  return (
    <Toolbar appearance="subtle" position="sticky" style={{ position: 'sticky', width: '100%' }}>
      <Link href="https://www.joinpongo.com" passHref>
        <Button className={styles.logoButtonStyles} as="a" appearance="transparent">
          <Stack wrap={false} verticalAlignment="center">
            <LogoIcon />
            <Text className={styles.logoText} size={500} weight={'bold'}>
              Pongo
            </Text>
          </Stack>
        </Button>
      </Link>
      <Stack grow />
      {/* TODO: This shouldn't be inline as it can overlay other elements. There is a bug right now related to focus. */}
      {/* <Menu inline>
        <MenuTrigger>
          <ToolbarButton>
            <SettingsIcon />
          </ToolbarButton>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <Menu inline>
              <MenuTrigger>
                <MenuItem icon={<ColorIcon />}>Appearance</MenuItem>
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
      </Menu> */}
      {/* TODO: This should be replaced with the Menu */}
      <Stack wrap={false} verticalAlignment="center">
        <Switch
          aria-label="Theme Switch"
          checked={switchValue}
          onChange={switchOnChange}
          thumb={{
            children: (
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  zIndex: '100',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  fontSize: '10px',
                }}
              >
                {switchValue ? '🔆' : '🌙'}
              </div>
            ),
          }}
        />
      </Stack>
    </Toolbar>
  );
};
