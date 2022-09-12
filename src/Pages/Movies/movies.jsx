import { useEffect, useState } from "react";
import style from "./movies.module.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Movie = () => {
  const [Data, setData] = useState([]);

  const SendToCart = (evt,id) => {
      console.log(evt,id);
      axios.post(`http://verjnakan.loc/api/movie/add_to_cart/${id}`)

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })
  }
  useEffect(() => {
    axios.get(`http://verjnakan.loc/api/get/movie`).then((res) => {
      setData(res.data.data);
    });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div className={style.back_movi}>
        <div className="container">
          <div className="row ">
            <div className="col d-flex flex-wrap m-5">
              {Data.map((item) => {
                return (
                  <div  className={`card ${style.card_body} m-5`}>
                    <img
                      className={`card-img-top ${style.img_size}`}
                      src={`http://verjnakan.loc/storage/uploads/${item.image}`}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        {item.description}
                      </p>
                      <h4>{item.price}$</h4>
                      <button className="btn btn-outline-primary" onClick={(evt)=>{
                        SendToCart(evt,item.id)
                      }}>
                          {t('movies')}
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

export default Movie;
