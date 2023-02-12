import * as React from "react";
import {AppProps} from "next/app";
import {Button, Grid, TextField} from "@mui/material";
import { Controller } from "react-hook-form";

export default class InputFormComp extends React.Component<any, any> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={10}>
                    <Grid container spacing={4} className="gridMargin">
                        <Grid item xs={3} className="textField">
                            <Controller
                                control={this.props.control}
                                name="contact_code"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        size="small"
                                        label="Contact code"
                                    />
                                )}
                            />
                            {
                                this.props.errors.contact_code && (
                                    <span style={{ color: "red" }} role="alert"> required</span>)
                            }
                        </Grid>
                        <Grid item xs={3} className="textField">
                            <Controller
                                control={this.props.control}
                                name="contact_name"
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        size="small"
                                        label="Contact name"
                                    />
                                )}
                            />
                            {
                                this.props.errors.contact_name && (
                                    <span style={{ color: "red" }} role="alert"> required</span>)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}
