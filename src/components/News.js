import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
      width: '90%',
      margin: '40px auto',
    },
}));
export default function News(props) {
  const classes = useStyles();
  const { data } = useContext(NewsContext);
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className={classes.root}>
        <Grid className={classes.mainGrid} container spacing={5}>
          {data
              ? data.map((news) => (
                  <Grid item lg={3} xs={6} sm={4}>
                      <NewsArticle data= {news} key={news.url} />
                  </Grid>
              ))
              : "loading"}
        </Grid>
      </div>
    )
  );
}