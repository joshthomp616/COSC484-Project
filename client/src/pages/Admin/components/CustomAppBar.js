import * as React from 'react';
import { ToggleThemeButton, AppBar, defaultTheme } from 'react-admin';

const darkTheme = {
    palette: { mode: 'dark' },
};

const CustomAppBar = () => (
    <AppBar
    >
        <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={darkTheme}
        />
    </AppBar>
);

export default CustomAppBar;