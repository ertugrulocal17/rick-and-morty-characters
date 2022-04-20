import { useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { GET_PAGE } from './queries';

function Pagination() {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, data, error } = useQuery(GET_PAGE, {
    variables: {
      page: pageNumber,
    },
  });
  const pageChange = () => {
    pageNumber++;
  };
  console.log(data);
  return (
    <div>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Previous"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageCount={5}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </div>
  );
}

export default Pagination;
