import { ptBR } from '@mui/material/locale';

export const themeOptions_light = {
    palette: {
        mode: 'light',
        primary: {
            main: '#257ca3',
            dark: '#1d6382',
            light: '#f1faff',
            contrastText: '#fafafa',
        },
        secondary: {
            main: '#179c52',
            contrastText: '#fafafa',
        },
        background: {
            default: '#fafafa',
            paper: '#fafafa',
        },
        text: {
            primary: '#257ca3',
            disabled: 'rgba(37,124,163,0.38)',
            secondary: 'rgba(37,124,163,0.64)',
        },
        divider: 'rgba(97,47,116,0.12)',
        error: {
            main: '#ff3e30',
            contrastText: '#fafafa',
        },
        info: {
            main: '#0288d1',
        },
        warning: {
            main: '#f7b529',
        },
        success: {
            main: '#179c52',
        },
    },
    ptBR
};

export const themeOptions_dark = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#b5b3d5',
            contrastText: '#fafafa',
            light: '#c3c2dd',
            dark: '#7e7d95',
        },
        secondary: {
            main: '#d3d5b3',
            light: '#dbddc2',
            contrastText: '#fafafa',
        },
        background: {
            default: '#353535',
            paper: '#353535',
        },
        text: {
            primary: '#b5b3d5',
            secondary: 'rgba(255,255,255,0.7)',
            disabled: 'rgba(255,255,255,0.5)',
        },
        error: {
            main: '#c62828',
        },
        info: {
            main: '#0288d1',
        },
        divider: 'rgba(211,213,179,0.12)',
    },
    ptBR
};
