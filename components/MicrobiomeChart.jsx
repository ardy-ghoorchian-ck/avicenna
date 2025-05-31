import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { Box, Typography, Paper, Grid, useTheme } from '@mui/material';

// Sample data - replace with your actual test results
const sampleData = {
  bacterialComposition: [
    { name: 'Firmicutes', value: 35 },
    { name: 'Bacteroidetes', value: 30 },
    { name: 'Proteobacteria', value: 15 },
    { name: 'Actinobacteria', value: 10 },
    { name: 'Others', value: 10 }
  ],
  diversityScores: [
    { name: 'Alpha Diversity', score: 85, benchmark: 75 },
    { name: 'Beta Diversity', score: 70, benchmark: 80 },
    { name: 'Species Richness', score: 90, benchmark: 85 }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const MicrobiomeChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gut Microbiome Test Results
      </Typography>
      
      <Grid container spacing={3}>
        {/* Bacterial Composition Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Bacterial Composition
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sampleData.bacterialComposition}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={130}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sampleData.bacterialComposition.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Diversity Scores Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, height: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Diversity Scores vs Benchmark
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sampleData.diversityScores}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" name="Your Score" fill="#8884d8" />
                <Bar dataKey="benchmark" name="Benchmark" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Additional Metrics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Key Insights
            </Typography>
            <Typography variant="body1">
              • Your bacterial diversity is above average, indicating a healthy gut microbiome
            </Typography>
            <Typography variant="body1">
              • Firmicutes to Bacteroidetes ratio is within the healthy range
            </Typography>
            <Typography variant="body1">
              • Species richness suggests a well-balanced microbial ecosystem
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MicrobiomeChart; 