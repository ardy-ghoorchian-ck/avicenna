import BacteriaOverviewTable from '../components/BacteriaOverviewTable';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../components/theme';

export default {
  title: 'Tables/BacteriaOverviewTable',
  component: BacteriaOverviewTable,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export const Default = {
  args: {}
}; 