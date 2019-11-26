import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${props => props.width}px;
  height: 50px;
  border: 0;
  color: #fff;
  border-radius: 4px;
  background: ${props => props.color};

  &:hover {
    background: ${props => darken(0.03, props.color)};
  }

  svg {
    margin-right: 5px;
  }

  & + & {
    margin-left: 15px;
  }
`
