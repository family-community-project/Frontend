import { Button } from "@/app/components/button";
import { DropDown } from "@/app/components/dropdown";

export default function ActionsHeader() {
  return (
    <div className="w-full h-fit bg-amber-50 flex justify-between">
      <span className="w-25">
        <DropDown
          name=""
          option={["옵션1", "옵션2"]}
          placeholder={"작성하기"}
        />
      </span>
      <span className="w-25">
        {" "}
        <Button text={"hello"} />
      </span>
    </div>
  );
}
