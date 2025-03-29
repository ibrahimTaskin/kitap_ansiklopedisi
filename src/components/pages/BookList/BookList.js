import React, { useState } from "react";
import { BookSummary } from "./BookSummary";
import InfiniteScroll from "react-infinite-scroll-component";

export const BookList = ({ books }) => {
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  React.useEffect(() => {
    if (books?.length > 0) {
      const sortedBooks = [...books].sort((a, b) => {
        const dateA = a.datetime?.toDate ? a.datetime.toDate() : new Date(a.datetime);
        const dateB = b.datetime?.toDate ? b.datetime.toDate() : new Date(b.datetime);
        return dateB - dateA;
      });
      
      setDisplayedBooks(sortedBooks.slice(0, 10));
      setHasMore(sortedBooks.length > 10);
    }
  }, [books]);

  const fetchMoreData = () => {
    if (books?.length > displayedBooks.length) {
      const sortedBooks = [...books].sort((a, b) => {
        const dateA = a.datetime?.toDate ? a.datetime.toDate() : new Date(a.datetime);
        const dateB = b.datetime?.toDate ? b.datetime.toDate() : new Date(b.datetime);
        return dateB - dateA;
      });
      
      const nextBooks = sortedBooks.slice(displayedBooks.length, displayedBooks.length + 10);
      setDisplayedBooks([...displayedBooks, ...nextBooks]);
      setHasMore(displayedBooks.length + 10 < sortedBooks.length);
    }
  };

  return (
    <InfiniteScroll
      dataLength={displayedBooks.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4 className="text-center py-4">Yükleniyor...</h4>}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-8">
        {displayedBooks?.length > 0 ? (
          displayedBooks.map((book) => (
            <BookSummary key={book?.id} book={book} />
          ))
        ) : (
          <h5>Yükleniyor</h5>
        )}
      </div>
    </InfiniteScroll>
  );
};
