import BacteriaFrequencyChart from '../components/BacteriaFrequencyChart';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../components/theme';

export default {
  title: 'Charts/BacteriaFrequencyChart',
  component: BacteriaFrequencyChart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {}
}; 