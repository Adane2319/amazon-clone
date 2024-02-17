import React from "react";
import {BrowserRouter as Router, Routes,Route,redirect,} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./componets/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51OjZQgH45Uryy6AMyJsKUFAoIqhMgwk5fzM6gO3qWGFKrzihsbx4P4DArFrryvBJUly2Ejwi8tn0wu25bTkkcihj00C8G6j6hY"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You have to log-in to pay first"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log-in first to access your orders "}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/orders" element={<Orders />} /> */}
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
