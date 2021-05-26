import logo from "./logo.svg";
import "./App.css";
import GoogleLogin from "react-google-login";

function App() {
  const responseGoogle = (response) => {
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

export default App;
