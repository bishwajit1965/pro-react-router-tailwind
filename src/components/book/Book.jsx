import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { isbn13, title, subtitle, image, price } = book;
  return (
    <Link to={`/bookDetails/${isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl ">
        <img src={image} alt="book-image" className="w-full " />
        <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
          <h2 className="mt-auto">{price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Book;
