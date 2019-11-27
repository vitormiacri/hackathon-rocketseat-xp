import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #f24c3d, #f28305);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  text-align: center;

  > span {
    color: #fff;
    font-size: 24px;
    line-height: 34px;
  }
`
