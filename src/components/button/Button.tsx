import cn from "clsx";

type Props = {
  text: string;
  bgColor?: string;
  size?: string;
};

const Button = (props: Props) => {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        fontSize: props.size,
        padding: "10px 20px",
        border: "none",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
