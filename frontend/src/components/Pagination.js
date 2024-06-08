import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Pagination = ({ currentPage, totalPages, getFilterUrl }) => {
  return (
    <div>
      {/* Generate buttons for each page */}
      {[...Array(totalPages).keys()].map((page) => (
        <LinkContainer
          key={page + 1}
          className='mx-1'
          to={getFilterUrl({ page: page + 1 })}
        >
          <Button
            className={currentPage === page + 1 ? 'text-bold' : ''}
            variant='light'
          >
            {page + 1} {/* Display page number on the button */}
          </Button>
        </LinkContainer>
      ))}
    </div>
  );
};

export default Pagination;
