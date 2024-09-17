import { Button, Flex, Menu, Text, Title } from "@mantine/core";
import { useAuth } from "../hooks/use-auth";
import { PRIMARY_COLOR } from "../utils/constant";
import PowerIcon from "./icons/power-icon";
import { useEffect } from "react";
import { modals } from "@mantine/modals";
import ColorSchemeToggleButton from "./colorscheme-toggle-btn";
import { useResponsive } from "../hooks/use-responsive";
import ArrowDownIcon from "./icons/arrow-down-icon";

export default function Navbar() {
  const { name, handleLogout, getUserData } = useAuth();
  const { lgScreen } = useResponsive();

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
      bg={PRIMARY_COLOR}
    >
      <Flex direction={"row"} gap={"md"} justify={"center"} align={"center"}>
        <Title c={"white"}>Notes App</Title>
      </Flex>
      <Flex direction={"row"} gap={"md"} align={"center"}>
        <Text c={"white"} fw={600} size={"lg"}>
          Hi, {name}
        </Text>
        {lgScreen ? (
          <>
            <ColorSchemeToggleButton />
            <Button size="xs" color="black" onClick={openLogoutModal}>
              <PowerIcon />
            </Button>
          </>
        ) : (
          <Menu shadow="md" width={100}>
            <Menu.Target>
              <Button size="xs" variant="transparent" color="white" ms={-20}>
                <ArrowDownIcon />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item>
                <ColorSchemeToggleButton />
              </Menu.Item>
              <Menu.Item>
                <Button size="xs" color="red" onClick={openLogoutModal}>
                  <PowerIcon />
                </Button>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
}
