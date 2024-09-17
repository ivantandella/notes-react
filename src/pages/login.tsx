import { Card, Flex } from "@mantine/core";
import AuthForm from "../components/auth-form";
import ColorSchemeToggleButton from "../components/colorscheme-toggle-btn";
import { useMediaQuery } from "@mantine/hooks";
import { useResponsive } from "../hooks/use-responsive";

export default function LoginPage() {
  const { authWidth } = useResponsive();
  return (
    <>
      <ColorSchemeToggleButton
        styles={{ position: "absolute", top: 10, right: 10 }}
      />
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        h={"100vh"}
      >
        <Card shadow="sm" p="lg" withBorder w={authWidth}>
          <AuthForm type="login" />
        </Card>
      </Flex>
    </>
  );
}
