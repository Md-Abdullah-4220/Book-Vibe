import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { useBookContext } from "../contexts/BookContext";

const PagesToRead = () => {
  const { readBooks } = useBookContext();



  if (readBooks.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Your Reading Chart
        </h2>
        <p className="text-gray-600">
          You haven't added any books to your reading yet.
        </p>
      </div>
    );
  }


  const chartData = readBooks.map(book => ({
    x: book.bookName,  
    y: book.totalPages || 500 
  }));
  

  return (
    <div className="p-20 md:h-1/2 md:w-1/2 place-items-center text-[20px]">
      <VictoryChart domainPadding={25} theme={VictoryTheme.clean}>
        <VictoryBar data={chartData} />
      </VictoryChart>
    </div>
  );
};

export default PagesToRead;
