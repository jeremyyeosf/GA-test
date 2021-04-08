import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Page</StyledTableCell>
                        <StyledTableCell align="right">PageViews</StyledTableCell>
                        <StyledTableCell align="right">TimeFrame</StyledTableCell>
                        <StyledTableCell align="right">From</StyledTableCell>
                        <StyledTableCell align="right">To</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <StyledTableRow key={data?.pagePath + data?.pageViews}>
                            <StyledTableCell component="th" scope="row">
                                {data?.pagePath}
                            </StyledTableCell>
                            <StyledTableCell align="right">{data?.pageViews}</StyledTableCell>
                            <StyledTableCell align="right">{data?.timeFrame}</StyledTableCell>
                            <StyledTableCell align="right">{data?.startDate}</StyledTableCell>
                            <StyledTableCell align="right">{data?.endDate}</StyledTableCell>
                        </StyledTableRow>
                    {/* {data?.map((row) => (
                        <StyledTableRow key={row?.pagePath + row?.pageViews}>
                            <StyledTableCell component="th" scope="row">
                                {row?.pagePath}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row?.pageViews}</StyledTableCell>
                            <StyledTableCell align="right">{row?.timeFrame}</StyledTableCell>
                            <StyledTableCell align="right">{row?.startDate}</StyledTableCell>
                            <StyledTableCell align="right">{row?.endDate}</StyledTableCell>
                        </StyledTableRow>
                    ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
