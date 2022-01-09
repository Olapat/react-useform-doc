import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';
import theme from '../theme.config.json'

interface Props extends OutlinedTextFieldProps {
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: theme.dark.primary.text_color,
  },
  '& .MuiOutlinedInput-input': {
    color: theme.dark.primary.text_color,
    padding: '6px 0.8rem'
  },
  '& .MuiOutlinedInput-input:not([multiple]) option': {
    backgroundColor: theme.dark.bg_card.color,
    color: theme.dark.bg_card.text_color,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.dark.primary.color_700,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.dark.primary.color_700,
    },
    '&:hover fieldset': {
      borderColor: theme.dark.primary.color,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.dark.primary.color_700,
    },
  },
});

const CustomizedInputs:React.FC<Props> = props => {
  return (
    <CssTextField hiddenLabel {...props} />
  );
}

export default React.memo(CustomizedInputs)
