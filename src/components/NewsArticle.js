import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import { Link } from "react-router-dom";
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
  mainCard: {
    textDecoration: 'none',
  },
});
export default function NewsArticle({ data }) {
  const classes = useStyles();
  return (
    // <Link className={classes.mainCard} to={`newspage/${data.objectID}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} gutterBottom variant="h6" component="h6">
              {data.title}
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
    // </Link>
  );
}