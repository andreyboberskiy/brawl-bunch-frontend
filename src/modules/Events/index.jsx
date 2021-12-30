import routesByName from "constants/routesByName";
import { useNavigate } from "react-router-dom";

import { events } from "modules/Events/config";

import EventCard from "modules/Events/components/EventCard";

import s from "./Events.module.scss";

const Events = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(routesByName.developers);
  };
  return (
    <div className={s.container}>
      <h4 className={s.title}>Our news</h4>
      <p className={s.subtitle}>
        Upgrade to watch, play, learn, make and discover
      </p>
      <div className={s.eventsContainer}>
        {events.map((event, index) => (
          <EventCard onClick={onClick} key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
