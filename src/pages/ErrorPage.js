import { useNavigate } from "react-router-dom";
import {goToHomePage} from "../routes/Cordinator"

function ErrorPage() {
  const navigate = useNavigate();

  


  return (
    <section>
      <button onClick={() => goToHomePage(navigate)}>Página Inicial</button>
      <h1>Página não encontrada</h1>
    </section>
  );
}

export default ErrorPage;
