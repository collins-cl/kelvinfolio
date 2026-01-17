import Logo from "../logo/Logo";
import "../topbar/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <ul>
        <section className="menu-logo">
          <p className="menu-btn">MENU</p>
          <Logo />
        </section>

        <p className="menu-btn">since 2022</p>
      </ul>
    </div>
  );
};

export default Topbar;
