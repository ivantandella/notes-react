import {
  Button,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm(props: AuthFormProps) {
  const { type } = props;
  return (
    <form action="">
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Title order={1} mb={20}>
          {type === "login" ? "Login" : "Register"}
        </Title>
        <Text size="lg" mb={20}>
          {type === "login" ? "Welcome to Notes!" : "Create your account"}
        </Text>
        {type === "register" && (
          <TextInput
            w={300}
            my={20}
            size="md"
            radius="md"
            label="Name"
            placeholder="Your Name"
          />
        )}
        <TextInput
          w={300}
          my={20}
          size="md"
          radius="md"
          label="Email"
          placeholder="example@mail.com"
        />
        <PasswordInput
          w={300}
          my={20}
          size="md"
          radius="md"
          label="Password"
          placeholder="******"
        />
        <Button variant="filled" my={20} fullWidth color="teal">
          {type === "login" ? "Login" : "Register"}
        </Button>
        <Text size="md">
          {type === "login" ? "Don't " : "Already "} have an account?{" "}
          <Link to={type === "login" ? "/register" : "/login"}>
            <b style={{ color: "black" }}>
              {type === "login" ? "Register" : "Login"}
            </b>
          </Link>{" "}
        </Text>
      </Flex>
    </form>
  );
}
