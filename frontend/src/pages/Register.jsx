import Myheader from "../components/header/Myheader";
import Registration from "../components/register/register";

export default function Register() {
  return (
    <header className="App-header">
      <Myheader />
      <h3>Creation de compte</h3>
      <Registration />
    </header>
  );
}
