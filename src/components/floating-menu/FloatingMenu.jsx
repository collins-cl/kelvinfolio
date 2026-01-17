import Link from "next/link";
import Logo from "../logo/Logo";
import "./FloatingMenu.scss";

const FloatingMenu = () => {
  return (
    <section className="floating-menu">
      <ul>
        <Logo />

        <div>
          <Link href="/">works (8)</Link>
        </div>
        <div>
          <Link href="/">about</Link>
        </div>
        <div>
          <Link href="/">archive</Link>
        </div>

        <div>
          <p className="title">Contact</p>
          <div className="contact-details">
            <a href="tel:+">
              <p>08060015910</p>
            </a>

            <a href="mailto:">
              <p>kelvinchuks41@gmail.com</p>
            </a>
          </div>
        </div>

        <div>
          <p className="title">facebook</p>
          <div className="contact-details">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              kelvin.chuks
            </a>
          </div>
        </div>
      </ul>
    </section>
  );
};

export default FloatingMenu;
