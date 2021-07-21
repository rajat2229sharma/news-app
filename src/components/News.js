import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
      width: '100%',
      margin: 0,
    },
    header: {
        margin: '20px 0',
        textAlign: 'center',
    },
}));

export default function News(props) {
  const classes = useStyles();
  const { data } = useContext(NewsContext);

  return (
    <div className={classes.root}>
        <Typography className={classes.header}  gutterBottom variant="h5" component="h2">
            Dashboard
        </Typography>
      <Grid className={classes.mainGrid} container spacing={3}>
        {data
            ? data.map((news) => (
                <Grid item lg={3} xs={6} sm={4}>
                    <NewsArticle data= {news} key={news.url} />
                </Grid>
            ))
            : "loading"}
      </Grid>
    </div>
  );
}
