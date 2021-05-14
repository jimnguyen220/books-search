import React from "react";
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron"
import Search from "./Search"


function Main() {

    return (
        <>
            <Row />
            <Jumbotron>
                <Search />
                {/* <Card
                        id={book.id}
                        title={book.volumeInfo.title}
                        // authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        // img={book.volumeInfo.imageLinks.thumbnail}
                        link={book.volumeInfo.previewLink}
                    /> */}


            </Jumbotron>

        </>
    )
}



export default Main;