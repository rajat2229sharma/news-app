import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  text: {
    margin: '5px 0',
  },
  title: {
    minHeight: 108,
    fontSize: 17,
  },
});
export default function NewsArticle({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea target="_blank" href={data.story_url}>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" component="h6">
            {data.story_title}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.author}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.objectID}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {data.created_at}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}