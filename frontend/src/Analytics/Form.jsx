import React, { useEffect, useState } from 'react'
import AnalyticsService from './AnalyticsService'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import moment from 'moment'
import DateTimeSelect from './DateTimeSelect';
// import TimeIntervalSwitch from './TimeIntervalSwitch';

export default function Form({ setData, setError, setIsLoading }) {
    const [viewId, setViewId] = useState("212379370")
    const [pagePath, setPagePath] = useState("/")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [selectedIndex, setSelectedIndex] = useState(0);
    // const [timeInterval, setTimeInterval] = useState("none")
    const selectedDimensions = ["ga:pagePath"]
    // const selectedDimensions = ["ga:date", "ga:pagePathLevel1"]
    const selectedMetrics = ["ga:uniquePageviews"]
    let today = moment().format('YYYY-MM-DD')
    let defaultCustomStartDate = moment().subtract(7, 'days').format('YYYY-MM-DD')
    const datetimeOptions = ['Today', 'This Week', 'This Month', 'Last 24 Hrs', 'Last 7 Days', 'Last 30 Days', 'Custom Date Range'];

    // useEffect(() => {
    //     console.log('startDate', startDate)
    // }, [startDate])
    // useEffect(() => {
    //     console.log('endDate', endDate)
    // }, [endDate])

    useEffect(() => {
        switch (selectedIndex) {
            // Today
            case 0:
                setStartDate(today)
                setEndDate(today)
                break;
            // This Week
            case 1:
                setStartDate(moment().startOf('week').format('YYYY-MM-DD'))
                setEndDate(today)
                break;
            // This Month
            case 2:
                setStartDate(moment().startOf('month').format('YYYY-MM-DD'))
                setEndDate(today)
                break;
            // Last 24 hrs
            case 3:
                setStartDate(moment().subtract(1, 'days').format('YYYY-MM-DD'))
                setEndDate(today)
                break;
            // Last 7 days
            case 4:
                setStartDate(moment().subtract(7, 'days').format('YYYY-MM-DD'))
                setEndDate(today)
                break;
            // Last 30 days
            case 5:
                setStartDate(moment().subtract(30, 'days').format('YYYY-MM-DD'))
                setEndDate(today)
                break;
            // Custom Date Range
            case 6:
                setStartDate(defaultCustomStartDate)
                setEndDate(today)
                break;
            default:
                break;
        }
    }, [selectedIndex, defaultCustomStartDate, today])

    function submit(e) {
        e.preventDefault()
        setIsLoading(true)
        const analyticsSvc = new AnalyticsService()
        console.log('submitting this..')
        console.log('viewId', viewId)
        console.log('startDate', startDate)
        console.log('endDate', endDate)
        console.log('selectedDimensions', selectedDimensions)
        console.log('selectedMetrics', selectedMetrics)
        console.log('pagePath', pagePath)
        
        analyticsSvc.getData(viewId, startDate, endDate, selectedDimensions, selectedMetrics, pagePath)
            .then(res => {
                console.log('after form submit res: ', res)
                if (res.status === 500) {
                    console.log('error msg', res.data.error)
                    setError({ isError: true, errorMessage: res.data.error })
                } else {
                    let pageViewData = {
                        viewId,
                        pagePath,
                        timeFrame: datetimeOptions[selectedIndex],
                        // timeInterval: timeInterval,
                        startDate,
                        endDate,
                        resultRows: res,
                    }
                    console.log('data', pageViewData)
                    setData(pageViewData)
                    setError({ isError: false, errorMessage: "" })
                }
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }

    function inputViewId(e) {
        setViewId(e.target.value)
    }

    function inputPagePath(e) {
        setPagePath(e.target.value)
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
                defaultValue={defaultCustomStartDate}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => inputStartDate(e)}
            />
            <TextField
                error={startDate > endDate}
                helperText={(startDate > endDate) ? "Start date must come before End date." : null}
                id="date"
                label="End Date"
                type="date"
                defaultValue={today}
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
                    <div><TextField id="outlined-basic" label="ViewId" variant="outlined" onChange={e => inputViewId(e)} value={viewId} /> E.g. 212379370</div>
                    {/* <div><TextField id="outlined-basic" label="Page Path" variant="outlined" onChange={e => inputPagePath(e)} value={pagePath} /> E.g. /noticeboard</div> */}
                    <DateTimeSelect selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                    {selectedIndex === 6 ? customDateRange : null}
                    {/* <TimeIntervalSwitch setTimeInterval={setTimeInterval} /> */}
                    <Button type="submit" variant="contained" color="primary" disabled={startDate > endDate}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

