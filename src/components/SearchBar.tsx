import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from ".";

export const SearchBar = () => {
    const { searchPlacesByQuery } = useContext(PlacesContext)
    const debounce = useRef<NodeJS.Timeout>(null);

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        if (debounce.current) {
            clearTimeout(debounce.current);
        }
        debounce.current = setTimeout(() => {
            searchPlacesByQuery(query);
        }, 450);
    
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="form-control"
                placeholder="Search place..." 
                onChange={onQueryChange}
                />

            <SearchResults />

        </div>
    );
}