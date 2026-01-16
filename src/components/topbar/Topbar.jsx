import Link from "next/link";
import "../topbar/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <ul>
        <section className="menu-logo">
          <p className="menu-btn">MENU</p>
          <p className="logo">
            <Link href="/">KElvin.folio™</Link>
          </p>
        </section>

        <p className="menu-btn">since 2022</p>
      </ul>
    </div>
  );
};

export default Topbar;
