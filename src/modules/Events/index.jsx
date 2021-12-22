import { events } from "modules/Events/config";

import EventCard from "modules/Events/components/EventCard";

import s from "./Events.module.scss";

const Events = () => (
  <div className={s.container}>
    <h4 className={s.title}>Our events</h4>
    <p className={s.subtitle}>
      Upgrade to watch, play, learn, make and discover
    </p>
    <div className={s.eventsContainer}>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </div>
);

export default Events;
