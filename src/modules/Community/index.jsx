import { isEqual } from "lodash";
import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "react-globe.gl";

import BigTotalCard from "modules/Community/components/BigTotalCard";
import SmallTotalCard from "modules/Community/components/SmallTotalCard";
import { Label } from "modules/Community/components/Label";

import { labels } from "modules/Community/config";
import MediaQuery, { useMediaQuery } from "react-responsive";

import s from "./Community.module.scss";

const colorInterpolator = (t) => `rgba(57, 222, 190,${Math.sqrt(1 - t)})`;

const globeProps = {
  showGlobe: true,
  showAtmosphere: false,
  // atmosphereColor: "#69A6E5",
  // atmosphereAltitude: 0.1,
  globeImageUrl: "//unpkg.com/three-globe/example/img/earth-night.jpg",
  backgroundColor: "#121b24",
  ringColor: () => colorInterpolator,
  ringMaxRadius: 3,
  ringPropagationSpeed: 0.9,
  ringRepeatPeriod: 700,
};

const Community = () => {
  const globe = useRef();

  const maxWidth1200 = useMediaQuery({ maxWidth: 1200 });
  const maxWidth770 = useMediaQuery({ maxWidth: 770 });
  const maxWidth420 = useMediaQuery({ maxWidth: 420 });

  const [globD, setGlobD] = useState(0);

  useEffect(() => {
    globe.current.pointOfView({
      altitude: maxWidth420 ? 4 : maxWidth770 ? 3 : 2,
      lat: 40,
      lng: 40,
    });
    globe.current.controls().autoRotate = true;
    globe.current.controls().autoRotateSpeed = 0.3;
    globe.current.controls().enableZoom = false;
  }, [maxWidth770, maxWidth420]);

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

  const [ready, setReady] = useState(false);

  const handleReady = () => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  };

  useEffect(() => {
    if (ready) {
      const northPole = globe.current.getScreenCoords(90, 0);
      const southPole = globe.current.getScreenCoords(-90, 0);
      const globeDiameter = southPole.y - northPole.y;

      setGlobD(globeDiameter * 1.32);
    }
  }, [ready]);

  return (
    <div className={s.container}>
      <MediaQuery minWidth={1300}>
        <div className={s.smallTotalCard}>
          <SmallTotalCard />
        </div>
        <div className={s.bigTotalCard}>
          <BigTotalCard />
        </div>
      </MediaQuery>
      <div
        className={s.borderMask}
        style={{
          opacity: ready ? 1 : 0,
          width: `${globD}px`,
          height: `${globD}px`,
        }}
      />

      <div className={s.globe}>
        <Globe
          ref={globe}
          ringsData={labels}
          onGlobeReady={handleReady}
          {...globeProps}
        />
      </div>
      {labels.map(({ id, ...labelProps }) =>
        labelCoords[id] ? (
          <Label
            key={id}
            {...labelProps}
            style={{
              left: labelCoords[id]?.x + (maxWidth1200 ? 0 : 130),
              top: labelCoords[id]?.y - 10,
            }}
          />
        ) : null
      )}
      {/*<MediaQuery maxWidth={1300}>*/}
      {/*  <div className={s.smallTotalCardBottom}>*/}
      {/*    <SmallTotalCard />*/}
      {/*  </div>*/}
      {/*  <div className={s.bigTotalCardBottom}>*/}
      {/*    <BigTotalCard />*/}
      {/*  </div>*/}
      {/*</MediaQuery>*/}
    </div>
  );
};

export default Community;
