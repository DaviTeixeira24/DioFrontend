import { Bleed, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Bleed as="header" shadow="md" p="5" textAlign="center">
      <Text
        fontSize="5xl"
        fontWeight="extrabold"
        color="black"
        letterSpacing="wide"
      >
        DioBank
      </Text>
    </Bleed>
  );
}

export default Header;
