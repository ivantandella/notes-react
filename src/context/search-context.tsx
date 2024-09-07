import { createContext, useState } from "react";

export const SearchContext = createContext({
  search: "",
  setSearch: (search: string) => {},
});

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
