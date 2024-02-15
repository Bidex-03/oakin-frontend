import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateName, updateMail } from "../slices/userSlice";
import image from "../assets/slider-5.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username && !mail) return;
    dispatch(updateName(username));
    dispatch(updateMail(mail));
    navigate("/app/home");
  }

  return (
    <main className="flex flex-col md:flex-row">
      <section className="group relative basis-1/2">
        <img src={image} alt="Image" className="h-screen w-full object-cover" />
        <span className="absolute bottom-0 flex h-full w-full bg-black/20 md:bg-black/50 pl-10 pt-10 md:opacity-100 md:backdrop-blur-sm">
          <h2 className="afterglow text-5xl text-[#fff] md:text-white md:text-8xl">Oakin</h2>
        </span>
      </section>

      <section className="absolute inset-0 mx-10 my-[20%] flex basis-1/2 items-center justify-center bg-white/40 rounded-md backdrop-blur-sm md:static md:m-0 md:py-0 md:backdrop-blur-0">
        <div className="w-[90%] md:w-[60%]">
          <div className="text-[#333]">
            <h2 className="text-2xl font-medium md:text-5xl">Welcome back!</h2>
            <h3 className="text-xl font-medium md:text-4xl">
              Login to continue
            </h3>
          </div>

          {/* LOGIN FORM FIELD */}
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-sm p-7 text-2xl outline-none drop-shadow-md"
              />
              {/* <p className="mt-1 font-mono text-xl text-[#ee0000]">
              Please provide a valid name.
            </p> */}
            </div>

            <div className="mt-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-full rounded-sm p-7 text-2xl outline-none drop-shadow-md"
              />
              {/* <p className="mt-1 font-mono text-xl text-[#ee0000]">
              Please provide a valid email address.
            </p> */}
            </div>

            {/* <div className="mt-8">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded-sm p-7 text-2xl outline-none drop-shadow-md"
            />
            <p className="mt-1 font-mono text-xl text-[#ee0000]">
              Please provide a valid password.
            </p>
          </div> */}

            <button
              className="mt-8 w-full rounded-sm bg-[#333] py-6 text-4xl text-white"
              // disabled
            >
              Log in
            </button>
          </form>

          {/* FORGOT PASSWORD? ET DON'T HAVE AN ACCOUNT? */}
          <div className="flex cursor-pointer justify-between text-lg underline text-[#333]">
            {/* <Link to="/signup">Don't have an account?</Link> */}

            <Link to="/">Forgot password?</Link>
          </div>

          {/* GOOGLE LOGIN */}
          <p className="mt-10 text-center text-4xl">Or</p>
          <button className="mt-4 w-full border border-[#333] py-6 text-2xl text-[#333]">
            Login with Google
          </button>
        </div>
      </section>
    </main>
  );
};

export default Login;
