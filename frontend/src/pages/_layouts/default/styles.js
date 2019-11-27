import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  overflow: auto;
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-left: 260px;

  ${media.lessThan('medium')`
    padding: 60px 0 0;
  `}
`
