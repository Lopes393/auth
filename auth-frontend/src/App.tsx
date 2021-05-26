import GoogleLogin from "react-google-login";

export function App() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId="604854120587-h09ufc01lrb6j9v0t8boghrp2u84gilv.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
