import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link as RouterLink} from 'react-router-dom';
// components
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';


function createData(phoneNumber, name, age, sex, appointment) {
  return { phoneNumber, name, age, sex, appointment };
}

const rows = [
  createData(17725024147,'测试A', 23, '女', 17725024147),
  createData(17725024148,'测试B', 49, '女', 17725024148),
  createData(17725024149,'测试C', 50, '男', 17725024149),
];

const TableCellTitle = styled(TableCell)({
  fontWeight: 'bold',
  fontSize: 18,
});

export default function BasicTable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCellTitle>用户标识号</TableCellTitle>
            <TableCellTitle>姓名</TableCellTitle>
            <TableCellTitle>年龄&nbsp;(岁)</TableCellTitle>
            <TableCellTitle>性别</TableCellTitle>
            <TableCellTitle>预约详情</TableCellTitle>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.phoneNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.phoneNumber}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell 
                component={RouterLink} 
                to="/dashboard/detail"
                sx={{
                  color: 'blue'
                }}
              >
                查看详情
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
