import React, { useState, useEffect } from "react";
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron"
import API from "../utils/API"


function Main() {

    const [booksState, setBooksState] = useState({
        _id: "",
        authors: "",
        description: "",
        image: "",
        link: "",
        title: "",
    })

    



    useEffect((search) => {
        API.getBook(search)
        .then((res) => {
            console.log(res)
            // setBooksState(res);
            // console.log("booksState: " + booksState);
        })
    }, [])

    return (
        <>
            <Row />
            <Jumbotron>

            </Jumbotron>

        </>
    )
}

export default Main;