import imge from "../assets/7259813.png"

const Home = () => {
    return (
        <div className="px-6 md:px-16 py-4 ">
            <div className="bg-gray-200 p-10 flex justify-center items-center h-[680px] rounded-2xl">
                <div className="font-bodydisplay flex flex-col gap-5 p-10 justify-center items-center text-left h-full">
                    <div>
                    <h1 className="text-6xl font-bold max-w-2xl mb-10">Books to freshen up your bookshelf</h1>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm md:text-base">View The List</button>
                    </div>
                </div>
                <div>
                    <img src={imge} alt="cover img" />
                </div>
            </div>
        </div>
    );
};

export default Home;