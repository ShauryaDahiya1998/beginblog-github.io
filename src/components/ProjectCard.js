import * as React from 'react';
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProjectCard({ projectImage, projectDescription, projectLink }) {
  return (
    <Card sx={{ maxWidth: 900, maxHeight: 600, margin: 2, boxShadow: '0 32px 64px rgba(255, 255, 255, 0.2)' }}>
      <a href={projectDescription.link} target="_blank" rel="noopener noreferrer" style = {styleSheet.linker}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={projectImage}
            alt="green iguana"
            style={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {projectDescription.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {projectDescription.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

const styleSheet = {
    linker: {
        textDecoration: 'none',
        color: 'inherit',
    }
}