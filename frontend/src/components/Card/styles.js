import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.width}px;
  height: ${props => props.height}px;

  align-items: center;
  justify-content: space-around;
`
