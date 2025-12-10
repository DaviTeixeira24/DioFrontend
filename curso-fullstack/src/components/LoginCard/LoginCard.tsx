import { Bleed, Box, Container, Input, Text } from "@chakra-ui/react";

function LoginCard() {
  return (
    <Box
      maxW="400px"
      rounded="xl"
      boxShadow="lg"
      alignItems="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
      backgroundColor="white"
      w="100%"
    >
      <Bleed
        width="100%"
        p="4"
        as="header"
        mb="10"
        backgroundColor="black"
        fontSize="2xl"
        fontWeight="bold"
        textAlign="center"
      >
        <Text color="white">Login</Text>
      </Bleed>
      {/* Conteúdo do cartão de login */}
      <Input placeholder="Email" m="5" />
      <Input placeholder="Password" m="5" />
    </Box>
  );
}

export default LoginCard;
