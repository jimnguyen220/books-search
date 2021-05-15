import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Card from "../components/Card"

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState()



  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        // console.log(res.data) 
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function saveBook(book) {
    console.log(book)
    // API.saveBook(id)
    //   .then(res => loadBooks())
    //   .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearch({ [name]: value })
  };



  // Searches for a new book with google books search API
  function handleFormSubmit(event) {
    event.preventDefault();
    if (search.search) {
      API.newBook(search.search)
        .then(res =>
          setBooks(res.data.items)
        )
        .catch(err => console.log(err))
    };

  };

  return (
    <>
      <Row>
        <Col>
          <form>
            <Input
              onChange={handleInputChange}
              name="search"
              placeholder="Search by Title or Author(s)"
            />
            <FormBtn
              onClick={handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
        </Col>
      </Row>

      {books ? (
        <Container>
          {books.map(book => (
            // console.log(book)
            <>
            <Card
             id={book.id}
             title={book.volumeInfo.title}
             authors={book.volumeInfo.authors}
             description={book.volumeInfo.description}
             image={book.volumeInfo.imageLinks.thumbnail}
             link={book.volumeInfo.previewLink}
            />
             {/* <Link to={"/books/" + book.id}> */}
             {/* <SaveBtn onClick={saveBook(book)} /> */}
             {/* </Link> */}
             {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
            </>
          ))}
        </Container>
      ) : (
        <Container fluid>
          <h3>Your results will display here</h3>
        </Container>
      )}

    </>
  );
}


export default Books;
