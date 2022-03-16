import { useSelector } from "react-redux";
import LoginHeader from "./LoginHeader";
import LogoutHeader from "./LogoutHeader";

export default function Navbar() {
  const is_login = useSelector((state) => state.jamboree.is_login);
  const cmp = is_login ? <LoginHeader /> : <LogoutHeader />;

  return <>{cmp}</>;
}
