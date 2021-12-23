import { isEqual } from "lodash";
import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "react-globe.gl";

import BigTotalCard from "modules/Community/components/BigTotalCard";
import SmallTotalCard from "modules/Community/components/SmallTotalCard";
import { Label } from "modules/Community/components/Label";

import { labels } from "modules/Community/config";

import s from "./Community.module.scss";

const colorInterpolator = (t) => `rgba(57, 222, 190,${Math.sqrt(1 - t)})`;

const globeProps = {
  showGlobe: true,
  atmosphereColor: "#69A6E5",
  atmosphereAltitude: 0.1,
  globeImageUrl: "//unpkg.com/three-globe/example/img/earth-night.jpg",
  backgroundColor: "#121b24",
  ringColor: () => colorInterpolator,
  ringMaxRadius: 3,
  ringPropagationSpeed: 0.9,
  ringRepeatPeriod: 700,
};

const Community = () => {
  const globe = useRef();

  useEffect(() => {
    globe.current.pointOfView({ altitude: 2, lat: 40, lng: 40 });
    globe.current.controls().autoRotate = true;
    globe.current.controls().autoRotateSpeed = 0.3;
  }, []);

  const [labelCoords, setLabelCoords] = useState({});

  const intervalRef = useRef();

  const syncLabels = useCallback(() => {
    const getScreenCoords = globe.current?.getScreenCoords;
    const newCoords = {};

    labels.forEach(({ lat, lng, id }) => {
      newCoords[id] = getScreenCoords(lat, lng);
    });

    setLabelCoords((prev) => {
      if (!isEqual(newCoords, prev)) {
        return newCoords;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(syncLabels, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.smallTotalCard}>
        <SmallTotalCard />
      </div>
      <div className={s.bigTotalCard}>
        <BigTotalCard />
      </div>
      <div className={s.globe}>
        <Globe ref={globe} ringsData={labels} {...globeProps} />
      </div>
      {labels.map(({ id, ...labelProps }) =>
        labelCoords[id] ? (
          <Label
            key={id}
            {...labelProps}
            style={{
              left: labelCoords[id]?.x + 130,
              top: labelCoords[id]?.y - 10,
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default Community;
