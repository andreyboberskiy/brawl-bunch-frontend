import homeBg from "assets/images/home/home-bg.png";

import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div
      className={s.container}
      style={{
        backgroundImage: `url(${homeBg})`,
      }}
    >
      <div className={s.textContainer}>
        <h1>BrawlBunch</h1>
        <p>
          A grand strategy game of space exploration, territorial conquest,
          political domination, and more.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
