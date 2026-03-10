
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const { 
    state : { dpmCheckerLink },
} = useLocation();

console.log( dpmCheckerLink);

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

    console.log("Payment Intent:", paymentIntent);

    if (error, paymentIntent) {
      setMessage(error);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);

    console.log( paymentIntent);
    console.log( error);
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
      {/* Show any error or success messages */}
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