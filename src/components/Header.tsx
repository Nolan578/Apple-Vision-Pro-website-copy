import { NavLink } from "react-router-dom";
import appleLogo from "../assets/appleLogo.png";

const Header = () => {
  return (
    <div>
      <nav className="mx-auto w-[65%] border">
        <ul className="flex items-center">
          <li>
            <img src={appleLogo} alt="apple logo" width={30} />
          </li>
          <li className="flex text-[15px]">
            <NavLink to="https://www.apple.com/store">Store</NavLink>
            <NavLink to="https://www.apple.com/store">Mac</NavLink>
            <NavLink to="https://www.apple.com/store">iPad</NavLink>
            <NavLink to="https://www.apple.com/store">iPhone</NavLink>
            <NavLink to="https://www.apple.com/store">Watch</NavLink>
            <NavLink to="https://www.apple.com/store">Vision</NavLink>
            <NavLink to="https://www.apple.com/store">AirPods</NavLink>
            <NavLink to="https://www.apple.com/store">TV & Home</NavLink>
            <NavLink to="https://www.apple.com/store">Entertainment</NavLink>
            <NavLink to="https://www.apple.com/store">Accessories</NavLink>
            <NavLink to="https://www.apple.com/store">Support</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
