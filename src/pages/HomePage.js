import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../routes/Cordinator";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section>
      <button onClick={() => goToProfilePage(navigate,"Luan")}>Profile Page</button>
      <h1>Página inicial</h1>
    </section>
  );
}

export default HomePage;
