import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../config/stripeConfig";
import CheckoutForm from "../../components/Stripe/CheckoutForm";


export function Checkout() {
   const {
    state : { clientSecret },
        } = useLocation();

    if (!clientSecret) {
        return <div>Loading...</div>;
    }

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm/>
        </Elements>
    );
}