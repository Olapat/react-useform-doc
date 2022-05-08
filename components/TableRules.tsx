import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  props: string,
  options: string | JSX.Element,
  defaultProps: string,
  description: string,
) {
  return { props, options, defaultProps, description };
}

const rows = [
  createData('required', 'boolean | string', '{}', 'rule set field is required'),
  createData('isAllowed', <>Object: <a href='#props-isallowed' className='text-black'>IsAllowed</a></>, 'null', 'rule set field is allowed value'),
];

const TableRules: React.FC = props => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Props</TableCell>
            <TableCell align="left">Options</TableCell>
            <TableCell align="left">Default</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.props}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.props}
              </TableCell>
              <TableCell align="left">{row.options}</TableCell>
              <TableCell align="left">{row.defaultProps}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableRules
