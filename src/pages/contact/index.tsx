import * as React from 'react';
import {AppProps} from "next/app";
import {Button, Grid, Typography, Divider as MuiDivider, Paper, TextField} from "@mui/material";
import Link from 'next/link';
import { styled } from "@mui/material/styles";
import {spacing} from "@mui/system";

const Divider = styled(MuiDivider)(spacing);
export default function Contact(props: AppProps) {

    return (
        <React.Fragment>
            <h2>List Contact</h2>
        </React.Fragment>
    );
}
