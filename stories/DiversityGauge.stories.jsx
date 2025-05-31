import DiversityGauge from '../components/DiversityGauge';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '../components/theme';

export default {
  title: 'Charts/DiversityGauge',
  component: DiversityGauge,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

// Default story with the values from the image
export const Default = {
  args: {
    score: 5.74,
    rating: "Excellent",
    speciesRichness: 339,
    speciesRichnessRange: "202-322",
    speciesEvenness: 0.68,
    speciesEvennessRange: "0.72-0.78"
  },
};

// Example of a lower score
export const LowScore = {
  args: {
    score: 2.1,
    rating: "Low",
    speciesRichness: 150,
    speciesRichnessRange: "202-322",
    speciesEvenness: 0.45,
    speciesEvennessRange: "0.72-0.78"
  },
};

// Example of an average score
export const AverageScore = {
  args: {
    score: 4.0,
    rating: "Average",
    speciesRichness: 250,
    speciesRichnessRange: "202-322",
    speciesEvenness: 0.75,
    speciesEvennessRange: "0.72-0.78"
  },
}; 