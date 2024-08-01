import { Link } from "react-router-dom";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { USERS_FOR_RIGHT_PANEL } from "../../utils/db/dummy";
import { CiSun } from "react-icons/ci";
import { TbPlus } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";

const RightPanel = () => {
  const isLoading = false;

  return (
    <div className="hidden lg:block my-4 mx-2">
      <div className="bg-containers p-3 rounded-xl sticky top-2">
        <div className="flex justify-between">
          <div className="text-base font-semibold">
            Discover New Connections
          </div>
          <div className="grid items-center">
            <CiSun className="cursor-pointer text-2xl fill-white" />
          </div>
        </div>
        <div className="h-px bg-gray-400 my-4"></div>
        <div className="flex flex-col gap-4">
          {/* item */}
          {isLoading && (
            <>
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
              <RightPanelSkeleton />
            </>
          )}
          {!isLoading &&
            USERS_FOR_RIGHT_PANEL?.map((user) => (
              <Link
                to={`/profile/${user.username}`}
                className="flex items-center justify-between gap-4"
                key={user._id}
              >
                <div className="flex gap-2 items-center">
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={user.profileImg || "/avatar-placeholder.png"} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0">
                      <div className="font-semibold flex gap-1 text-base tracking-tight truncate">
                        {user.fullName}
                        <div className="grid items-center">
                          <LuBadgeCheck className="fill-yellow-400 font-semibold text-xl text-secondary" />
                        </div>
                      </div>
                    </div>

                    <span className="text-sm text-slate-500">
                      @{user.username}
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className="btn bg-containers hover:bg-white rounded-full btn-sm border border-white group"
                    onClick={(e) => e.preventDefault()}
                  >
                    <TbPlus className="text-white group-hover:text-black" />
                    <span className="group-hover:text-black">Follow</span>
                  </button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
export default RightPanel;
