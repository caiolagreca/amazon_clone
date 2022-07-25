import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Order({ order }) {
    const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Pedido</h2>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Pedido Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
