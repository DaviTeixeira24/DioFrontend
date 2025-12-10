import { Container, Flex } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import LoginCard from "./components/LoginCard/LoginCard";

function App() {
  return (
    <Layout>
      <Container
        minH="100vh"
        padding="4"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <LoginCard />
      </Container>
    </Layout>
  );
}

export default App;
