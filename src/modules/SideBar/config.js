import routesByName from "constants/routesByName";

import homeImg from "assets/images/icons/home.png";
import faqImg from "assets/images/icons/ask.png";
import careersImg from "assets/images/icons/briefcase.png";
import devImg from "assets/images/icons/coding.png";
import communityImg from "assets/images/icons/community.png";
import whitePaperImg from "assets/images/icons/file.png";
import eventsImg from "assets/images/icons/planner.png";

import whitepaperConfig from "modules/Whitepaper/whitepaperConfig";
import developersConfig from "modules/Developers/developersConfig";
import faqConfig from "modules/FAQ/faqConfig";

export const links = [
  { label: "MAIN PAGE", to: routesByName.home, icon: homeImg },
  { label: "NEWS & INFO", to: routesByName.events, icon: eventsImg },
  {
    label: "DEVELOPERS",
    to: routesByName.developers,
    icon: devImg,
    anchors: Object.keys(developersConfig),
  },
  { label: "COMMUNITY", to: routesByName.community, icon: communityImg },
  { label: "CAREERS", to: routesByName.careers, icon: careersImg },
  {
    label: "WHITEPAPER",
    to: routesByName.whitepaper,
    icon: whitePaperImg,
    anchors: Object.keys(whitepaperConfig),
  },
  {
    label: "FAQ",
    to: routesByName.faq,
    icon: faqImg,
    anchors: Object.keys(faqConfig),
  },
];
