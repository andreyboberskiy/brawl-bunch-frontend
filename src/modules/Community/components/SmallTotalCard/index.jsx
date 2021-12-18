import RiseDown from "components/ui/RiseDown";

import smallChartImg from "assets/images/community/smallChart.png";

import s from "./SmallTotalCard.module.scss";

const SmallTotalCard = () => {
  return (
    <div className={s.container}>
      <img className={s.chartImg} src={smallChartImg} alt="Community" />
      <span className={s.darkLabel}>Total community</span>
      <div className="flex mt-1">
        <span className={s.number}>9,542,240</span>
        <RiseDown value={5} />
      </div>
      <span className={s.darkerLabel}>Compared to 477,112 last year</span>
    </div>
  );
};

export default SmallTotalCard;
