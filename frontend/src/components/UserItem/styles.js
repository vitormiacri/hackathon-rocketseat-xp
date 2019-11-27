import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 80%;
  height: 170px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: -1px 2px 5px -2px rgba(68, 68, 68, 1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`

export const UserImagemWrapper = styled.div`
  display: flex;
`
export const UserInfoWrapper = styled.div`
  margin-left: 15px;
`

export const UserImage = styled.img`
  width: 80px;
  border-radius: 50%;
`

export const UserName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`

export const UserCarrear = styled.span`
  color: #666;
`

export const UserBio = styled.p`
  color: #666;
  margin-top: 10px;

  ${media.lessThan('small')`
    display: none;
  `}
`
