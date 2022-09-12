import style from "./home.module.scss";
import img_bt from "../../Images/bolshoy_teatr.png";
import img_fon from "../../Images/balshoy_teatar_back_fon.png";
import { useTranslation } from "react-i18next";
const Home = () => {

  const { t } = useTranslation();
  return (
    <>
      <div className={style.home_background}>
        <div className="">
          <div className={style.text}>
            <div>
              <h1 className={style.h1}>{t('home_title')}</h1>
            </div>
            <div className={style.default_div}></div>
            <div>
              <p className={style.p}>
                {t('home_title_text')}
              </p>
            </div>
            <button className={` ${style.btn1}`}>афиша</button>
          </div>

          <div className={style.parent}>
            <div className={style.childe2}>
              <img src={img_fon} className={style.bt_fon_img} alt="" />
            </div>
            <div className={style.childe1}>
              <img src={img_bt} className={style.bt_img} />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
