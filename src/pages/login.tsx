import { Card, Flex } from "@mantine/core";
import AuthForm from "../components/auth-form";
import ColorSchemeToggleButton from "../components/colorscheme-toggle-btn";

export default function LoginPage() {
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
        <Card shadow="sm" p="lg" withBorder w={500}>
          <AuthForm type="login" />
        </Card>
      </Flex>
    </>
  );
}
