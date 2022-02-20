import React from "react";

const SearchContext = React.createContext({});
export function SearchProvider(props) {
    const [search, setSearch] = React.useState("");
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
};
export function useSearch(){
    const { search, setSearch } = React.useContext(SearchContext);
    return { search, setSearch }
}