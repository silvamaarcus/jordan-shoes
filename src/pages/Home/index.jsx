import Aviso from "../../components/Aviso";

import logo_jordan from "../../svg/logo-jordan.svg";

const Home = () => {
  return (
    <>
      <Aviso />

      <section className="bg-jordan">
        <div className="container">
          <div className="flex-start-row">
            <img src={logo_jordan} alt="Air Jordan"  className="icon-s"/>
            <h6 className="ml-1 color-white">JordanShoes</h6>
          </div>

          <h3 className="mt-2 color-white">A melhor loja de Jordan</h3>
          <h6 className="mt-2 color-white">
            O tênis Jordan é fruto de uma velha e forte <br /> parceria entre a Nike e o jogador Michael Jordan.
          </h6>
        </div>
      </section>
    </>
  );
};
export default Home;
