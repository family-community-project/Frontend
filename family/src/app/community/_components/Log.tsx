import Image from "next/image";

export default function Log() {
  return (
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-7">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-[100px] border border-[#949494]">
        <Image src={"/arrowup.svg"} width={16} height={16} alt="icon" />
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
        <img
          src="https://placebear.com/32/32"
          className="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-[100px] object-cover"
        />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-body4 text-left text-black">
            신유빈 님이 나의 게시글에 댓글을 남겼습니다.
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-body5 text-left text-gray-500">
            1hours ago
          </p>
        </div>
      </div>
    </div>
  );
}
