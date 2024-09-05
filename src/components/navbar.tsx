import { Button, Flex, Text, Title } from "@mantine/core";
import { useAuth } from "../hooks/use-auth";
import { PRIMARY_COLOR } from "../utils/constant";
import PowerIcon from "./icons/power-icon";
import { useEffect } from "react";

export default function Navbar() {
  const { name, handleLogout, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Flex
      direction="row"
      justify={"space-between"}
      align={"center"}
      w={"100%"}
      p={"lg"}
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <Title style={{ color: "white" }}>Notes App</Title>
      <Flex direction={"row"} gap={"md"} align={"center"}>
        <Text style={{ color: "white" }} fw={600} size={"lg"}>
          Hi, {name}
        </Text>
        <Button color="black" onClick={handleLogout}>
          <PowerIcon />
        </Button>
      </Flex>
    </Flex>
  );
}
