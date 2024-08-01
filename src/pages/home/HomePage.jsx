import XSvg from "../../components/svgs/X";
import { BiHome } from "react-icons/bi";
import { CiLocationOn, CiSun } from "react-icons/ci";
import { FcGlobe } from "react-icons/fc";
import { GoChevronDown } from "react-icons/go";
import CreatePost from "./CreatePost";
import RightPanel from "../../components/common/RightPanel";

const HomePage = () => {
  return (
    <main className="container grid grid-cols-7 gap-3 w-full p-3">
      <section className="col-span-2">
        <div className="flex flex-row gap-3">
          <div className="">
            <XSvg className="w-6 fill-indigo-400" />
          </div>
          <div className="flex flex-row gap-2">
            <BiHome className="text-2xl fill-indigo-400" />
            <span className="text-base font-semibold flex justify-center items-end">
              Home
            </span>
          </div>
        </div>
        {/* Profile */}
        <div className=" bg-containers p-3 mt-3 rounded-xl flex  flex-col justify-center">
          <div className="flex justify-center">
            <div className="">
              <div className="avatar flex justify-center mb-2">
                <div className="w-16 rounded-full relative group/avatar">
                  <img src="../../../public/avatar-placeholder.png" alt="" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">Clement Wendo</span>
                <span className="text-sm opacity-75">@clementwendo</span>
                <div className="flex flex-row gap-1 mt-1">
                  <CiLocationOn />
                  <span className="text-sm opacity-75">Kenya</span>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-sm font-normal">I am Wendo</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center mt-3">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-normal">Followers</div>
              <div className="text-sm font-normal opacity-75">250</div>
            </div>
            <div>
              <div className="text-sm font-normal">Following</div>
              <div className="text-sm font-normal opacity-75">50</div>
            </div>
            <div>
              <div className="text-sm font-normal">Posts</div>
              <div className="text-sm font-normal opacity-75">100</div>
            </div>
          </div>
        </div>

        {/* TRENDS */}
        <div className=" bg-containers p-3 mt-3 rounded-xl flex  flex-col justify-center">
          <div className="flex justify-between">
            <div className="text-base font-semibold">Trending Now</div>
            <div className="grid items-center">
              <CiSun className="cursor-pointer text-2xl fill-white" />
            </div>
          </div>
          <div className="h-px bg-gray-400 my-4"></div>
          <div className="flex justify-between">
            <div className="text-base font-semibold">Trending Globally</div>
            <div className="grid items-center">
              <FcGlobe className="cursor-pointer text-2x" />
            </div>
          </div>
          {/* The Global Trends */}
          <div className="my-2">
            <ul className="ml-4 list-none">
              <li className="text-sm opacity-75 py-1">
                #Twitter
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (100k)
                </span>
              </li>{" "}
              <li className="text-sm opacity-75 py-1">
                #RutoMustGo
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (2M)
                </span>
              </li>{" "}
              <li className="text-sm opacity-75 py-1">
                #Liberty
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (800k)
                </span>
              </li>
            </ul>
          </div>
          <div className="h-px bg-gray-400 my-4"></div>
          {/* Local Trends */}
          <div className="flex justify-between">
            <div className="text-base font-semibold">Trending in Kenya</div>
            <div className="grid items-center">
              <div className="cursor-pointer text-2x">🇰🇪</div>
            </div>
          </div>
          {/* List of Trends */}
          <div className="my-2">
            <ul className="ml-4 list-none">
              <li className="text-sm opacity-75 py-1">
                #KarenNyamu
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (109k)
                </span>
              </li>{" "}
              <li className="text-sm opacity-75 py-1">
                #RutoMustGo
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (2M)
                </span>
              </li>{" "}
              <li className="text-sm opacity-75 py-1">
                #PoloKimani
                <span className="text-xs font-semibold opacity-75 ml-1">
                  (50k)
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-end cursor-pointer">
            <div className="font-sm font-semibold">More Trends</div>
            <div className="Grid items-center">
              <GoChevronDown className=" text-2x" />
            </div>
          </div>
        </div>
      </section>
      <section className="col-span-3">
        <div>
          <CreatePost />
        </div>
      </section>
      <section className="col-span-2">
        <div>
          <RightPanel />
        </div>
      </section>
    </main>
  );
};
export default HomePage;
