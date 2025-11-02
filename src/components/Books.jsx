import React, { useState } from "react";

import { books } from "../constants/mockData";
import BookCards from "./BookCards";
import SideCard from "./SideCard";
import style from "./Books.module.css";

function Books() {
  const [liked, setliked] = useState([]);

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
  return (
    <>
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
