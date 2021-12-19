import s from "./JobCard.module.scss";

const JobCard = ({ title, status, dateLabel }) => (
  <div className={s.container}>
    <p className={s.title}>{title}</p>
    <p className={s.date}>{dateLabel}</p>
    <p className={s.status}>{status}</p>
  </div>
);

export default JobCard;
