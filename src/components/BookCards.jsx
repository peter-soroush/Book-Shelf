import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

import styles from "./BookCards.module.css";

function BookCards({ data, handelLikedList }) {
  const [like, setLike] = useState(false);
  const { title, author, image, language, pages } = data;

  const LikeHandeller = () => {
    setLike((like) => !like);
    handelLikedList(data, like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} Pages</span>
        </div>
      </div>
      <button onClick={LikeHandeller}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCards;
