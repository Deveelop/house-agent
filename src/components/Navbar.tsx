import { Link } from "react-router-dom";
import { NAV_LINKS } from "./arrayfolder";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link to="/">
        <img src="/" alt="logo" width={74} height={29} />
      </Link>
      <ul className=" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            to={link.to}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" varaint="btn_dark_green" icon="/user.svg"/>
      </div>
    </nav>
  );
};

export default Navbar;
