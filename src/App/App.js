import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import React, { useLayoutEffect } from 'react';
import { createContext, useContext } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { themeOptions_dark, themeOptions_light } from '../Theme/theme';
import RouterFile from '../Routes/router';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

function AppBase() {
  const theme = useTheme();
  const modeOptionSelected = useSelector((state) => state.modeOption.value);
  const colorMode = useContext(ColorModeContext);

  useLayoutEffect(() => {
    colorMode.toggleColorMode()
  }, [modeOptionSelected])

  return (
    <div className='App'>
      <RouterFile />
    </div>
  );
}

const App = () => {

  const getModeInitial = () => {
    localStorage.setItem('modeOption', 'light');
    return 'light';
    let valueMode = localStorage.getItem('modeOption')
    if (valueMode === null) {
      localStorage.setItem('modeOption', 'light');
    } else {
      return valueMode
    };
  }

  const [mode, setMode] = React.useState(getModeInitial);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const getThemeOption = () => {
    switch (mode) {
      case 'light':
        localStorage.setItem('modeOption', 'light')
        return themeOptions_light
      case 'dark':
        localStorage.setItem('modeOption', 'dark')
        return themeOptions_dark
      default:
        localStorage.setItem('modeOption', 'ligth')
        return themeOptions_light
    }
  }

  const theme = React.useMemo(
    () =>
      createTheme(getThemeOption()),
    [mode],
  );

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme >
            <AppBase />
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
