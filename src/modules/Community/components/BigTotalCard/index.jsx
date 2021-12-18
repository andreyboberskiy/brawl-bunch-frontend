import RiseDown from "components/ui/RiseDown";

import ballsImg from "assets/images/community/balls.png";
import { stats } from "modules/Community/components/BigTotalCard/config";

import s from "./BigTotalCard.module.scss";

const StatItem = ({ label, count, valueLabel, changeValue, noMargin }) => (
  <div
    className={`w100 flex flex-between alignCenter ${noMargin ? "" : "mt-3"}`}
  >
    <span className={s.whiteLabel}>{label}</span>
    <span className={s.darkLightLabel}>{count}</span>
    <span className={s.whiteLabel}>{valueLabel}</span>
    <RiseDown value={changeValue} size={14} />
  </div>
);

const BigTotalCard = () => {
  return (
    <div className={s.container}>
      <span className={s.darkLabel}>Total community</span>
      <div className="flex mt-1 alignCenter">
        <span className={s.number}>9,542,240</span>
        <RiseDown value={5} size={16} />
      </div>
      <span className={s.darkerLabel}>Compared to 477,112 last year</span>

      <img className={s.ballsImg} src={ballsImg} alt="Community balls" />
      <div className="mt-4">
        {stats.map((item, index) => (
          <StatItem {...item} noMargin={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default BigTotalCard;
