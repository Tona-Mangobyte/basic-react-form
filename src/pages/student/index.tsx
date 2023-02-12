import * as React from "react";
import {AppProps} from "next/app";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Grid} from "@mui/material";
import StudentRow from "@/components/student/StudentRow";

export default class Student extends React.Component<any, any> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: "Student1", gender: "Male", address: "PP" },
                { id: 2, name: "Student2", gender: "Female", address: "PV" },
            ],
        };
        this.handlerNewRow = this.handlerNewRow.bind(this);
    }

    handlerNewRow(e: any) {
        console.log(`execute handlerNewRow`);
        const students = this.state.students;
        students.push({ id: students.length + 1, name: "Student3", gender: "Female", address: "PV" })
        this.setState({
            students: students
        });
    }

    render() {
        return (
            <Grid container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.students.map((row: any) => (
                                <StudentRow
                                    key={row.id}
                                    record={row}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={4}>
                    <Grid item xs={12} className="registButton">
                        <Button
                            variant="contained"
                            color="primary"
                            className={"buttonOrange"}
                            /*onClick={ (event: any) => {
                                this.handlerNewRow(event)
                            }}*/
                            onClick={ this.handlerNewRow }
                        >
                            New
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
