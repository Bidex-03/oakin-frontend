import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

// const user = "https://i.pravatar.cc/48?u=933372";

const Account = () => {
  const name = useSelector((state) => state.user.username);
  const mail = useSelector((state) => state.user.mail);

  return (
    <main className="p-8">
      <section className="flex flex-col md:flex-row">
        {/* USER IMAGE */}
        <div className="flex h-[35rem] basis-1/2 justify-center">
          <img src={user} alt="User" className="h-full rounded-full" />
        </div>
        {/* USERNAME AND USER MAIL */}
        <div className="mt-5 flex w-full flex-col justify-between text-[#333] md:mt-0 md:flex-row md:items-center">
          <span>
            <h3 className="text-4xl font-medium capitalize md:text-8xl">
              {name ? name : "Testing"}
            </h3>
            <p className="text-4xl lowercase">
              {mail ? mail : "anonymous@gmail.com"}
            </p>
          </span>
          <button className="mt-4 rounded-md border border-[#333] px-[6rem] py-[2rem] text-3xl font-medium md:mt-0">
            Edit Profile
          </button>
        </div>
      </section>

      {/* OTHER LINKS */}
      <section className="mt-10">
        <span className="flex items-center gap-5 border-b border-t py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <IoMdNotifications className="text-[100%]" />
          <p>Notification</p>
        </span>

        <span className="flex items-center gap-5 border-b py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <IoMdSettings className="text-[100%]" />
          <p>Settings</p>
        </span>

        <span className="flex items-center gap-5 border-b py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <BiSupport className="text-[100%]" />
          <p>Help & Support</p>
        </span>

        <span className="flex items-center gap-5 border-b py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <FaLock className="text-[100%]" />
          <p>Privacy & Security</p>
        </span>

        <span className="flex items-center gap-5 border-b py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <FaUsers className="text-[100%]" />
          <p>Accounts</p>
        </span>

        <span className="flex items-center gap-5 border-b py-7 text-3xl font-medium md:py-10 md:text-5xl">
          <FiLogOut className="text-[100%]" />
          <p>Log Out</p>
        </span>
      </section>
    </main>
  );
};

export default Account;

// https://i.pravatar.cc/48?u=933372    933372 === random number
