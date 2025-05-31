import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BacteriaRow = ({ 
  bacterium, 
  frequency, 
  referenceRange,
  isHigher = false 
}) => {
  // Parse reference range
  const [min, max] = referenceRange.split(' - ').map(num => parseFloat(num));
  
  // Calculate marker position as percentage
  const markerPosition = (frequency / (max + 5)) * 100; // Adding buffer for visualization

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center',
      py: 2,
      borderBottom: '1px solid #f0f0f0',
      '&:last-child': {
        borderBottom: 'none'
      }
    }}>
      {/* Bacterium Name */}
      <Box sx={{ width: '200px' }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {bacterium}
          {isHigher && (
            <ArrowUpwardIcon 
              sx={{ 
                color: '#FF6B6B',
                fontSize: '16px',
                ml: 1,
                verticalAlign: 'text-top'
              }} 
            />
          )}
        </Typography>
      </Box>

      {/* Frequency and Bar Chart */}
      <Box sx={{ flex: 1, position: 'relative', mx: 3 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            position: 'absolute',
            left: '-40px',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          {frequency}
        </Typography>

        {/* Gradient Bar */}
        <Box sx={{
          height: '12px',
          background: 'linear-gradient(to right, #FF6B6B 0%, #FFD93D 30%, #95CD41 50%, #FFD93D 70%, #FF6B6B 100%)',
          borderRadius: '6px',
          position: 'relative'
        }}>
          {/* Marker */}
          <Box
            sx={{
              position: 'absolute',
              left: `${markerPosition}%`,
              top: '-4px',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '20px',
              bgcolor: '#2D3436',
              borderRadius: '2px'
            }}
          />
        </Box>
      </Box>

      {/* Reference Range */}
      <Box sx={{ width: '150px', textAlign: 'right' }}>
        <Typography variant="body1" color="text.secondary">
          {referenceRange}
        </Typography>
      </Box>
    </Box>
  );
};

const BacteriaFrequencyChart = () => {
  const data = [
    {
      bacterium: 'Bacteroidota',
      frequency: 32.64,
      referenceRange: '30.88 - 45.11',
      isHigher: false
    },
    {
      bacterium: 'Firmicutes',
      frequency: 64.83,
      referenceRange: '48.28 - 63.47',
      isHigher: true
    }
  ];

  return (
    <Paper sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ 
        display: 'flex', 
        mb: 2,
        pb: 1,
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Typography sx={{ width: '200px', fontWeight: 'bold' }}>
          Bacterium
        </Typography>
        <Typography sx={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
          Frequency (%)
        </Typography>
        <Typography sx={{ width: '150px', textAlign: 'right', fontWeight: 'bold' }}>
          Reference (%)
        </Typography>
      </Box>

      {/* Bacteria Rows */}
      {data.map((item, index) => (
        <BacteriaRow
          key={index}
          bacterium={item.bacterium}
          frequency={item.frequency}
          referenceRange={item.referenceRange}
          isHigher={item.isHigher}
        />
      ))}
    </Paper>
  );
};

export default BacteriaFrequencyChart; 