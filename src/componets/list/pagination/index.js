import './index.css';

const Pagination = (props) => {
    const { handlePaginationClick, page } = props;
    return (
        <div className="Pagination">
           <button
                disabled={page === 1}
                onClick={() => handlePaginationClick('prev')}
                className="Pagination-button"
           >
                &larr;
            </button> 

            <span className="Pagination-info">
                Page <b>{page}</b>
            </span>

            <button
                onClick={() => handlePaginationClick('next')}
                className="Pagination-button"
            >
                &rarr;
            </button> 
        </div>
    )
};

export default Pagination;