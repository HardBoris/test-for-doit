import { Container, Content } from "./style";
import Button from "../../components/Button";
import { useHistory, Redirect } from "react-router";

function Home(authenticated) {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    // return <Redirect to="" />;
  }

  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button onClick={() => handleNavigation("./signup")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("./login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
