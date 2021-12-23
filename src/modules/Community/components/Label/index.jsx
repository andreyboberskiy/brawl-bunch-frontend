import s from "./Label.module.scss";

const colorsByText = {
  Telegram: { color: "#39DEBE", bg: "rgba(57, 222, 190, 0.2)" },
  Discord: { color: "#7033FF", bg: "rgba(112, 51, 255, 0.2)" },
  Facebook: { color: "#F65164", bg: "rgba(246, 81, 100, 0.2)" },
  Twitter: { color: "#FFA63F", bg: "rgba(255, 166, 63, 0.2)" },
};

export const Label = ({ text, link, style }) => {
  return (
    <div className={s.labelContainer} style={style}>
      <div className={s.innerContainer}>
        <div
          className={s.circleContainer}
          style={{
            borderColor: colorsByText[text].color,
            backgroundColor: colorsByText[text].bg,
          }}
        >
          <span
            className={s.circleText}
            style={{ color: colorsByText[text].color }}
          >
            {text[0]}
          </span>
        </div>
        <div className={s.labelText}>
          <p>{text}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Join now
          </a>
        </div>
        <span className={s.triangle} />
      </div>
    </div>
  );
};
