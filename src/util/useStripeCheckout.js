import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { API_BASE } from "./constant";
export const useStripeCheckout = () => {
  return useCallback(async ({ priceId, quantity }) => {
    console.log("priceId and quantity", priceId, quantity);
    const res = await fetch(`${API_BASE}/api/stripe/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity, origin }),
    });
    const data = await res.json();
    const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );
    await stripe.redirectToCheckout({ sessionId: data.sessionId });
  }, []);
};
