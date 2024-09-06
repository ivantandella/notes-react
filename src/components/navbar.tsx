import { Button, Flex, Text, Title } from "@mantine/core";
import { useAuth } from "../hooks/use-auth";
import { PRIMARY_COLOR } from "../utils/constant";
import PowerIcon from "./icons/power-icon";
import { useEffect } from "react";
import { modals } from "@mantine/modals";
import ColorSchemeToggleButton from "./colorscheme-toggle-btn";

export default function Navbar() {
  const { name, handleLogout, getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  function openLogoutModal() {
    modals.openConfirmModal({
      title: "Logout",
      centered: true,
      children: <Text size="sm">Are you sure you want to logout?</Text>,
      labels: { confirm: "Logout", cancel: "Cancel" },
      confirmProps: { color: "black" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        handleLogout();
      },
    });
  }

  return (
    <Flex
      direction="row"
      justify={"space-between"}
      align={"center"}
      w={"100%"}
      p={"lg"}
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <Flex direction={"row"} gap={"md"} justify={"center"} align={"center"}>
        <Title style={{ color: "white" }}>Notes App</Title>
      </Flex>
      <Flex direction={"row"} gap={"md"} align={"center"}>
        <Text style={{ color: "white" }} fw={600} size={"lg"}>
          Hi, {name}
        </Text>
        <ColorSchemeToggleButton />
        <Button size="xs" color="black" onClick={openLogoutModal}>
          <PowerIcon />
        </Button>
      </Flex>
    </Flex>
  );
}
