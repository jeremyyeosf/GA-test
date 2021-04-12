import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function ResultsTable({ data }) {
    const classes = useStyles();

    useEffect(() => {
        console.log('table data', data)
    }, [data])

    useEffect(() => {
        console.log('row', data.resultRows.data.rows
            // .map(row => {
            //     console.log(row.metrics[0].values)
            // })
        )
    }, [data])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Page</StyledTableCell>
                        <StyledTableCell align="right">PageViews</StyledTableCell>
                        {/* <StyledTableCell align="right">Date</StyledTableCell> */}
                        {/* <StyledTableCell align="right">TimeFrame</StyledTableCell>
                        <StyledTableCell align="right">From</StyledTableCell>
                        <StyledTableCell align="right">To</StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.resultRows?.data?.rows?.map((row) => (
                        <StyledTableRow key={uuidv4()}>
                            <StyledTableCell component="th" scope="row">
                                {row?.dimensions[0]}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row?.metrics[0].values[0]}</StyledTableCell>
                            {/* <StyledTableCell align="right">{row?.dimensions[0]}</StyledTableCell> */}
                            {/* <StyledTableCell align="right">{data?.timeFrame}</StyledTableCell> */}
                            {/* <StyledTableCell align="right">{row?.startDate}</StyledTableCell> */}
                            {/* <StyledTableCell align="right">{row?.endDate}</StyledTableCell> */}
                        </StyledTableRow>
                    ))}
                    {/* <StyledTableRow key={data?.pagePath + data?.pageViews}>
                            <StyledTableCell component="th" scope="row">
                                {data?.pagePath}
                            </StyledTableCell>
                            <StyledTableCell align="right">{data?.pageViews}</StyledTableCell>
                            <StyledTableCell align="right">{data?.timeFrame}</StyledTableCell>
                            <StyledTableCell align="right">{data?.startDate}</StyledTableCell>
                            <StyledTableCell align="right">{data?.endDate}</StyledTableCell>
                        </StyledTableRow> */}
                    {/* {data?.resultRows?.map((row) => (
                        <StyledTableRow key={uuidv4()}>
                            <StyledTableCell component="th" scope="row">
                                {data?.pagePath}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row?.pageViews}</StyledTableCell>
                            <StyledTableCell align="right">{data?.timeFrame}</StyledTableCell>
                            <StyledTableCell align="right">{row?.startDate}</StyledTableCell>
                            <StyledTableCell align="right">{row?.endDate}</StyledTableCell>
                        </StyledTableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
