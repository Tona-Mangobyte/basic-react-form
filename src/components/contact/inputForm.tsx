import * as React from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {Control, Controller, FieldValues} from "react-hook-form";

interface InputFormContactProp {
    control: Control<FieldValues, any>
}
export default function InputForm(props: InputFormContactProp) {

    return (
        <React.Fragment>
            <Grid item xs={10}>
                <Grid container spacing={4} className="gridMargin">
                    <Grid item xs={3} className="textField">
                        <Controller
                            control={props.control}
                            name="contact_code"
                            defaultValue=""
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
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
