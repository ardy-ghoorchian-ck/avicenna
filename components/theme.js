import {createTheme} from "@mui/material";


const DRAWER_WIDTH = 280;

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1a1b1e',
            paper: '#202222',
        },
        text: {
            primary: '#ffffff',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                    padding: 0,
                    backgroundColor: '#1a1b1e',
                    minHeight: '100vh',
                    '& #__next': {
                        minHeight: '100vh',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        },
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#202222',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    width: DRAWER_WIDTH,
                },
            },
        },
    },
});
