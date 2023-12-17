import Image from "next/image";
import React from "react";
import { TbMessageCircle } from "react-icons/tb";
import { FaRetweet } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all curson-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/624760?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11 px-4">
          <h5>Eddie Jaoude</h5>
          <p>
            The downside of using the latest version of tech libs/tools is that
            there are fewer resources available for them - so I know what I am
            doing this weekend, trial and error 😂
          </p>
          <div className="flex justify justify-between mt-5 text-xl items-center pr-10">
            <div>
              <TbMessageCircle />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <IoMdHeartEmpty />
            </div>
            <div>
              <FiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
