import { createContext, ReactNode, useState } from "react";

export const NumberContext = createContext();

export default function NumberContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [number, setNumber] = useState(0);
  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
}
