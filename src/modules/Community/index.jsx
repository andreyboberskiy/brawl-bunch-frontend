import Globe from "react-globe.gl";

import BigTotalCard from "modules/Community/components/BigTotalCard";
import SmallTotalCard from "modules/Community/components/SmallTotalCard";

import s from "./Community.module.scss";

const Community = () => {
  const N = 10;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    // maxR: Math.random() * 20 + 3,
    // propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    // repeatPeriod: Math.random() * 2000 + 200,
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
