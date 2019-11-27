import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Content,
  Header,
  UserImagemWrapper,
  UserInfoWrapper,
  UserImage,
  UserName,
  UserCarrear,
  UserBio,
  BtnMentor,
  Body,
  UserVideo,
  UserResume,
} from './styles'

export default function UserItem({ user }) {
  return (
    <Container>
      <Content>
        <Header>
          <UserImagemWrapper>
            <UserImage
              src={`https://api.adorable.io/avatars/50/${user}adob@adorable.png`}
              alt="Imagem de perfil"
            />
          </UserImagemWrapper>
          <UserInfoWrapper>
            <UserName>Jhon Doe</UserName>
            <UserCarrear>Backend developer</UserCarrear>
            <UserBio>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </UserBio>
          </UserInfoWrapper>
        </Header>
        <BtnMentor>Pedir mentoria</BtnMentor>
        <Body>
          <UserVideo />
          <UserResume>
            <h1>O que é Lorem Ipsum?</h1>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
            </p>
            <p>
              Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
              salto para a editoração eletrônica, permanecendo essencialmente
              inalterado. Se popularizou na década de 60, quando a Letraset
              lançou decalques contendo passagens de
            </p>
          </UserResume>
        </Body>
      </Content>
    </Container>
  )
}

UserItem.propTypes = {
  user: PropTypes.number.isRequired,
}
