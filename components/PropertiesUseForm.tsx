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
  description: string | JSX.Element,
) {
  return { props, options, defaultProps, description };
}

const rows = [
  createData('values', 'Object', '{}', 'Values form'),
  createData('handlerChange', 'Function', '(event: ReactChangeEvent | string (name), value: any) => void', <>Function to change values; handlerChange(event) <br /> handlerChange(name, value)</>),
  createData('errors', 'Object', '{}', 'Errors form'),
  createData('submitting', 'boolean', 'false', 'is Form submitting'),
  createData('setValues', 'Function', '(values: Object | (prevValues: Object) => NewValuesForm) => void', 'Function to set values form'),
  createData('setRules', 'Function', '(rules: Object | (prevRules: Object) => NewRulesForm) => void', 'Function to set rules form'),
  createData('setErrors', 'Function', '(errors: Object | (prevErrors: Object) => NewErrorsForm) => void', 'Function to set errors form'),
  createData('handlerReset', 'Function', '(newValues: Object) => void', <>Function to reset values</>),

];

const PropertiesUseForm: React.FC = () => {
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
  )
}

export default PropertiesUseForm