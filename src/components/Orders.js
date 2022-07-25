import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  return (
    <div className="orders">
      <h1>Seus pedidos</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
