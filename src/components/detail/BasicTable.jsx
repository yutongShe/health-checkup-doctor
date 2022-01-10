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

let id = 0;
function createData(type, content, updateTime, ) {
    id += 1;
  return { id, type, content, updateTime };
}

const rows = [
  createData('家族史','高血压', '2021-07-23 15:55:57'),
  createData('现病史','糖尿病，脑卒中，慢性阻塞性肺病', '2021-07-23 15:55:57'),
  createData('运动锻炼','偶尔参加', '2021-07-23 15:55:57'),
  createData('家族史','高血压', '2021-07-23 15:55:57'),
  createData('现病史','糖尿病，脑卒中，慢性阻塞性肺病', '2021-07-23 15:55:57'),
  createData('运动锻炼','偶尔参加', '2021-07-23 15:55:57'),
  createData('家族史','高血压', '2021-07-23 15:55:57'),
  createData('现病史','糖尿病，脑卒中，慢性阻塞性肺病', '2021-07-23 15:55:57'),
  createData('运动锻炼','偶尔参加', '2021-07-23 15:55:57'),
  createData('家族史','高血压', '2021-07-23 15:55:57'),
  createData('现病史','糖尿病，脑卒中，慢性阻塞性肺病', '2021-07-23 15:55:57'),
  createData('运动锻炼','偶尔参加', '2021-07-23 15:55:57'),
]

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
  return (
    <TableContainer component={Paper} >
      <Title variant='h5' gutterBottom>健康信息</Title>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellTitle>序号</TableCellTitle>
            <TableCellTitle>类型</TableCellTitle>
            <TableCellTitle>内容</TableCellTitle>
            <TableCellTitle>更新时间</TableCellTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>{row.updateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
