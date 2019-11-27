import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const Container = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: #f25c05;
  position: fixed;
  z-index: 10;
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

export const Logo = styled(Link)`
  font-size: 26px;
  font-weight: bold;
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

    &.display {
      display: none;
    }
  `}
`
export const MenuDropDown = styled.div`
  width: 100%;
  height: ${p => (!p.active ? '0px' : '200px')};
  top: 60px;
  right: 0px;
  display: none;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 0 30px 30px;
  position: absolute;
  box-shadow: 4px 1px 7px -2px rgba(68, 68, 68, 1);
  transition: height 0.3s ease-in-out;
  z-index: 7;
  overflow: hidden;

  ${media.lessThan('medium')`
    display: flex;
  `}
`

export const MenuButton = styled.button`
  width: 100px;
  display: none;
  flex-direction: row;
  border: none;
  align-items: center;
  color: #fff;

  svg {
    width: 30px;
  }

  ${media.lessThan('medium')`
    display: flex;
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
    padding-left: 20px;
    margin-bottom: 0;
    color: #333;
    border-bottom: none;

    &:hover {
    background-color: #eee;
  }
  `}
`
