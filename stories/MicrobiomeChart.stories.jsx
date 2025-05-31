import MicrobiomeChart from '../components/MicrobiomeChart';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../components/theme';

export default {
  title: 'Charts/MicrobiomeChart',
  component: MicrobiomeChart,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {},
}; 