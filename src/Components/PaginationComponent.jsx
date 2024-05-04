import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <Pagination className='justify-content-center'>
      {Array.from({ length: totalPages }, (_, i) => (
        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => handlePageChange(i + 1)}>
          {i + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
