import styled from 'styled-components'
import { Form } from '@rocketseat/unform'

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 315px;

  margin-top: 30px;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  > span {
    color: #fff;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`
