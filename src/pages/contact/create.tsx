import * as React from 'react';
import {AppProps} from "next/app";
import {Button, Grid, Typography, Divider as MuiDivider, Paper, TextField} from "@mui/material";
import Link from 'next/link';
import { styled } from "@mui/material/styles";
import {spacing} from "@mui/system";
import { useForm, Controller, Control } from 'react-hook-form';
import InputForm from "@/components/contact/inputForm";

const Divider = styled(MuiDivider)(spacing);
export default function Create(props: AppProps) {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        getValues,
        setError,
        formState: { errors }
    } = useForm({
        defaultValues: {},
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <div className="page-header">
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant="h3" display="block">Contact</Typography>
                    </Grid>
                    <Grid item xs className="buttonRight">
                        <Link className="link-button" href={`/contact`}>
                            <Button variant="contained" size="small" className="buttonReturn">Back</Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
            <Divider my={2} />

            <div className="form-area">
                <Paper className="paper">
                    <form autoComplete='off' className="root" onSubmit={handleSubmit(onSubmit)}>
                        <InputForm
                            control={control}
                            register={register}
                            setValue={setValue}
                            getValues={getValues}
                            errors={errors}
                            setError={setError}
                        />
                        <Grid container spacing={4}>
                            <Grid item xs={12} className="registButton">
                                <Button
                                    type={"submit"}
                                    variant="contained"
                                    color="primary"
                                    className={"buttonOrange"}>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </div>
        </React.Fragment>
    );
}
