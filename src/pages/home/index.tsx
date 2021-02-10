import { Link } from "react-router-dom";

//Styles
import { Container } from "./styles";
//Icon
import playIcon from "../../assets/icons/play.svg";

const HomePage = () => {
  return (
    <Container>
      <h1>Just a Regular Game</h1>
      <small>Joking, is a BestGame Ever</small>

      <Link to="/player">
        <img src={playIcon} alt="Form Player" />
      </Link>
    </Container>
  );
};
export default HomePage;
