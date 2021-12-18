import BigTotalCard from "modules/Community/components/BigTotalCard";
import SmallTotalCard from "modules/Community/components/SmallTotalCard";

import s from "./Community.module.scss";

const Community = () => {
  return (
    <div className={s.container}>
      <div className={s.smallTotalCard}>
        <SmallTotalCard />
      </div>
      <div className={s.bigTotalCard}>
        <BigTotalCard />
      </div>
    </div>
  );
};

export default Community;
