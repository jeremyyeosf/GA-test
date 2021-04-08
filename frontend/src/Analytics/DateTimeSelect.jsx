import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function DateTimeSelect({ selectedIndex, setSelectedIndex }) {
    const classes = useStyles();

    const handleChange = (event) => {
        setSelectedIndex(parseInt(event.target.value))
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="index-native-simple">Time Frame</InputLabel>
                <Select
                    native
                    value={selectedIndex}
                    onChange={handleChange}
                    inputProps={{
                        name: 'index',
                        id: 'index-native-simple',
                    }}
                >
                    <option value={0}>Today</option>
                    <option value={1}>This Week</option>
                    <option value={2}>This Month</option>
                    <option value={3}>Last 24 Hrs</option>
                    <option value={4}>Last 7 Days</option>
                    <option value={5}>Last 30 Days</option>
                    <option value={6}>Custom Date Range</option>
                </Select>
            </FormControl>
        </div>
    );
}
