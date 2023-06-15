import Myheader from "../components/header/Myheader";
import LoginPage from "../components/login/login";

export default function Login() {
  return (
    <header className="App-header">
      <Myheader />
      <h3>Page de Connexion</h3>
      <LoginPage />
    </header>
  );
}
