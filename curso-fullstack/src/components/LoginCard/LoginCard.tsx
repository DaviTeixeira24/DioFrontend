import { Bleed, Box, Input, Text } from "@chakra-ui/react";
import { login } from "../../services/login";
import { useState } from "react";
import { MButton } from "../Button/MButton";

function LoginCard() {
  const [email, setEmail] = useState("");

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
        <Input
          placeholder="Email"
          type="email"
          mb="7"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input placeholder="Password" type="password" />
        <MButton onClick={() => login(email)} title="Entrar" />
      </Box>
    </Box>
  );
}

export default LoginCard;
