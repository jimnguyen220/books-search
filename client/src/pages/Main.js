import React, { useState, useEffect } from "react";
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API"
import Card from "../components/card"



function Main() {

    const [search, setSearch] = useState("Harry Potter");
    const [booksState, setBooksState] = useState();


    useEffect(() => {
        API.getBook(search)
        .then(res => {
            console.log(res.data.items[0].volumeInfo)
            setBooksState(res.data.items[0].volumeInfo);
        })
    }, [search])

    console.log(booksState)
    return (

        <>
            <Row />
            <Jumbotron>
                 
            {/* {((booksState).map((books)=>{
                console.log(books)
            }))} */}
            {/* <Card
                title={booksState.title}
                authors={booksState.authors}
                description={booksState.description}
                img={booksState.imageLinks}
                link={booksState.previewLink}
            /> */}
            </Jumbotron>

        </>
    )
}

export default Main;