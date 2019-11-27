import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      background: rgba(0, 0, 10, 0.2);
      color: rgba(255, 255, 255, 0.7);
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    div {
      margin: 20px 0 30px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    button {
      margin-top: 10px;
      margin-left: auto;
      width: 180px;
      padding: 10px 0;
      background: #2955d9;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`
