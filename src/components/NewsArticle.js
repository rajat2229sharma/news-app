import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  text: {
      margin: '5px 0',
  },
});

export default function NewsArticle({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea target="_blank" href={data.url}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.author}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.num_comments}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.objectID}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.points}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.relevancy_score}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.created_at}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
