import * as React from "react";
import {AppProps} from "next/app";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {StudentInterface} from "@/interfaces/student.interface";

interface StudentRowProps extends AppProps {
    record: StudentInterface
}
export default class StudentRow extends React.Component<any, any> {
    constructor(props: StudentRowProps) {
        super(props);
        this.state = {
            record: props.record
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filed: string, value: string) {
        this.setState({
            record: { ...this.state.record, [filed]: value },
        })
    }

    render() {
        return (
            <TableRow
                key={this.state.record.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {this.state.record.id}
                </TableCell>
                <TableCell>
                    <input
                        type="text"
                        name="name"
                        value={this.state.record.name}
                        onChange={ (event: any) => {
                            this.handleChange('name', event.target.value)
                        }}
                    />
                </TableCell>
                <TableCell>
                    <input
                        type="text"
                        name="gender"
                        value={this.state.record.gender}
                        onChange={ (event: any) => {
                            this.handleChange('gender', event.target.value)
                        }}
                    />
                </TableCell>
                <TableCell>
                    <input
                        type="text"
                        name="address"
                        value={this.state.record.address}
                        onChange={ (event: any) => {
                            this.handleChange('address', event.target.value)
                        }}
                    />
                </TableCell>
            </TableRow>
        );
    }
}
