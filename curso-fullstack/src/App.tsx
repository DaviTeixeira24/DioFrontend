import { Box, Button, Center, Input } from "@chakra-ui/react";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Box minH="100vh" padding="4">
        <Box
          borderRadius="25px"
          padding="6"
          boxShadow="lg"
          maxW="400px"
          margin="0 auto"
        >
          <Center marginBottom="6">
            <h1>Faça seu login</h1>
          </Center>
          <Input placeholder="Email" marginBottom="4" />
          <Input placeholder="Password" type="password" />

          <Button marginTop="6" width="100%" colorScheme="blue" size="lg">
            Entrar
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default App;
