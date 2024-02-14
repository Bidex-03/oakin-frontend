import image from "../assets/slider-5.jpg";

const Signup = () => {
  return (
    <main className="flex flex-col md:flex-row">
      <section className="group relative basis-1/2">
        <img src={image} alt="Image" className="h-screen w-full object-cover" />
        <span className="absolute bottom-0 flex h-full w-full bg-black/50 pl-10 pt-10 opacity-100 backdrop-blur-sm">
          <h2 className="afterglow text-8xl text-white">Oakin</h2>
        </span>
      </section>

      <section className="flex basis-1/2 items-center justify-center py-10 md:py-0">
        <div className="w-[90%] md:w-[60%]">
          <h2 className="text-5xl font-medium">Create an Account</h2>

          {/* LOGIN FORM FIELD */}
          <form className="mt-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
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
                className="w-full rounded-sm p-7 text-2xl outline-none drop-shadow-md"
              />
              {/* <p className="mt-1 font-mono text-xl text-[#ee0000]">
          Please provide a valid email address.
        </p> */}
            </div>

            <div className="mt-8">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full rounded-sm p-7 text-2xl outline-none drop-shadow-md"
              />
              {/* <p className="mt-1 font-mono text-xl text-[#ee0000]">
          Please provide a valid password.
        </p> */}
            </div>

            <button
              disabled
              className="mt-8 w-full rounded-sm bg-[#333] py-6 text-4xl text-white"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
