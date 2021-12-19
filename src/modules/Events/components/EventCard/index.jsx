import PropTypes from "prop-types";

import dateIcon from "assets/images/icons/date.svg";

import s from "./EventCard.module.scss";

const colorsByLevel = {
  1: "#7033FF",
  2: "#39DEBE",
  3: "#141437",
  4: "#FFA63F",
  5: "#F65164",
  10: "#7033FF",
};

const EventCard = ({
  levelNumber,
  title,
  desc,
  lang,
  dateLabel,
  peopleData,
}) => (
  <div className={s.container}>
    <div className="flex alignCenter">
      <span
        className={s.levelCircle}
        style={{ background: colorsByLevel[levelNumber] }}
      />
      <p className={s.levelLabel}>Level {levelNumber}</p>
    </div>
    <h5 className={s.title}>{title}</h5>
    <span className={s.lang}>{lang}</span>
    <p className={s.desc}>{desc}</p>
    <div className="flex-between mt-4">
      <div className="alignCenter flex">
        <img className={s.dateIcon} src={dateIcon} alt="Event date" />
        <span className={s.dateLabel}>{dateLabel}</span>
      </div>
      <div className={s.peopleContainer}>
        {peopleData.imgs.map((peopleImg, index) => (
          <img key={index} src={peopleImg} alt="Person Event" />
        ))}
        <span>{peopleData.count}+</span>
      </div>
    </div>
    <button className={s.button}>+ Join to event</button>
  </div>
);

EventCard.propTypes = {
  levelNumber: PropTypes.number,
  title: PropTypes.string,
  lang: PropTypes.string,
  desc: PropTypes.string,
  dateLabel: PropTypes.string,
  peopleData: PropTypes.shape({
    count: PropTypes.number,
    imgs: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default EventCard;
