import React, {useState, useEffect} from "react";
import API from "../utils/API"
import Card from "../components/card"

function Search() {
    const [booksState, setBooksState] = useState()
    const [search, setSearch] = useState("Harry Potter")



    useEffect(() => {
        API.getBook(search)
            .then((res) => {
                console.log(res.data.items);
                setBooksState(res.data.items);
                // console.log("booksState: " + booksState);
            })
    }, []);

    console.log(booksState);

    return (
        <Card></Card>
    )


}

export default Search;