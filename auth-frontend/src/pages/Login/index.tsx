import GoogleLogin from "react-google-login";
import { useState } from "react";
import {
  Container,
  Content,
  Header,
  Actions,
  Logar,
  CreateAccount,
} from "./styles";
import { Input } from "../../components/Input";

export function Login() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY as string;
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Container>
      <Content>
        <Header>Faça seu login</Header>
        <Input
          type="text"
          placeholder="Telefone, nome de usuario ou email"
          state={user}
          setState={setUser}
          width="83%"
        />
        <Input
          type="text"
          placeholder="Senha"
          state={pass}
          setState={setPass}
          width="83%"
        />
        <Actions>
          <Logar>Login</Logar>
        </Actions>
        <div className="separete">
          <hr />
          Ou
          <hr />
        </div>
        <GoogleLogin
          className="login-google-button"
          clientId={API_KEY}
          buttonText="Login com o Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <CreateAccount>
          Não tem uma conta?&nbsp;<a href="">Cadastre-se</a>
        </CreateAccount>
      </Content>
    </Container>
  );
}
