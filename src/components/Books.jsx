import React, { useState } from "react";

import { books as bookData } from "../constants/mockData";
import BookCards from "./BookCards";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";
import style from "./Books.module.css";

function Books() {
  const [liked, setliked] = useState([]);
  const [search, setSearch] = useState([]);
  const [books, setBook] = useState(bookData);

  const handelLikedList = (book, status) => {
    console.log({ book, status });

    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setliked(newLikedList);
    } else {
      setliked([...liked, book]);
    }
    console.log({ liked });
  };

  const searchHandeler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBook(newBooks);
    } else {
      setBook(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandeler={searchHandeler}
      />
      <div className={style.container}>
        <div className={style.cards}>
          {books.map((book) => (
            <BookCards
              key={book.id}
              data={book}
              handelLikedList={handelLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={style.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
