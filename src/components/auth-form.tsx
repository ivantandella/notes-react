import {
  Button,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  login,
  LoginDataType,
  register,
  RegisterDataType,
} from "../services/auth.service";
import {
  LOGIN_PATH,
  NOTES_PATH,
  PRIMARY_COLOR,
  REGISTER_PATH,
} from "../utils/constant";
import { useAuth } from "../hooks/use-auth";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm(props: AuthFormProps) {
  const { type } = props;
  const { isLoading, executeLogin, executeRegister } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitAuth(e: any) {
    e.preventDefault();

    if (type === "login") {
      // login logic
      const data = {
        email: email,
        password: password,
      };
      executeLogin(data);
    } else {
      // register logic
      const data = {
        name: name,
        email: email,
        password: password,
      };
      executeRegister(data);
    }
  }

  return (
    <form onSubmit={handleSubmitAuth}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <TextInput
          w={300}
          my={20}
          size="md"
          radius="md"
          label="Email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          w={300}
          my={20}
          size="md"
          radius="md"
          label="Password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          loading={isLoading}
          variant="filled"
          my={20}
          fullWidth
          color={PRIMARY_COLOR}
          type="submit"
        >
          {type === "login" ? "Login" : "Register"}
        </Button>
        <Text size="md">
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link to={type === "login" ? REGISTER_PATH : LOGIN_PATH}>
            <b style={{ color: "black" }}>
              {type === "login" ? "Register" : "Login"}
            </b>
          </Link>{" "}
        </Text>
      </Flex>
    </form>
  );
}
