import React, { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(10);
    const [pageLimit, setPageLimit] = useState(2);
    // const totalPage = 50; // Example with 100 pages
    // const pageLimit = 5; // Number of page buttons to show
    //   const totalPage = 50; // Example with 100 pages
    //   const pageLimit = 5; // Number of page buttons to show

    // Function to calculate the page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const halfPageLimit = Math.floor(pageLimit / 2);

        let startPage = Math.max(1, currentPage - halfPageLimit);
        let endPage = Math.min(totalPage, currentPage + halfPageLimit);

        if (currentPage - halfPageLimit <= 0) {
            endPage = Math.min(totalPage, pageLimit);
        }

        if (currentPage + halfPageLimit > totalPage) {
            startPage = Math.max(1, totalPage - pageLimit + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageNumbers();

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Add your logic to handle page change here (e.g., fetch new data)
    };

    return (
        <div>
            <p className="p-10 text-4xl text-center">{currentPage}</p>

            <div className="flex justify-center mt-[30px]">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="bg-gray-800 text-white p-2 rounded-full"
                    disabled={currentPage === 1}
                >
                    Pre
                </button>

                <div className="text-center text-green-700 mx-2">
                    {currentPage > pageLimit / 2 && (
                        <>
                            <button
                                className="p-2 border-2 rounded-xl"
                                onClick={() => handlePageClick(1)}
                            >
                                1
                            </button>
                            <span className="mx-2 text-red-700">...</span>
                        </>
                    )}

                    {pages.map((page) => (
                        <button
                            key={page}
                            className="p-2 border-2 rounded-xl"
                            onClick={() => handlePageClick(page)}
                            style={{
                                margin: "0 5px",
                                backgroundColor: currentPage === page ? "green" : "white",
                                color: currentPage === page ? "white" : "black",
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    {currentPage < totalPage - Math.floor(pageLimit / 2) && (
                        <>
                            <span className="mx-2">...</span>
                            <button
                                className="p-2 border-2 rounded-xl"
                                onClick={() => handlePageClick(totalPage)}
                            >
                                {totalPage}
                            </button>
                        </>
                    )}
                </div>

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="bg-gray-800 text-white p-2 rounded-full"
                    disabled={currentPage === totalPage}
                >
                    Next
                </button>
            </div>


            <div className="text-center my-5 space-y-2 font-semibold">
                <p>Total Page: <input onChange={(e) => setTotalPage(e.target.value)} className="h-10 w-20 border" type="number" />  </p>
                <p>Page Limit: <input onChange={(e) => setPageLimit(e.target.value)} className="h-10 w-20 border" type="number" />  </p>
            </div>
        </div>
    );
};

export default Pagination;
