import { useNavigate, useRouteError } from "react-router-dom";

import meme from "../assets/404_meme.jpg";

function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="-left-2/4 top-2/4 flex h-screen bg-black/20">
      <div className="m-auto flex w-[50%] flex-col items-center justify-center rounded-[2rem] bg-slate-200 py-6">
        <img src={meme} alt="Oga Sabinus" className="h-fit w-72" />
        <h1 className="mt-6 text-4xl font-semibold">Something went wrong 😢</h1>
        <p className="text-2xl font-medium w-[80%] text-center">
          {error.data || error.message}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="my-4 rounded-full bg-black/70 px-8 py-4 text-lg text-white hover:bg-black/60"
        >
          Go back
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default NotFound;
