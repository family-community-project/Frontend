import { DropDown } from "./components/dropdown";

export default function Home() {
  return (
    <div className="w-[120px] m-auto">
      <br></br>
      <br></br>
      <br></br>
      <DropDown name="" option={["옵션1", "옵션2"]} placeholder={"작성하기"} />
      <br />
      <DropDown name="" option={["옵션1", "옵션2"]} placeholder={"작성하기"} />
      <br></br>
      <br></br>
      <br></br>

      <DropDown name="" option={["옵션1", "옵션2"]} placeholder={"작성하기"} />
      <br />
      <br />
      <br />
      <DropDown name="" option={["옵션1", "옵션2"]} placeholder={"작성하기"} />
    </div>
  );
}
