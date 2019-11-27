import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: #f25c05;
  position: fixed;
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
  margin-top: 20px;
  padding-left: 20px;

  ${media.lessThan('medium')`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  `}
`

export const MenuItem = styled(Link)`
  color: #fff;
  margin-bottom: 10px;
  ${media.lessThan('medium')`
    margin-left: 10px;
    margin-bottom: 0;
  `}
`
