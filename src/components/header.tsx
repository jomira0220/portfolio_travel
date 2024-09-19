import { Link } from "react-router-dom";

const Header = () => {
  const navItems = ["home", "write"];
  const pathName = window.location.pathname;
  return (
    <header className="bg-slate-900 text-white">
      <nav className="max-w-7xl flex justify-between m-auto p-4">
        <h1>jomira</h1>
        <ul className="flex gap-4">
          {navItems.map((item, index) => {
            return (
              <li>
                <Link
                  to={`/${item}`}
                  key={index}
                  className={
                    "p-2 hover:text-yellow-300 hover:border-b border-yellow-300" +
                    (pathName === `/${item}` ||
                    (pathName === "/" && item === "home")
                      ? " font-bold"
                      : "")
                  }
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
