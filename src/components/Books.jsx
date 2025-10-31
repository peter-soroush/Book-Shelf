import React from "react";
import { books } from "../constants/mockData";
import BookCards from "./BookCards";
function Books() {
  return (
    <>
      <h1>Books</h1>

      {books.map((book) => (
        <BookCards key={book.id} data={book} />
      ))}
    </>
  );
}

export default Books;
