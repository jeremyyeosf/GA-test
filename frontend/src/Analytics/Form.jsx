import React, { useEffect, useState } from 'react'
import AnalyticsService from './AnalyticsService'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import SplitButton from './SplitButton';
import DateSelectionButton from './DateSelectionButton';



export default function Form({ setData }) {
    const [viewId, setViewId] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // useEffect(() => {
    //     console.log('viewId', viewId)
    // }, [viewId])

    // useEffect(() => {
    //     console.log('startDate', startDate)
    // }, [startDate])

    function submit(e) {
        e.preventDefault()
        const analyticsSvc = new AnalyticsService()
        analyticsSvc.getData(viewId, startDate, endDate)
            .then(res => {
                // console.log('', res)
                setData(res)
            }).catch(e => console.log('ERROR', e))
    }

    function inputViewId(e) {
        setViewId(e.target.value)
    }

    function inputStartDate(e) {
        setStartDate(e.target.value)
    }

    function inputEndDate(e) {
        setEndDate(e.target.value)
    }

    const customDateRange = (
        <>
            <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => inputStartDate(e)}
            />
            <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => inputEndDate(e)}
            />
        </>
    )

    return (
        <div>
            <form onSubmit={e => submit(e)}>
                <div className="form-contents">
                    <div><TextField id="outlined-basic" label="ViewId" variant="outlined" onChange={e => inputViewId(e)} /> E.g. 212379370</div>
                    {/* <DateSelectionButton /> */}
                    <SplitButton selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

                    {selectedIndex === 6 ? customDateRange : null}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

