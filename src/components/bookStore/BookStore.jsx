import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "../book/Book";
import SpinnerLoader from "../spinnerLoader/SpinnerLoader";

const BookStore = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <SpinnerLoader />;
  }
  console.log(navigation.state);
  const { books } = useLoaderData();
  return (
    <div className="container-wrapper">
      <div className="grid gap-4 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookStore;
