import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    header: {
        margin: '20px 0',
        textAlign: 'center',
    },
}));
export default function SingleNewsStory(props) {
    const classes = useStyles();

    const [idData, setIdData] = useState();

    const objectId = props.match.params.id;

    useEffect(() => {
        axios
        .get(
             `http://hn.algolia.com/api/v1/items/${objectId}`
         )
         .then((response) => setIdData(response.data))
         .catch((error) => console.log(error));
     });

  return (
    <div className={classes.header}>
        hfgh
    </div>
  );
}