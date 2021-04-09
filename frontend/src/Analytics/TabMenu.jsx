import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function TabMenu({setCurrTab}) {
  const classes = useStyles();
  const [value, setValue] = React.useState("table");

  React.useEffect(() => {
    console.log('value', value)
  }, [value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrTab(newValue)
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Table" value="table"/>
        <Tab label="Line Graph" value="line"/>
      </Tabs>
    </Paper>
  );
}
