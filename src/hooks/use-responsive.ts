import { useMediaQuery } from "@mantine/hooks";

export function useResponsive() {
  const lgScreen = useMediaQuery("(min-width: 500px)");
  const mdScreen = useMediaQuery("(max-width: 640px)");
  const authWidth = lgScreen ? 500 : 300;
  const inputWidth = lgScreen ? 300 : 250;

  return { lgScreen, mdScreen, authWidth, inputWidth };
}
