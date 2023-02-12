import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {AppProps} from "next/app";

interface SimpleData {
    name: string
    calories: number
    fat: number
    carbs: number
    protein: number
}
export default class SimpleTable extends React.Component<any, any> {

    constructor(props: AppProps) {
        super(props);
        this.state = {
            rows: [
                this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
                this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
                this.createData('Eclair', 262, 16.0, 24, 6.0),
                this.createData('Cupcake', 305, 3.7, 67, 4.3),
                this.createData('Gingerbread', 356, 16.0, 49, 3.9),
            ],
        }
    }

    createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ): SimpleData {
        return { name, calories, fat, carbs, protein };
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((row: any) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
