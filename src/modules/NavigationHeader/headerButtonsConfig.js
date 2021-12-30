import routesByName from "constants/routesByName";

export default [
  { label: "EXPERIENCE", handler: () => {} },
  { label: "STAKING", handler: () => {}, soon: true },
  {
    label: "EXCHANGE",
    handler: () => {},
    subMenu: [
      {
        label: "Buy BB",
        subMenu: [
          { label: "Binance" },
          { label: "Crypto.com" },
          { label: "Okex" },
          { label: "CoinSpot" },
        ],
      },
      { label: "NFTs", soon: true },
    ],
  },
  { label: "COMMUNITY", route: routesByName.community },
  { label: "CAREERS", route: routesByName.careers },
  {
    label: "MORE",
    subMenu: [
      { label: "FAQ", route: routesByName.faq },
      { label: "Staking FAQ" },
      { label: "Whitepaper", route: routesByName.whitepaper },
      { label: "Linepaper" },
    ],
  },
];
