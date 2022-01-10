import React from 'react'
import { Typography, Divider } from '@mui/material';
import BasicTable from '../components/current/BasicTable'
export default function Current() {
    return (
        <div>
            <Typography
                variant='h5' 
                gutterBottom 
                sx={{
                    fontWeight: 'bold',
                    color: '#1288E9'
                }}
            >
                当前预约用户
            </Typography>
            <Divider
                sx={{
                    marginBottom: '10px'
                }}
            />
            <BasicTable />
        </div>    
    )
}
