import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginate = ({ pages, page, onClickPaginationHandler }) => {
    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => {
                    const index = x + 1;
                    return (
                        <Pagination.Item
                            key={index}
                            active={index === page}
                            onClick={() => onClickPaginationHandler(index)}>
                            {index}
                        </Pagination.Item>
                    );
                })}
            </Pagination>
        )
    );
};

export default Paginate;
