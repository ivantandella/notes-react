import { Button, useMantineColorScheme } from "@mantine/core";
import SunIcon from "./icons/sun-icon";
import MoonIcon from "./icons/moon-icon";

type ColorSchemeToggleBtnPropsType = {
  styles?: React.CSSProperties;
};

export default function ColorSchemeToggleButton(
  props: ColorSchemeToggleBtnPropsType
) {
  const { styles } = props;
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Button
      size="xs"
      color="white"
      variant="light"
      onClick={() =>
        colorScheme === "dark"
          ? setColorScheme("light")
          : setColorScheme("dark")
      }
      style={styles}
    >
      {colorScheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
