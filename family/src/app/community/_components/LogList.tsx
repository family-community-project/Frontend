import Image from "next/image";
import Log from "./Log";

export default function LogList() {
  return (
    <div className="flex flex-col h-fit justify-center items-center flex-grow-0 flex-shrink-0 w-[416px] relative gap-6 p-5 rounded-[5px] bg-white">
      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[376px] text-base font-semibold text-left text-black">
        최근 활동
      </p>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </div>
  );
}
