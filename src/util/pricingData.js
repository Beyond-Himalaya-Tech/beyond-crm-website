// Stripe price IDs (replace with your real ones)
export const STRIPE_PRICE_IDS = {
  monthly: {
    professional: "price_1MONTHLY_PRO",
    enterprise: "price_1MONTHLY_ENT",
  },
  quarterly: {
    professional: "price_1QUARTERLY_PRO",
    enterprise: "price_1QUARTERLY_ENT",
  },
  yearly: {
    professional: "price_1YEARLY_PRO",
    enterprise: "price_1YEARLY_ENT",
  },
};

export const PLAN_DATA = {
  monthly: [
    {
      name: "Free",
      price: 100,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 100 student records",
        "Basic visa tracking",
        "Email notifications",
        "Document management",
        "Basic reporting",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
      stripePriceId: import.meta.env.VITE_STRIPE_MONTHLY_PRICE_ID,
    },
    {
      name: "Professional",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 500 student records",
        "Advanced visa tracking",
        "SMS & Email notifications",
        "Advanced document management",
        "Comprehensive reporting",
        "Lead management",
        "Calendar integration",
      ],
      cta: "Get started",
      highlight: true,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.monthly.professional,
    },
    {
      name: "Enterprise",
      price: 80,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Unlimited student records",
        "Complete visa lifecycle management",
        "Multi-channel notifications",
        "AI-powered document processing",
        "Advanced analytics & insights",
        "Multi-office management",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.monthly.enterprise,
    },
  ],
  quarterly: [
    {
      name: "Free",
      price: 0,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 100 student records",
        "Basic visa tracking",
        "Email notifications",
        "Document management",
        "Basic reporting",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
    },
    {
      name: "Professional",
      price: 110,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 500 student records",
        "Advanced visa tracking",
        "SMS & Email notifications",
        "Advanced document management",
        "Comprehensive reporting",
        "Lead management",
        "Calendar integration",
      ],
      cta: "Get started",
      highlight: true,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.quarterly.professional,
    },
    {
      name: "Enterprise",
      price: 220,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Unlimited student records",
        "Complete visa lifecycle management",
        "Multi-channel notifications",
        "AI-powered document processing",
        "Advanced analytics & insights",
        "Multi-office management",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.quarterly.enterprise,
    },
  ],
  yearly: [
    {
      name: "Free",
      price: 0,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 100 student records",
        "Basic visa tracking",
        "Email notifications",
        "Document management",
        "Basic reporting",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
    },
    {
      name: "Professional",
      price: 400,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Up to 500 student records",
        "Advanced visa tracking",
        "SMS & Email notifications",
        "Advanced document management",
        "Comprehensive reporting",
        "Lead management",
        "Calendar integration",
      ],
      cta: "Get started",
      highlight: true,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.yearly.professional,
    },
    {
      name: "Enterprise",
      price: 800,
      description:
        "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
      features: [
        "Unlimited student records",
        "Complete visa lifecycle management",
        "Multi-channel notifications",
        "AI-powered document processing",
        "Advanced analytics & insights",
        "Multi-office management",
      ],
      cta: "Get started",
      highlight: false,
      disabled: false,
      stripePriceId: STRIPE_PRICE_IDS.yearly.enterprise,
    },
  ],
};

export const BILLING_PERIODS = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "yearly", label: "Yearly" },
];
