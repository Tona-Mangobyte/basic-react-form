import * as React from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {
    Control,
    Controller,
    FieldValues,
    UseFormRegister,
    UseFormSetValue,
    UseFormGetValues,
    UseFormSetError,
    FieldErrors,
} from "react-hook-form";

interface InputFormContactProp {
    control: Control<FieldValues, any>
    register: UseFormRegister<any>
    setValue: UseFormSetValue<{}>
    getValues: UseFormGetValues<{}>
    errors: FieldErrors<FieldValues>
    setError: UseFormSetError<{}>
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
                            props.errors.contact_code && (
                                <span style={{ color: "red" }} role="alert"> required</span>)
                        }
                    </Grid>
                    <Grid item xs={3} className="textField">
                        <Controller
                            control={props.control}
                            name="contact_name"
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field: { ref, onChange, ...field } }) => (
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
                            props.errors.contact_name && (
                            <span style={{ color: "red" }} role="alert"> required</span>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
