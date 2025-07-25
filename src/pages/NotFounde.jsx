import { useNavigate } from "react-router-dom";


const NotFounde = () => {
    const navegate = useNavigate()
    return (
        <div>
            <div className="h-[666px] flex justify-center items-center flex-col text-center gap-5 ">
            <h1 className="text-center font-bold"><span className="text-red-600 font-extrabold items-center text-2xl">404</span> | The page not found</h1>
            <button onClick={() => navegate('/')} className="p-4 bg-yellow-400 rounded-2xl cursor-pointer font-medium">Go to home page </button>
        </div>
        </div>
    );
};

export default NotFounde;