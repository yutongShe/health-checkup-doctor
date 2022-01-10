import * as React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          基本信息
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>年龄：23</Grid>
          <Grid item xs={4}>性别：女</Grid>
          <Grid item xs={4}>身份证号：652301199805275244</Grid>
          <Grid item xs={4}>手机号：17725024147</Grid>
          <Grid item xs={4}>婚姻状况：未婚</Grid>
        </Grid>
                       
      </CardContent>
    </Card>
  );
}
