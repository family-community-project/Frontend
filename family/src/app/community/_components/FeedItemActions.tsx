import Image from "next/image";

export default function FeedItemActions() {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
      <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-16 h-8 relative gap-2.5 px-2 py-0.5">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-16 h-8 absolute left-0 top-0 gap-2.5 rounded-[100px] bg-[#007aff]/10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative gap-2.5 p-2.5">
            <Image src={"/arrowup.svg"} width={16} height={16} alt="icon" />
          </div>
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
          3
        </p>
      </div>
      <div className="flex flex-col justify-center items-end flex-grow-0 flex-shrink-0 h-8 w-[93px] relative gap-2.5 px-[5px] py-1">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[93px] h-8 absolute left-0 top-0 gap-2.5 rounded-[100px] bg-[#ff334b]/10">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-8 h-8 relative gap-2.5 px-1 py-2.5">
            <Image src={"/arrowup.svg"} width={16} height={16} alt="icon" />
          </div>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
          <img
            src="https://placebear.com/24/24"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 rounded-[100px] object-cover"
          />
          <img
            src="https://placebear.com/24/24"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 rounded-[100px] object-cover"
          />
        </div>
      </div>
      <Image src={"/arrowup.svg"} width={16} height={16} alt="icon" />
    </div>
  );
}
