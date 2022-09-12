import axios from "axios";
import { useEffect, useState } from "react";
import style from "./addToCart.module.scss";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://verjnakan.loc/api/get/add_to_cart`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  const BuythisMovie = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You bought this movie",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const { t } = useTranslation();
  return (
    <>
      <div className={style.backcolor}>
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-wrap m-5">
              {Data.map((item) => {
                return (
                  <div key={item.id} className={`card ${style.cardbody} m-5`}>
                    <img
                      src={`http://verjnakan.loc/storage/uploads/${item.image}`}
                      className={`card-img-top ${style.img_size}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <h4>{item.price}$</h4>
                      <button
                        href="#"
                        className="btn btn-outline-success"
                        onClick={BuythisMovie}
                      >
                        {t('your_movie')}
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
