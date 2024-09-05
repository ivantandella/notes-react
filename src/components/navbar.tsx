import { Button, Flex, Text, Title } from "@mantine/core";
import { useAuth } from "../hooks/use-auth";
import { DANGER_COLOR, PRIMARY_COLOR } from "../utils/constant";
import PowerIcon from "./icons/power-icon";

export default function Navbar() {
  const { handleLogout } = useAuth();
  return (
    <Flex
      direction="row"
      justify={"space-between"}
      align={"center"}
      w={"100vw"}
      p={"lg"}
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <Title style={{ color: "white" }}>Notes</Title>
      <Flex direction={"row"} gap={"md"} align={"center"}>
        <Text style={{ color: "white" }} fw={600} size={"lg"}>
          {/* Hi, How are you? */}
        </Text>
        <Button color={DANGER_COLOR} onClick={handleLogout}>
          <PowerIcon />
        </Button>
      </Flex>
    </Flex>
  );
}
