import styled from 'styled-components'

import borderBottom from '~/assets/images/borderb.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const HeaderPage = styled.div`
  display: flex;
  min-height: 420px;
  background: linear-gradient(135deg, #f24c3d, #f28305);
  /* background-image: url(${borderBottom}); */

  div {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 64px;
      line-height: 74px;
      color: #fff;
    }

    img {
      width: 370px;
      height: 370px;
    }
  }
`
export const BodyPage = styled.div`
  max-width: 1120px;
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  margin: 40px auto;
  min-height: 300px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  span {
    text-align: center;
    flex: 1;
    border-bottom: 1px solid #f28305;
    max-width: 150px;
  }
`
