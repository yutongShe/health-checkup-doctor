import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Paper,
  Button
} from '@mui/material';
import BasicCard from './BasicCard';
import BasicTable from './BasicTable'
import TransferList from './TransferList';

const Title = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(2),
  color: 'crimson',
  fontWeight: 'bold'
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <BasicCard />
          <Card sx={{marginTop: 2}}>
            <Title>
              项目决策
              <Button 
                variant='contained' 
                color='primary'  
                size='large' 
                sx={{ float: 'right'}} 
              >
                提交
              </Button>
              <TransferList />
            </Title>  
          </Card>
        </Grid>
        <Grid item xs={5}>
          <BasicTable />
        </Grid>
      </Grid>
    </Box>
  );
}
