import styled from 'styled-components'
import media from 'styled-media-query'
// import { li } from 'polished'

export const Container = styled.section`
  display: flex;
  padding: 30px 0;
  justify-content: center;
`

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 20px;
  border-radius: 15px;
`

export const Header = styled.div`
  display: flex;
`

export const UserImagemWrapper = styled.div`
  display: flex;
`
export const UserInfoWrapper = styled.div`
  margin-left: 15px;
`

export const UserImage = styled.img`
  width: 120px;
  border-radius: 50%;
`

export const UserName = styled.p`
  font-size: 22px;
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

export const BtnMentor = styled.button`
  margin-top: 20px;
  padding: 10px 0;
  width: 50%;
  border: none;
  background-color: #2955d9;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: -1px 2px 5px -2px rgba(68, 68, 68, 1);
    background-color: #2955e9;
  }

  &:active {
    box-shadow: none;
    background-color: #2955c9;
  }
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: center;
  `}
`

export const UserVideo = styled.div`
  width: 50%;
  height: 250px;
  border-radius: 5px;
  ${media.lessThan('large')`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 15%;
  `}
`

export const UserResume = styled.div`
  width: 50%;
  padding-right: 20px;
  line-height: 26px;

  ${media.lessThan('large')`
    width: 100%;

  `}

  h2 {
    margin-bottom: 25px;
  }

  p {
    margin-top: 20px;
    color: #666;
  }
`
