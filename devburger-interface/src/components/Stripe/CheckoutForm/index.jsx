/* eslint-disable no-unused-vars */

import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";
import { useNavigate} from "react-router-dom";
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";


export default function CheckoutForm() {
  const stripe = useStripe();

  const elements = useElements();

  const navigate = useNavigate();

  const{ cartProducts, clearCart } = useCart();

  const { 
    state : { dpmCheckerLink },
} = useLocation();
  

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe ou elemento com falha, tente novamente");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });


    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });
        const { status } = await api.post('/orders', { products }, {
          validateStatus: () => true,
        });

        if (status === 201 || status === 200) {
          setTimeout(() => {
            navigate(`/complete?payment_client_secret=${paymentIntent.client_secret}`);
            clearCart();
          }, 2000);

          toast.success('Pedido Realizado com sucesso!');
        } else if (status === 400) {
          toast.error('Pedido não Realizado, tente novamente');
        } else {
          throw new Error();
        }
      } catch {
        toast.error("Falha no sistema tente novamente");
      }
    } else {
      navigate(`/complete?payment_client_secret=${paymentIntent.client_secret}`);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (
    <div className="container">
    <form id="payment-form" onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
    <div>
        <p>
            Os métodos de pagamento são disponibilados 
            <br></br>
            de acordo com a sua região.&nbsp;
        </p>
        <a href={ "/"  } 
            target="_blank" 
            rel="noopener noreferrer"
            id="dpm-itegration-checker"
            >
                ver métodos de pagamento disponíveis!
        </a>
    </div>
    </div>
  );
}