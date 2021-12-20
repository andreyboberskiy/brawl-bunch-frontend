import { vacancies } from "modules/Careers/config";

import JobCard from "./components/JobCard";

import s from "./Careers.module.scss";

const Careers = () => (
  <div className={s.container}>
    <h3 className={s.title}>We're hiring!</h3>
    <p className={s.subtitle}>
      Join more than 150 talented people around the world.
    </p>
    <div className={s.cardsContainer}>
      {vacancies.map((job, index) => (
        <JobCard key={index} {...job} className={s.jobCard} />
      ))}
    </div>
  </div>
);

export default Careers;
