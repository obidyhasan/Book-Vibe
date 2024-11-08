import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBook from "./ReadBook";
import { getItemFromLocalStorage } from "../utilities/utilities";
import Book from "./Book";
import { useLoaderData } from "react-router-dom";

const ListBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortBy, setSortBy] = useState("Sort By");

  useEffect(() => {
    const getIds = getItemFromLocalStorage("read-book");
    const readBookList = books.filter((book) => getIds.includes(book.bookId));
    setReadBooks(readBookList);
  }, []);

  useEffect(() => {
    const wishlistIds = getItemFromLocalStorage("wishlist-book");
    const wishListBookList = books.filter((book) =>
      wishlistIds.includes(book.bookId)
    );
    setWishlistBooks(wishListBookList);
  }, []);

  function handelSortByRating() {
    setSortBy("Sort by Rating");

    readBooks.sort((a, b) => b.rating - a.rating);
    wishlistBooks.sort((a, b) => b.rating - a.rating);
  }

  function handelSortByPagesNo() {
    setSortBy("Sort by Pages No");

    readBooks.sort((a, b) => b.totalPages - a.totalPages);
    wishlistBooks.sort((a, b) => b.totalPages - a.totalPages);
  }

  function handelSortByPublisherYear() {
    setSortBy("Sort by Publisher Year");

    readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    wishlistBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }

  return (
    <div>
      <div className="bg-gray-100 rounded-md text-center p-5 font-bold text-2xl">
        <h2>Books</h2>
      </div>
      <div className="text-center">
        <div className="dropdown my-5">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 rounded bg-primary-color text-white hover:bg-black"
          >
            {sortBy}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={handelSortByRating}>
              <a>Rating</a>
            </li>
            <li onClick={handelSortByPagesNo}>
              <a>Number of pages</a>
            </li>
            <li onClick={handelSortByPublisherYear}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Tabs className={"text-gray-500"}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-black">
              {readBooks.map((book, idx) => (
                <Book key={idx} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-black">
              {wishlistBooks.map((book, idx) => (
                <Book key={idx} book={book}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListBooks;
