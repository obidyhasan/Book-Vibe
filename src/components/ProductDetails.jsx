import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addItemToLocalStorage, checkIsExits } from "../utilities/utilities";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = () => {
  let books = useLoaderData();
  const { productId } = useParams();

  if (!Array.isArray(books)) {
    books = [];
  }

  let book = books.find((product) => product.bookId === parseInt(productId));

  if (!book) {
    return <p>Book not found.</p>;
  }

  const {
    bookId,
    bookName,
    author,
    rating,
    category,
    tags,
    image,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  function showSuccessToast(message) {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function showErrorToast(message) {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function handelReadBook(id) {
    if (checkIsExits(id, "read-book")) {
      showErrorToast(`${bookName} already read!`);
    } else {
      addItemToLocalStorage(id, "read-book");
      showSuccessToast(`${bookName} read done!`);
    }
  }

  function handelWishlistBook(id) {
    if (checkIsExits(id, "wishlist-book")) {
      showErrorToast(`${bookName} already in wishlist`);
    } else {
      addItemToLocalStorage(id, "wishlist-book");
      showSuccessToast(`${bookName} add to wishlist`);
    }
  }

  return (
    <div>
      <div className="flex gap-5 md:flex-row flex-col my-6">
        <div className="w-full md:w-2/5 bg-gray-100 p-20 rounded-md flex items-center justify-center">
          <figure>
            <img src={image} className="" alt="" />
          </figure>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col justify-center h-full">
            <h2 className="font-bold playfair text-3xl">{bookName}</h2>
            <p className=" text-gray-500 text-lg my-3">By: {author}</p>
            <hr />
            <p className="my-2 font-medium">{category}</p>
            <hr />
            <p className="my-4">
              <span className="font-bold">Review: </span> {review}
            </p>
            <div className="flex gap-5 items-center">
              <p className="font-medium">Tag</p>
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag, idx) => (
                  <h4
                    key={idx}
                    className="bg-green-50 px-3 py-1 rounded-full text-green-500 font-medium text-sm"
                  >
                    {tag}
                  </h4>
                ))}
              </div>
            </div>
            <div className="border my-4"></div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <p className="w-36 text-gray-600">Number of Pages:</p>
                <p className="font-medium">{totalPages}</p>
              </div>

              <div className="flex gap-4">
                <p className="w-36 text-gray-600">Publisher:</p>
                <p className="font-medium">{publisher}</p>
              </div>

              <div className="flex gap-4">
                <p className="w-36 text-gray-600">Year of Publishing:</p>
                <p className="font-medium">{yearOfPublishing}</p>
              </div>

              <div className="flex gap-4">
                <p className="w-36 text-gray-600">Rating:</p>
                <p className="font-medium">{rating}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handelReadBook(bookId)}
                className="btn btn-outline border-gray-400 rounded-md"
              >
                Read
              </button>
              <button
                onClick={() => handelWishlistBook(bookId)}
                className="btn rounded-md bg-secondary-color text-white hover:bg-black"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
