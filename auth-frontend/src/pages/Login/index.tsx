import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Login() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <Container>
      <GoogleLogin
        clientId="604854120587-h09ufc01lrb6j9v0t8boghrp2u84gilv.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </Container>
  );
}
