import { useState } from "react";
import GoogleLogin from "react-google-login";
import Lottie from "react-lottie";
import animationData from "../../assets/animations/congradulations.json";
import { Input } from "../../components/Input";
import {
  Container,
  Content,
  Header,
  Actions,
  Logar,
  CreateAccount,
  Log,
  Image,
  Email,
  Nome,
} from "./styles";

export function Login() {
  const API_KEY = process.env.REACT_APP_AUTH_API_KEY as string;

  const responseGoogle = (response: any) => {
    setEmail(response.profileObj.email);
    setNome(response.profileObj.name);
    setFoto(response.profileObj.imageUrl);
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
      {email ? (
        <Log>
          <Image>
            <img src={foto} alt="" />
          </Image>
          <Nome>{nome}</Nome>
          <Email>{email}</Email>
          <div className="animation">
            <Lottie
              options={defaultOptions}
              height={240}
              width={240}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </Log>
      ) : (
        ""
      )}
    </Container>
  );
}
