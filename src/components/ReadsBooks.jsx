import { useBookContext } from "../contexts/BookContext";


const ReadsBooks = () => {
    const { getBookById, selectedBook, loading, handelBookid, } = useBookContext();
    console.log(getBookById,selectedBook,loading,handelBookid);
    

    return (
        <div>
            <h1>read the book:{handelBookid}</h1>
        </div>
    );
};

export default ReadsBooks;