import { Card, Flex } from "@mantine/core";
import AuthForm from "../components/auth-form";

export default function RegisterPage() {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} h={"100vh"}>
      <Card shadow="sm" p="lg" withBorder w={500}>
        <AuthForm type="register" />
      </Card>
    </Flex>
  );
}
