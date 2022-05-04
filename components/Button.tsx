import * as React from 'react'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import theme from '../theme.config.json'

interface Props extends ButtonProps {
  c?: 'primary' | 'second_1' | 'second_2'
}

const ColorButton = styled(Button)<Props>((props) => ({
  color: theme.dark[props.c || 'primary'].text_color,
  backgroundColor: theme.dark[props.c || 'primary'].color,
  '&:hover': {
    backgroundColor: theme.dark[props.c || 'primary'].color_700,
  },
}));

const MyButton: React.FC<Props> = props => {
  const { children, ...propsBtn } = props

  return (
    <ColorButton {...propsBtn}>
      {children}
    </ColorButton>
  )
}

MyButton.defaultProps = {
  c: 'primary',
  color: 'primary'
}

export default React.memo(MyButton)
