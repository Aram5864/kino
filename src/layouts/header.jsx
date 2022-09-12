import { Link } from "react-router-dom";
import style from "./header.module.scss";
import img from "../Images/Teatr.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
  };

  return (
    <div className={`bg-muted  ${style.nsvMy}`}>
      <nav className={`navbar navbar-expand-lg ${style.navbar_color}`}>
        <div className="container-fluid">
          <Link className={`nav-link ${style.nav_itemes}`} to="#">
            <img src={img} className={style.logotip} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link active ${style.nav_itemes}`}
                  aria-current="page"
                  to="/"
                >
                  {t("home_header")}
                </Link>
              </li>
              <li className="nav-tonler-item">
                <Link className={`nav-link ${style.nav_itemes}`} to="/contact">
                  {t("contact_header")}
                </Link>
              </li>
              <li className="nav-tonler-item">
                <Link className={`nav-link ${style.nav_itemes}`} to="/movies">
                  {t("movie_header")}
                </Link>
              </li>
              <li className="nav-tonler-item">
                <Link className={`nav-link ${style.nav_itemes}`} to="/cart">
                  {t("your_movie_header")}
                </Link>
              </li>
              <li>
                <select
                  className="form-select select-outline-info ms-5"
                  aria-label=".form-select-sm example"
                  name="language"
                  onChange={onChange}
                >
                  <option selected={"en" == i18n.language} value="en">
                    Eng
                  </option>
                  <option selected={"am" == i18n.language} value="am">
                    Arm
                  </option>
                  <option selected={"ru" == i18n.language} value="ru">
                    Rus
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
