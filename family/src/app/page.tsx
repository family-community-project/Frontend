import { Button } from "./components/button";
import { Input } from "./components/input";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-[1280px] mx-auto flex justify-between min-h-screen">
      {/* 화면왼쪽 배경 섹션 */}
      <div className="w-[848px] flex flex-col items-center justify-center gap-[26px] mb-[70px] ">
        <Image src="\logo.png" alt="background" width={236} height={236} />
        <div className="flex gap-[12px]">
          <h1 className="text-[40px] font-bold">함께여서 따뜻한 공간,</h1>
          <h2 className="text-[40px] font-bold text-logo">따숲</h2>
        </div>
      </div>
      {/* 화면 오른쪽 섹션 */}
      <div className="flex flex-col gap-[42px] justify-center items-center w-[360px]">
        <Image src="\logo.png" alt="Logo" width={90} height={90} />
        {/* 로그인 폼 전체  */}
        <div className="w-[396px] px-[20px] flex flex-col gap-[12px] items-center justify-center">
          {/* 내부 폼 */}
          <form action="" className="flex flex-col gap-[20px] w-full">
            <Input label={"아이디"} placeholder="example@example.com" />
            <Input label={"비밀번호"} placeholder="**********" />
          </form>
          {/* 하단 로그인 버튼 및 카카오 버튼 영역 */}
          <Button text={"로그인"} size="M" />
          <p className="text-center text-[12px] text-gray-600 flex items-center w-full">
            <span className="flex-grow border-t border-gray-300 mr-3"></span>
            카카오 회원이라면
            <span className="flex-grow border-t border-gray-300 ml-3"></span>
          </p>
          <Button text={"카카오 로그인"} size="M" type="kakao" />
          <ul className="flex items-center justify-center text-[12px] text-gray-600 cursor-pointer">
            <li className="pr-[23px]">회원가입</li>
            <li className="border-r pr-[23px] pl-[23px] border-l border-gray-600 cursor-pointer">
              아이디 찾기
            </li>
            <li className="pl-[23px] cursor-pointer">비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
