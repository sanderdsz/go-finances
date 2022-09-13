import React from "react";

import {
  Container,
  Icon,
  Header,
  Photo,
  User,
  UserGreeting,
  UserWrapper,
  UserInfo,
  UserName,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/49321724?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Sander</UserName>
            </User>
          </UserInfo>
          <Icon name={"power"} />
        </UserWrapper>
      </Header>
    </Container>
  );
}
