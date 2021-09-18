import React from 'react';
import Typography from '@mui/material/Typography';
import Link from './Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://bytin.tech/">
                Bytin&apos;
            </Link>
            {` 2019 - ${new Date().getFullYear()}.`}
        </Typography>
    );
}
