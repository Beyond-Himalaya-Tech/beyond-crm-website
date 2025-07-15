// Stripe price IDs (replace with your real ones)
export const STRIPE_PRICE_IDS = {
  monthly: {
    Starter: "price_1Rl8T22fI2Ql9TPlriCMwJCQ",
    Growth: "price_1Rl8Td2fI2Ql9TPlgWyDUQ6U",
    Team: "price_1Rl8UC2fI2Ql9TPldGcUQPRt",
  },
  quarterly: {
    Starter: "price_1Rl8VP2fI2Ql9TPlVhjgUQgi",
    Growth: "price_1Rl8dL2fI2Ql9TPleIfyGIYc",
    Team: "price_1Rl8ed2fI2Ql9TPlWj1vHefG",
  },
  yearly: {
    Starter: "price_1Rl8W52fI2Ql9TPl2rij9RCM",
    Growth: "price_1Rl8cr2fI2Ql9TPlEFJaT18O",
    Team: "price_1Rl8fB2fI2Ql9TPlE0LDQPYK",
  },
};

export const PLAN_DATA = {
  monthly: [
    {
      name: "Starter",
      price: 49.99,
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
      stripePriceId: STRIPE_PRICE_IDS.monthly.Starter,
    },
    {
      name: "Growth",
      price: 79.99,
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
      stripePriceId: STRIPE_PRICE_IDS.monthly.Growth,
    },
    {
      name: "Team",
      price: 109.99,
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
      stripePriceId: STRIPE_PRICE_IDS.monthly.Team,
    },
  ],
  quarterly: [
    {
      name: "Starter",
      price: 139.99,
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
      stripePriceId: STRIPE_PRICE_IDS.quarterly.Starter,
    },
    {
      name: "Growth",
      price: 239.97,
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
      stripePriceId: STRIPE_PRICE_IDS.quarterly.Growth,
    },
    {
      name: "Team",
      price: 329.99,
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
      stripePriceId: STRIPE_PRICE_IDS.quarterly.Team,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: 598.99,
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
      stripePriceId: STRIPE_PRICE_IDS.yearly.Starter,
    },
    {
      name: "Growth",
      price: 959.99,
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
      stripePriceId: STRIPE_PRICE_IDS.yearly.Growth,
    },
    {
      name: "Team",
      price: 1319.99,
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
      stripePriceId: STRIPE_PRICE_IDS.yearly.Team,
    },
  ],
};

export const BILLING_PERIODS = [
  { key: "monthly", label: "Monthly" },
  { key: "quarterly", label: "Quarterly" },
  { key: "yearly", label: "Yearly" },
];
