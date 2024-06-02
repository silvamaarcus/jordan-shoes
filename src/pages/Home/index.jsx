import { useEffect, useState } from "react";

import Aviso from "../../components/Aviso";
import Card from "../../components/Card";

import logo_jordan from "../../svg/logo-jordan.svg";

// Importando API Fake com dados dos tenis.
import api from "../../services/api";

const Home = () => {
  const [shoe, setShoe] = useState([]);

  useEffect(() => {
    api.get("/shoes").then((response) => {
      setShoe(response.data);
    });
  }, []);

  return (
    <>
      <Aviso />

      <section className="bg-jordan">
        <div className="container">
          <div className="flex-start-row">
            <img src={logo_jordan} alt="Air Jordan" className="icon-s" />
            <h6 className="ml-1 color-white">JordanShoes</h6>
          </div>

          <h3 className="mt-2 color-white">A melhor loja de Jordan</h3>
          <h6 className="mt-2 color-white">
            O tênis Jordan é fruto de uma velha e forte <br /> parceria entre a
            Nike e o jogador Michael Jordan.
          </h6>
        </div>
      </section>

      <section className="container p-0 mt-5">
        <div className="flex-center-column text-center">
          <h6 className="bold">Os melhores em um só lugar</h6>
          <p className="mt-2 px-1 semi-bold">
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </div>
      </section>

      <section className="container p-0 mt-3">
        <div className="row">
          {shoe.map((shoe) => {
            return (
              <div className="grid-4 p-0">
                <Card
                  key={shoe.id}
                  img={shoe.img}
                  title={shoe.title}
                  subtitle={shoe.subtitle}
                  price={shoe.price}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
