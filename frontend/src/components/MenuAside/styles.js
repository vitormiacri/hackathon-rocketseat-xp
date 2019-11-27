import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: #f25c05;
  position: fixed;
  z-index: 4;
  box-shadow: 4px 1px 7px -2px rgba(68, 68, 68, 1);

  ${media.lessThan('medium')`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `}
`
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  ${media.lessThan('medium')`
    margin: 0;
    width: auto;
  `}
`

export const Logo = styled.h2`
  color: #fff;
`

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  ${media.lessThan('medium')`
    margin: 0;
    display: flex;
    flex-direction: row;
  `}
`

export const MenuItem = styled(Link)`
  color: #fff;
  border-bottom: 1px solid #f24c3d;
  padding: 10px 20px;
  font-weight: bold;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #f24c3d;
  }

  ${media.lessThan('medium')`
    padding: 0;
    margin-left: 10px;
    margin-bottom: 0;
  `}
`
