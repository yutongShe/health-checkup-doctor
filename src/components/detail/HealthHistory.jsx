import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { useSelector } from 'react-redux';


const TableCellTitle = styled(TableCell)({
  fontWeight: 'bold',
  fontSize: 16,
});

const Title = styled(Paper)(({ theme }) => ({
  ...theme.typography.h5,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export default function BasicTable() {
  let healthHistory = useSelector((state) => state.posts.healthHistory);
  healthHistory.forEach(element => {
    let object = JSON.parse(element.content);

    if (object.length !== 0) {
      element.text = object.join(' , ');
    } else {
      element.text = "无"
    }
  });
  let seq = 1;
  return (
    <TableContainer component={Paper} sx={{marginTop: 2}}>
      <Title variant='h5' gutterbottom="true">健康信息</Title>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellTitle sx={{ minWidth: '3%' }}>序号</TableCellTitle>
            <TableCellTitle sx={{ minWidth: '10%' }}>类型</TableCellTitle>
            <TableCellTitle>内容</TableCellTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {healthHistory.map((row) => (
            <TableRow
              key={row.seq}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{seq++}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.text}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
