type Buttonsize = "S" | "M";
type Buttontype = "default" | "outline" | "ghost";
interface Buttonprops {
  text: string | null;
  size?: Buttonsize;
  type?: Buttontype;
}

export const Button = ({ text, size = "S", type = "default" }: Buttonprops) => {
  const heightClass: Record<Buttonsize, string> = {
    S: "py-2 text-xs",
    M: "py-4 text-lg",
  };
  const buttonType: Record<Buttontype, string> = {
    default: "btn-default",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  const currentHeightClass = heightClass[size] || heightClass.S;

  const currenTypeClass = buttonType[type] || buttonType.default;

  return (
    <button
      className={`
                ${currentHeightClass}
         ${currenTypeClass}
            `}
    >
      {text}
    </button>
  );
};
