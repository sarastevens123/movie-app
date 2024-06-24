

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/movies">Movies</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
