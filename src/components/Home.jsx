import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import banner from "../assets/banner.png";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | Book Vibe</title>
      </Helmet>
      {/* Banner Section */}
      <div className="bg-gray-100 rounded-xl flex px-5 py-10 justify-center items-center flex-col-reverse sm:flex-row gap-5">
        <div className="space-y-6">
          <h1 className="playfair text-4xl md:text-5xl font-bold max-w-lg leading-tight md:leading-tight ">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-primary-color text-white rounded-md hover:bg-black">
            View The List
          </button>
        </div>
        <figure>
          <img src={banner} alt="" />
        </figure>
      </div>

      {/* Books Section */}
      <div className="py-10">
        <h2 className="font-bold text-3xl text-center playfair mt-5 mb-10">
          Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {books.map((book, idx) => (
            <Book key={idx} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
