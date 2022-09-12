import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import style from "../Contact/contact.module.scss";
import { useTranslation } from "react-i18next";

const nameTokken = localStorage.getItem("message_tokken");
const Conatct = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState(nameTokken);
  const [Message, setMessage] = useState("");
  const [Data, setData] = useState([]);


  const { t } = useTranslation();

  const NameChange = (evt) => {
    setName(evt.target.value);
  };
  const EmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const MessageChange = (evt) => {
    setMessage(evt.target.value);
  };
  const SendMessage = () => {
    localStorage.setItem("message_tokken", Email);
    axios.post("http://verjnakan.loc/api/sendMessage", {
      name: Name,
      Email: Email,
      message: Message,
      received: Email,
    });

    setMessage("");

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1000
    })
  };

  useEffect(() => {
    axios.get(`http://verjnakan.loc/api/getMessage_admin`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  let adminFilter = Data.filter((item) => {
    return item.received == nameTokken;
  });

  return (
    <>
      <div className={`${style.back_styles} d-flex `}>
        <h1 className={style.h1_m}>{t('message_us')}</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <form action="">
                <input
                  onChange={NameChange}
                  type="text"
                  placeholder="Имя"
                  className="form-control m-2"
                />
                <input
                  onChange={EmailChange}
                  type="email"
                  placeholder="E-mail"
                  className="form-control m-2"
                />
                <textarea
                  onChange={MessageChange}
                  name=""
                  id=""
                  className="form-control m-2"
                  placeholder="Сообщение"
                  cols="30"
                  rows="10"
                ></textarea>
                <button
                  onClick={SendMessage}
                  className="btn btn-outline-success m-2"
                  type="button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="d-flex flwx-wrap flex-start ">
            <div className="row">
              {adminFilter.map((item) => {
                return (
                  <table className="table">
                    <tr>
                      <th scope="col " className="text-light">
                        {item.name}
                      </th>
                    </tr>
                    <div>
                      <tr>
                        <td className="text-light bg-dark">{item.message}</td>
                      </tr>
                    </div>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conatct;
