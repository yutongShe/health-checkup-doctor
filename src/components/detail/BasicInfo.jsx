import * as React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';


export default function BasicCard() {
  const personalInfo = useSelector((state) => state.posts.personalInfo)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          基本信息
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>年龄：{personalInfo.age}</Grid>
          <Grid item xs={4}>性别：{personalInfo.sex}</Grid>
          <Grid item xs={4}>BMI：{personalInfo.bmi}</Grid>
          <Grid item xs={4}>婚姻状况：{personalInfo.marriage}</Grid>
          <Grid item xs={4}>手机号：{personalInfo.phoneNumber}</Grid>
          <Grid item xs={4}>身份证号：{personalInfo.identityCardNumber}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
