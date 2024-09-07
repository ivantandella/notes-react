import { createContext, ReactNode, useState } from "react";

export const ReloadContext = createContext({
  reload: 0,
  setReload: (_: number) => {},
});

export default function ReloadContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reload, setReload] = useState(0);
  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      {children}
    </ReloadContext.Provider>
  );
}
