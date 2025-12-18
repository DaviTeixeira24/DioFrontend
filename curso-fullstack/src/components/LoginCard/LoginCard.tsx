import { Bleed, Box, Button, Input, Text } from "@chakra-ui/react";
import { login } from "../../services/login";

function LoginCard() {
  return (
    <Box maxW="400px" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Bleed
        as="header"
        mb="10"
        backgroundColor="gray.800"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
        overflow="hidden"
        borderWidth="1px"
        borderTopRadius="lg"
      >
        <Box p="8">
          <Text color="white">Login</Text>
        </Box>
      </Bleed>
      <Box p="5" justifyContent="center">
        <Input placeholder="Email" type="email" mb="7" />
        <Input placeholder="Password" type="password" />
        <Button
          onClick={login}
          mt="10"
          width="100%"
          color="white"
          bg="gray.800"
          _hover={{ bg: "gray.700" }}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
}

export default LoginCard;
