import React from 'react';
import './Projet.scss';
import { Card, CardActions } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default function Projet({titreProjet, imageProjet, descProjet, lienProjet}) {
  return (
    <Card className="Projet">
      <CardActionArea>
        <div className="couverture">
          <CardMedia className="image"
            image={`images-projets/${imageProjet}.png`} 
            alt={titreProjet}>
          </CardMedia>
        </div>
        <CardContent className="info">
          <Typography gutterBottom variant="h6" component="h5">{titreProjet}</Typography>
          <Typography variant="body1" component="p">{descProjet}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="lienProjet" aria-label={titreProjet} href={lienProjet}>Voir le projet</Button>
      </CardActions>
    </Card>
  );
}