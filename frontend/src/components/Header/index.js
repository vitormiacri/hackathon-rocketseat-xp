import React from 'react'

import Button from '~/components/Button'
import { Container, Content, RightMenu } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <h3>Machine</h3>

        <RightMenu>
          <Button
            // icon="MdAddCircleOutline"
            color="transparent"
            width={150}
            type="button"
            onClick={() => {}}
          >
            Login
          </Button>
        </RightMenu>
      </Content>
    </Container>
  )
}
