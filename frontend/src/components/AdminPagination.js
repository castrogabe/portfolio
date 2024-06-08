import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminPagination = ({
  currentPage,
  totalPages,
  isAdmin = true,
  keyword = '',
}) => {
  return (
    <div>
      {[...Array(totalPages).keys()].map((x) => (
        <LinkContainer
          key={x + 1}
          className='mx-1'
          to={{
            pathname:
              isAdmin && keyword === ''
                ? `/admin/products`
                : !isAdmin && keyword === ''
                ? `/products`
                : isAdmin && keyword === 'OrderList'
                ? `/admin/orders`
                : !isAdmin && keyword === 'OrderList'
                ? `/orders`
                : isAdmin && keyword === 'UserList'
                ? `/admin/users`
                : !isAdmin && keyword === 'UserList'
                ? `/users`
                : isAdmin && keyword === 'Messages'
                ? `/admin/messages`
                : !isAdmin && keyword === 'Messages'
                ? `/messages`
                : '/',
            search: `?page=${x + 1}`,
          }}
        >
          <Button
            className={currentPage === x + 1 ? 'text-bold' : ''}
            variant='light'
          >
            {x + 1}
          </Button>
        </LinkContainer>
      ))}
    </div>
  );
};

export default AdminPagination;
