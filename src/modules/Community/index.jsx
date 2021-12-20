import Globe from "react-globe.gl";

import BigTotalCard from "modules/Community/components/BigTotalCard";
import SmallTotalCard from "modules/Community/components/SmallTotalCard";

import { labels } from "modules/Community/config";

import s from "./Community.module.scss";

const colorsByText = {
  Telegram: { color: "#39DEBE", bg: "rgba(57, 222, 190, 0.2)" },
  Discord: { color: "#7033FF", bg: "rgba(112, 51, 255, 0.2)" },
  Facebook: { color: "#F65164", bg: "rgba(246, 81, 100, 0.2)" },
  Twitter: { color: "#FFA63F", bg: "rgba(255, 166, 63, 0.2)" },
};

const renderLabel = ({ text, link }) =>
  `<div class="${s.labelContainer}">
    <div
      class="${s.circleContainer}"
      style="border-color: ${colorsByText[text].color}; background-color: ${colorsByText[text].bg};"
    >
      <span class="${s.circleText}" style="color: ${colorsByText[text].color}">
        ${text[0]}
      </span>
    </div>
    <div class="${s.labelText}">
      <p>${text}</p>
      <a href={link}>Press to join</a>
    </div>
  </div>`;

const Community = () => {
  const gData = labels.map(({ text, link, lat, lng }, i) => ({
    lat,
    lng,
    text,
    link,
  }));

  const colorInterpolator = (t) => `rgba(57, 222, 190,${Math.sqrt(1 - t)})`;

  return (
    <div className={s.container}>
      <div className={s.smallTotalCard}>
        <SmallTotalCard />
      </div>
      <div className={s.bigTotalCard}>
        <BigTotalCard />
      </div>
      <div className={s.globe}>
        <Globe
          ringsData={gData}
          labelsData={gData}
          labelDotRadius={3}
          labelColor={() => "rgba(255,255,255,0)"}
          onLabelClick={(s) =>
            window.open(s.link, "_blank", "noopener,noreferrer")
          }
          atmosphereColor="#69A6E5"
          atmosphereAltitude={0.1}
          labelAltitude={0.01}
          labelLabel={renderLabel}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="#121b24"
          ringColor={() => colorInterpolator}
          ringMaxRadius={3}
          ringPropagationSpeed={0.9}
          ringRepeatPeriod={700}
        />
      </div>
    </div>
  );
};

export default Community;
