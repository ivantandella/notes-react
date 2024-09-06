import {
  Button,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { LOGIN_PATH, PRIMARY_COLOR, REGISTER_PATH } from "../utils/constant";
import { useAuth } from "../hooks/use-auth";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { AuthDataType } from "../services/auth.service";

type AuthFormProps = {
  type: "login" | "register";
};

export default function AuthForm(props: AuthFormProps) {
  const { type } = props;
  const isLogin = type === "login";
  const { isLoading, executeLogin, executeRegister } = useAuth();

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const registerSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const schema = isLogin ? loginSchema : registerSchema;

  const data = isLogin
    ? {
        email: "",
        password: "",
      }
    : {
        name: "",
        email: "",
        password: "",
      };

  const form = useForm({
    initialValues: data,
    validate: yupResolver(schema),
  });

  function handleSubmitAuth(values: AuthDataType) {
    isLogin ? executeLogin(values) : executeRegister(values);
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmitAuth(values))}>
      <Flex direction={"column"} justify={"center"} align={"center"} gap={"md"}>
        <Title order={1}>{isLogin ? "Login" : "Register"}</Title>
        <Text size="lg" mb={20}>
          {isLogin ? "Welcome to Notes!" : "Create your account"}
        </Text>
        {!isLogin && (
          <TextInput
            w={300}
            size="md"
            radius="md"
            label="Name"
            placeholder="Your Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        )}
        <TextInput
          w={300}
          size="md"
          radius="md"
          label="Email"
          placeholder="example@mail.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          w={300}
          size="md"
          radius="md"
          label="Password"
          placeholder="******"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />
        <Button
          loading={isLoading}
          variant="filled"
          my={20}
          fullWidth
          color={PRIMARY_COLOR}
          type="submit"
        >
          {isLogin ? "Login" : "Register"}
        </Button>
        <Text size="md">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Link to={isLogin ? REGISTER_PATH : LOGIN_PATH}>
            <b>{isLogin ? "Register" : "Login"}</b>
          </Link>{" "}
        </Text>
      </Flex>
    </form>
  );
}
