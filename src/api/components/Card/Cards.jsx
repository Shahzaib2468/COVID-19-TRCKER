import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CardContent, Typography, Grid, } from '@material-ui/core'
import Countup from 'react-countup'
import styles from './Cards.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    marginTop: '50px',
    width: '100%',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Cards = ({data: {confirmed, recovered, deaths}})=>{
    
  const classes = useStyles();

  if(!confirmed){
    return 'Loading...';

}

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify={"center"}>

        <Grid item xs={12} sm={3} >
          <Paper className={classes.paper} elevation={4} className={styles.infected}>
          <CardContent>
                        <Typography variant="h5">INFECTED</Typography>
                        <Typography variant="h5">
                        <Countup 
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                        </Typography>
                        <p>Number of deaths caused by COVID-19</p>
                    </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={4} className={styles.recovered}>
          <CardContent>
                        <Typography variant="h5">RECOVERED</Typography>
                        <Typography variant="h5">
                        <Countup 
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                        </Typography>
                        <p>Number of recovered caused by COVID-19</p>
                    </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={4} className={styles.deaths}>
          <CardContent>
                        <Typography variant="h5">DEATHS</Typography>
                        <Typography variant="h5">
                        <Countup 
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                        </Typography>
                        <p>Number of deaths caused by COVID-19</p>
                    </CardContent>
          </Paper>
        </Grid>
  
      </Grid>
    </div>
  );
}

export default Cards;
