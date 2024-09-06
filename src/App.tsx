import { Button, Flex } from "@mantine/core";
import "@mantine/core/styles.css";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATH, NOTES_PATH } from "./utils/constant";
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(NOTES_PATH);
  });

  return (
    <Flex h={"100vh"} w={"100vw"} justify={"center"} align={"center"}>
      <Link to={LOGIN_PATH}>
        <Button>Login</Button>
      </Link>
    </Flex>
  );
}
