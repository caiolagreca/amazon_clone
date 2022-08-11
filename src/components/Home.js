import React from "react";
import "./Home.css";
import Product from "./Product";
import livro from "../images/livro.jpg";
import fundo from "../images/imagem_fundo.jpg";
import liquidificador from "../images/liquidificador.jpg";
import celular from "../images/celular.jpg";
import furadeira from "../images/furadeira.jpg";
import vinho from "../images/vinho.jpg";
import tv from "../images/tv.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={fundo}
          alt="imagem principal amazon"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="O poder do hábito"
            price={29.9}
            rating={5}
            image={livro}
          />
          <Product
            id="49538094"
            title="Liquidificador Mondial, Turbo Inox 1100W, 220V, Preto, 3L - L-1100 BI"
            price={175.0}
            rating={4}
            image={liquidificador}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black - Preto"
            price={1733.0}
            rating={3}
            image={celular}
          />
          <Product
            id="23445930"
            title="Parafusadeira/Furadeira a Bateria 12V PFV120 Bivolt Vonder"
            price={205.99}
            rating={5}
            image={furadeira}
          />
          <Product
            id="3254354345"
            title="Vinho Chileno Marques De Casa Concha Etiqueta Negra 750ml Tinto"
            price={139.99}
            rating={4}
            image={vinho}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Smart TV LED 32 HD AOC ROKU TV FHD 32S5195/78G, Wi-Fi, 3 HDMI, 1 USB, Wifi, Conversor Digital"
            price={1199.98}
            rating={4}
            image={tv}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
