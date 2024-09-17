import { Card, Flex } from "@mantine/core";
import AuthForm from "../components/auth-form";
import ColorSchemeToggleButton from "../components/colorscheme-toggle-btn";
import { useResponsive } from "../hooks/use-responsive";

export default function RegisterPage() {
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
        mih={"100vh"}
        py={10}
      >
        <Card shadow="sm" p="lg" withBorder w={authWidth}>
          <AuthForm type="register" />
        </Card>
      </Flex>
    </>
  );
}
