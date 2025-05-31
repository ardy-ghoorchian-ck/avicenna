import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const DiversityGauge = ({ 
  score = 5.74,
  rating = "Excellent",
  speciesRichness = 339,
  speciesRichnessRange = "202-322",
  speciesEvenness = 0.68,
  speciesEvennessRange = "0.72-0.78"
}) => {
  // Calculate position percentage (assuming scale 0-7)
  const positionPercent = (score / 7) * 100;
  
  return (
    <Paper 
      sx={{ 
        p: 4, 
        bgcolor: '#1a1a1a',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Title */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            display: 'inline-block',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            px: 3,
            py: 1,
            borderRadius: 4,
            fontWeight: 500
          }}
        >
          Microbial diversity
        </Typography>
      </Box>

      {/* Description */}
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4,
          color: 'rgba(255, 255, 255, 0.9)',
          lineHeight: 1.6
        }}
      >
        The overall diversity of your gut bacteria is very good! This indicates a
        healthy gut microbiome, which optimally supports your general
        health and well-being.
      </Typography>

      {/* Gauge Container */}
      <Box sx={{ position: 'relative', mb: 6, mt: 8 }}>
        {/* Scale Labels */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            mb: 1,
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.875rem'
          }}
        >
          <Typography variant="body2">low</Typography>
          <Typography variant="body2">high</Typography>
        </Box>

        {/* Gradient Bar */}
        <Box
          sx={{
            height: '12px',
            borderRadius: '6px',
            background: 'linear-gradient(to right, #FF6B6B 0%, #FFD93D 30%, #95CD41 50%, #FFD93D 70%, #FF6B6B 100%)',
            position: 'relative',
            opacity: 0.9,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-8px',
              left: 0,
              right: 0,
              bottom: '-8px',
              background: 'transparent',
              borderTop: '1px dashed rgba(255, 255, 255, 0.1)',
              borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
              pointerEvents: 'none'
            }
          }}
        />

        {/* Average Range Indicator */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '-30px',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem'
          }}
        >
          Average
        </Box>

        {/* Score Marker */}
        <Box
          sx={{
            position: 'absolute',
            left: `${positionPercent}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box
            sx={{
              width: '4px',
              height: '24px',
              bgcolor: '#fff',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
            }}
          />
          
          {/* Score Value */}
          <Typography 
            variant="h4" 
            sx={{ 
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '-45px',
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {score}
          </Typography>
          
          {/* Rating */}
          <Typography 
            variant="body1"
            sx={{ 
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '35px',
              color: '#95CD41',
              fontWeight: 'medium'
            }}
          >
            {rating}
          </Typography>
        </Box>
      </Box>

      {/* Metrics */}
      <Box 
        sx={{ 
          mt: 6,
          p: 3,
          bgcolor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: 2
        }}
      >
        <Typography 
          sx={{ 
            mb: 2,
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <strong>Species richness:</strong> {speciesRichness} (Average: {speciesRichnessRange})
        </Typography>
        <Typography
          sx={{ 
            color: 'rgba(255, 255, 255, 0.9)'
          }}
        >
          <strong>Species evenness:</strong> {speciesEvenness} (Average: {speciesEvennessRange})
        </Typography>
      </Box>
    </Paper>
  );
};

export default DiversityGauge; 