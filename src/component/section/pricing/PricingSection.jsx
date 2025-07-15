import React, { useState } from "react";
import {
  BILLING_PERIODS as DEFAULT_BILLING_PERIODS,
  PLAN_DATA as DEFAULT_PLAN_DATA,
} from "../../../util/pricingData";
import ButtonComponent from "../../button/common/Button.component.jsx";
import { useStripeCheckout } from "../../../util/useStripeCheckout.js";
/* import { loadStripe } from "@stripe/stripe-js";
import { successUrl } from "../../../util/constant.js"; */

const PricingSection = ({
  planData = DEFAULT_PLAN_DATA,
  billingPeriods = DEFAULT_BILLING_PERIODS,
}) => {
  const checkout = useStripeCheckout();
  const [period, setPeriod] = useState(billingPeriods[0].key);

  const handleStripeCheckout = async (priceId) => {
    if (!priceId) return;
    await checkout({ priceId, quantity: 1 });
    /*  const stripe = await loadStripe(
      import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: successUrl,
      cancelUrl: window.location.origin + "/cancel",
    }); */
  };

  return (
    <section
      className='w-full py-16 px-4 bg-white flex flex-col items-center'
      id='pricing'
    >
      <div className='text-center mb-8'>
        <div className='text-sm font-bold text-[#AA14B5] mb-2 tracking-widest'>
          PRICING
        </div>
        <h2 className='text-3xl sm:text-4xl font-bold mb-2 text-[#18181b]'>
          Choose Plan That's Right For You
        </h2>
        <p className='text-gray-500 text-base sm:text-lg'>
          Choose the perfect plan for your consultancy needs
        </p>
      </div>
      {/* Billing period toggle */}
      <div className='flex justify-center mb-10'>
        <div className='flex bg-white border border-[#AA14B5] rounded-full overflow-hidden'>
          {billingPeriods.map((bp) => (
            <button
              key={bp.key}
              className={`px-6 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                period === bp.key
                  ? "bg-[#AA14B5] text-white"
                  : "text-[#AA14B5] bg-white"
              }`}
              onClick={() => setPeriod(bp.key)}
            >
              {bp.label}
            </button>
          ))}
        </div>
      </div>
      {/* Pricing cards */}
      <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
        {planData[period].map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col border ${
              plan.highlight
                ? "bg-[#AA14B5] text-white border-[#AA14B5]"
                : "bg-white text-[#18181b] border-gray-300"
            } rounded-3xl shadow-sm p-6 sm:p-8 relative transition-all duration-300 ${
              plan.highlight ? "scale-105 z-10" : "hover:shadow-lg"
            } min-h-[480px] sm:min-h-[520px] lg:min-h-[540px]`}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className='mb-2 text-xl font-bold'>{plan.name}</div>
            <div
              className={`mb-3 text-gray-400 text-sm ${
                plan.highlight ? "text-white/80" : ""
              }`}
            >
              {plan.description}
            </div>
            <div className='flex items-end mb-2'>
              <span className='text-4xl font-extrabold'>${plan.price}</span>
              <span
                className={`ml-1 text-lg font-medium ${
                  plan.highlight ? "text-white/70" : "text-gray-400"
                }`}
              >
                / {period}
              </span>
            </div>
            <div className='font-bold mb-2 mt-4'>What's included</div>
            <ul className='mb-8 space-y-2 text-base'>
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className='flex items-start gap-2'
                >
                  <span className='text-lg'>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className='mt-auto flex items-end w-full'>
              <ButtonComponent
                variant={plan.highlight ? "primary" : "customPurple"}
                size='large'
                fullWidth
                disabled={plan.disabled}
                onClick={() => {
                  if (plan.price === 0) {
                    window.location.href = "/signup";
                  } else {
                    handleStripeCheckout(plan.stripePriceId);
                  }
                }}
                className={
                  plan.highlight
                    ? "bg-white text-[#AA14B5] hover:bg-gray-100 border-white"
                    : "bg-[#AA14B5] text-white hover:bg-[#8a1191] border-[#AA14B5]"
                }
              >
                {plan.cta}
              </ButtonComponent>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
