/* eslint-disable react/prop-types */
import { useNavigate, Link } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline ";
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
