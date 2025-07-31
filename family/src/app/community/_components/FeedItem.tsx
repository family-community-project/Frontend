import Image from "next/image";
import FeedItemActions from "./FeedItemActions";

export default function FeedItem() {
  return (
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-fit w-full gap-5 p-5 rounded-[5px] bg-white">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-[9px]">
        <img
          src="https://placebear.com/32/32"
          className="flex-grow-0 flex-shrink-0 w-8 h-8 rounded-[100px] object-cover"
        />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[54px] relative">
          <p className="flex-grow-0 flex-shrink-0 text-body3 font-semibold text-left text-black">
            신진훈
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[54px] text-body5  text-left text-gray-500">
            1hours ago
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[788px] text-title3 font-bold text-left text-black">
          아무말
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[788px] text-body4 text-left text-black">
          이번 가족 여행 어디로 갈까? 일본? 아니면 제주도? 무슨 말을 해야할지
          잘모르겠다. 일단 글자수를 채워야해서... 무슨 말을 해야할지 잘모르겠다.
          일단 글자수를 채워야해서...무슨 말을 해야할지 잘모르겠다. 일단
          글자수를 채워야해서...무슨 말을 해야할지 잘모르겠다. 일단 글자수를
          채워야해서...이번 가족 여행 어디로 갈까? 일본? 아니면 제주도? 무슨
          말을 해야할지 잘모르겠다. 일단 글자수를 채워야해서... 무슨 말을
          해야할지 잘모르겠다. 일단 글자수를 채워야해서...무슨 말을 해야할지
          잘모르겠다. 일단 글자수를 채워야해서...무슨 말을 해야할지 잘모르겠다.
          일단 글자수를 채워야해서...
        </p>
      </div>
      <FeedItemActions />
    </div>
  );
}
