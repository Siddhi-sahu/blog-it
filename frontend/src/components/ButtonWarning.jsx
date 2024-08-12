import { Link } from "react-router-dom";

const ButtonWarning = ({ label, buttonText, to }) => {
  return (
    <div className="py-1 text-sm flex justify-center mb-2">
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};

export default ButtonWarning;
