import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroDetail from "../HeroDetail/HeroDetail";
import HeroMessage from "../HeroMessage/HeroMessage";
import "./Heros.css";
const Heros = () => {
  const [heros, serHeros] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setSelected] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: "https://60dff0ba6b689e001788c858.mockapi.io/heroes",
    })
      .then((response) => {
        if (!didCancel) {
          serHeros(response.data);
          console.log("response", response);
        }
      })
      .catch((error) => {
        if (!didCancel) {
          setErrorMessage(error.message);
        }
      });
    return () => {
      didCancel = true;
    };
  }, []);
  const handleOnClick = (hero) => {
    setSelected(hero);
    setMessages((mes) =>
      mes.concat([`HeroesComponent: Selected hero id=${hero.id}`])
    );
    console.log(hero);
  };
  const HandleClear = () => {
    setMessages([]);
  };
  console.log(heros, errorMessage);
  if (errorMessage) return <div style={{ color: "red" }}>{errorMessage}</div>;
  return (
    <div>
      {heros.map((hero) => (
        <ul className="heroes" key={hero.id}>
          <li className="heroes__item" onClick={() => handleOnClick(hero)}>
            <span className="badge">{hero.id}</span>
            <span> {hero.name} </span>
          </li>
        </ul>
      ))}
      <div className="hero_detail">
        <HeroDetail hero={selected} />
      </div>
      <div className="hero_message">
        <HeroMessage value={messages} HandleClear={HandleClear} />
      </div>
    </div>
  );
};

export default Heros;
