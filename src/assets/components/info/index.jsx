
import "./style.css";
import pikachu from "../../pokedex_vertical.png";

function Pokedex() {
  return (
    <div className="pokedex-panel">
      <img
        src={pikachu}
        alt="Sobre esta página"
        className="pokedex-imagen-grande"
      />
    </div>
  );
}

export default Pokedex;
