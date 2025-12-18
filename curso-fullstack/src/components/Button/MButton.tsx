import { Button } from "@chakra-ui/react";
import type { MouseEventHandler } from "react";

interface IDButtonProps {
  title: string;
  onClick: MouseEventHandler; // Define o tipo correto para onClick
}
export function MButton({ title, onClick }: IDButtonProps) {
  return (
    <Button
      onClick={onClick}
      mt="10"
      width="100%"
      color="white"
      bg="gray.800"
      _hover={{ bg: "gray.700" }}
    >
      {title}
    </Button>
  );
}
