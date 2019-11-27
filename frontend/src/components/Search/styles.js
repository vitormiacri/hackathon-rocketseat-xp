import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 80%;
  height: 45px;
  padding: 0 15px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: -1px 2px 5px -2px rgba(68, 68, 68, 1);

  &:focus,
  &:hover {
    border: 1px solid #f25c05;
  }
`
