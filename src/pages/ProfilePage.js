import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage } from "../routes/Cordinator";

function ProfilePage() {
  const navigate = useNavigate();
  const params = useParams()

 console.log(params);
  return (
    <section>
      <button onClick={()=>goToHomePage(navigate)}>Página inicial</button>
      <h1>Página de perfil de {params.name}</h1>
    </section>
  );
}

export default ProfilePage;
