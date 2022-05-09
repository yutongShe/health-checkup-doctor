import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Paper,
  Button,
  Divider,
  TextField
} from '@mui/material';
import { useSelector } from 'react-redux';
import BasicInfo from './BasicInfo';
import HealthHistory from './HealthHistory'
import TransferList from './TransferList';
import { commitDoctorEvaluationApi } from '../../api';

const Title = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(2),
  color: 'crimson',
  fontWeight: 'bold'
}));

export default function BasicGrid() {
  
const examiner = useSelector((state) => state.posts.personalInfo.username);
  const doctorRecommend = useSelector((state) => state.posts.doctorRecommend);
  const doctorNotRecommend = useSelector((state) => state.posts.doctorNotRecommend);
  const [addedItems, setAddItems] = React.useState('');
  const [comment, setComment] = React.useState('');
  
  const handleSubmit = () => {
    let doctorEvaluation = {
      'doctor': sessionStorage.getItem("username"),
      'examiner': examiner,
      'recommendedItems': doctorRecommend.toString(),
      'notRecommendedItems': doctorNotRecommend.toString(),
      'addedItems': addedItems,
      'comment': comment,
      "submitTime": Date.now()
    }
    commitDoctorEvaluationApi(doctorEvaluation).then(res => {
      if (res.data.flag === 200) {
        alert(res.data.detail);
        window.location.reload()
      } else {
        alert(res.data.detail);
      }
    })
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BasicInfo />
          <HealthHistory />
          <Card sx={{marginTop: 2}}>
            <Title>
              项目决策
              <TransferList />
              <Divider sx={{marginTop: 2}} />
              <TextField 
                id="outlined-basic" 
                fullWidth label="补充项目" 
                variant="outlined" 
                helperText="基于受检者的健康信息，若您认为系统决策不够充分，请在此填写您认为需要补充的项目，若无可不填。" 
                sx={{marginTop: 2}} 
                multiline 
                maxRows={4} 
                onChange={(e) => setAddItems(e.target.value)} 
              />
              <TextField 
                id="outlined-basic" 
                fullWidth 
                label="评价依据" 
                variant="outlined" 
                helperText="对于本例受检者，您可以填写您的决策依据，若您认为需要补充其他项目，请说明理由。" 
                sx={{marginTop: 2}} 
                multiline 
                maxRows={5} 
                onChange={(e) => setComment(e.target.value)} 
              />
              <Button variant='contained' fullWidth sx={{marginTop: 2, height: 40}} onClick={handleSubmit}>提交决策结果</Button>
            </Title>  
          </Card>
          
        </Grid>
        {/* <Grid item xs={4}>
          
        </Grid> */}
      </Grid>
    </Box>
  );
}