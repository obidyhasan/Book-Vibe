import { FaRegStar } from "react-icons/fa6";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, rating, category, tags, image } = book;

  return (
    <Link to={`/productDetail/${bookId}`}>
      <div className="border rounded-md p-4  flex flex-col gap-3">
        <div className="space-y-3 flex-1">
          <figure>
            <img
              src={image}
              className="bg-gray-100 w-full h-[200px] object-contain rounded-lg py-8"
              alt=""
            />
          </figure>
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

          <h1 className="font-bold text-2xl playfair">{bookName}</h1>
          <p className="font-medium">By: {author}</p>
        </div>
        <div className="space-y-3">
          <div className="border-t-2 border-dashed"></div>
          <div className="flex gap-5 justify-between items-center">
            <p className="font-medium">{category}</p>
            <div className="flex items-center gap-2">
              <p className="font-medium">{rating}</p>
              <FaRegStar className="text-lg text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
