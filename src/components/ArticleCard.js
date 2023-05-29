import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ArticleCard({ title, description, imageLink }) {
  return (
    <Card sx={{ maxWidth: 900, maxHeight: 600, margin: 2, boxShadow: '0 32px 64px rgba(255, 255, 255, 0.2)' }}>
      {/* <a href={articleContent.link} target="_blank" rel="noopener noreferrer" style = {styleSheet.linker}> */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={imageLink}
            alt="green iguana"
            style={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      {/* </a> */}
    </Card>
  );
}

const styleSheet = {
    linker: {
        textDecoration: 'none',
        color: 'inherit',
    }
}