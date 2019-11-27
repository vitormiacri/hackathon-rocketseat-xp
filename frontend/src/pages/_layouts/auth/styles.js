import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.section`
  height: 100%;
  background: #fff;
  display: flex;
`

export const Content = styled.div`
  width: 1000%;
  max-width: 315px;
  text-align: center;

  img {
    margin-bottom: 25px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      margin-bottom: 10px;
      color: rgba(255, 255, 255, 0.7);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 50px;
      margin-top: 5px;
      background: #f94f6a;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f94f6a')};
      }
    }

    span {
      color: #fb6f91;
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
  }
`
