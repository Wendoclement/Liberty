import { LuBookmark } from "react-icons/lu";
import XSvg from "../../components/svgs/X";
import { TbBell, TbMessage } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className="my-2">
      <div className="navbar flex justify-between bg-containers rounded-xl">
        <div className="">
          <div className="flex flex-row ms-4 gap-3">
            <div className="">
              <XSvg className="w-6 fill-indigo-400" />
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-base font-semibold flex justify-center items-end"></span>
            </div>
          </div>
        </div>
        {/* search */}
        <div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-lg w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="flex flex-row gap-3">
            <LuBookmark
              className="cursor-pointer text-2xl text-white"
              title="Bookmarks"
            />
            <TbBell
              className="cursor-pointer text-2xl text-white"
              title="Notifications"
            />
            <TbMessage
              className="cursor-pointer text-2xl text-white"
              title="Inbox"
            />
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
