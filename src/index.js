import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [books, setBooks] = useState([])

  const fetchData = async () => {
    let response = await fetch(apiURL).then(response => response.json())

    setBooks(response)
  }

  const bookList = books.map((book, i) => {
    return (
      <div className="book" key={i}>
        <h3>Book Number {i + 1}</h3>
        <h2>{book.name}</h2>

        <div className="details">
          <p>👨: Author/Authors: {book.authors }</p>
          <p>📖: Number of pages: {book.numberOfPages }</p>
          <p>🏘️: Book Country: {book.country }</p>
          <p>⏰: Release date: {new Date(book.released).toLocaleDateString('sv') }</p>
        </div>
      </div>
    )
  })

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={() => fetchData()}>
          Fetch Data
          </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {bookList}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
