import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const GradientBar = ({ frequency, referenceRange }) => {
  // Parse reference range if it exists
  const [min, max] = referenceRange === 'No data' 
    ? [0, 5] // Default range for no data
    : referenceRange.split(' - ').map(num => parseFloat(num));
  
  // Calculate marker position as percentage
  const markerPosition = (frequency / (max + 1)) * 100; // Adding buffer for visualization

  return (
    <Box sx={{ position: 'relative', flex: 1, mx: 2 }}>
      <Typography 
        variant="body2" 
        sx={{ 
          position: 'absolute',
          left: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        {frequency}
      </Typography>

      {/* Gradient Bar */}
      <Box sx={{
        height: '8px',
        background: 'linear-gradient(to right, #FF6B6B 0%, #FFD93D 30%, #95CD41 50%, #FFD93D 70%, #FF6B6B 100%)',
        borderRadius: '4px',
        position: 'relative',
        opacity: 0.8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-4px',
          left: 0,
          right: 0,
          bottom: '-4px',
          background: 'transparent',
          borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
          borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none'
        }
      }}>
        {/* Marker */}
        <Box
          sx={{
            position: 'absolute',
            left: `${markerPosition}%`,
            top: '-6px',
            transform: 'translateX(-50%)',
            width: '3px',
            height: '20px',
            bgcolor: '#fff',
            borderRadius: '1.5px',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)'
          }}
        />
      </Box>
    </Box>
  );
};

const BacteriaOverviewTable = () => {
  const data = [
    {
      phylum: 'Actinobacteriota',
      genus: 'Actinomyces',
      frequency: 0.02,
      referenceRange: 'No data'
    },
    {
      phylum: 'Verrucomicrobiota',
      genus: 'Akkermansia',
      frequency: 0.08,
      referenceRange: '0.00 - 1.94'
    },
    {
      phylum: 'Bacteroidota',
      genus: 'Alistipes',
      frequency: 1.54,
      referenceRange: '1.35 - 4.96'
    },
    {
      phylum: 'Firmicutes',
      genus: 'Anaerofium',
      frequency: 0.00,
      referenceRange: '0.00 - 0.01'
    },
    {
      phylum: 'Firmicutes',
      genus: 'Anaerostipes',
      frequency: 0.10,
      referenceRange: '0.04 - 0.36'
    }
  ];

  return (
    <Paper 
      sx={{ 
        p: 4,
        bgcolor: '#1a1a1a',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 4,
          color: '#fff',
          fontWeight: 500
        }}
      >
        Overview of all bacteria
      </Typography>

      {/* Table Header */}
      <Box 
        sx={{ 
          display: 'flex',
          p: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          color: 'rgba(255, 255, 255, 0.9)',
          fontWeight: 500
        }}
      >
        <Typography sx={{ width: '200px' }}>Phylum</Typography>
        <Typography sx={{ width: '200px' }}>Genus</Typography>
        <Typography sx={{ flex: 1, textAlign: 'center' }}>Frequency (%)</Typography>
        <Typography sx={{ width: '150px', textAlign: 'right' }}>Reference (%)</Typography>
      </Box>

      {/* Table Rows */}
      {data.map((item, index) => (
        <Box 
          key={index}
          sx={{ 
            display: 'flex',
            p: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            '&:last-child': {
              borderBottom: 'none'
            },
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.03)'
            }
          }}
        >
          <Typography 
            sx={{ 
              width: '200px',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            {item.phylum}
          </Typography>
          <Typography 
            sx={{ 
              width: '200px',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            {item.genus}
          </Typography>
          <GradientBar 
            frequency={item.frequency} 
            referenceRange={item.referenceRange}
          />
          <Typography 
            sx={{ 
              width: '150px',
              textAlign: 'right',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            {item.referenceRange}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default BacteriaOverviewTable; 