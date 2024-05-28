// UserDashboardCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const UserDashboardCard = ({ imageSrc, altText, title, icon: Icon }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, bgcolor: theme.palette.primary.light }}>
          <Icon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
        </Box>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc}
          alt={altText}
          sx={{ objectFit: 'contain', p: 2 }}
        />
        <CardContent>
          <Typography variant="h6" component="div" align="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserDashboardCard;
