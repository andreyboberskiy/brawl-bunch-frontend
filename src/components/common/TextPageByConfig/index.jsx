import s from "./TextPageByConfig.module.scss";

const TextPageByConfig = ({ config, header }) => (
  <div className={s.container}>
    {header && <h3 className={s.headerTitle}>{header}</h3>}
    {Object.entries(config).map(([key, texts]) => {
      return texts.map((text, index) =>
        index === 0 ? (
          <h4 key={index} className={s.headerSubtitle} data-anchor={key}>
            {text}
          </h4>
        ) : (
          <p key={index} className={s.text}>
            {text}
          </p>
        )
      );
    })}
  </div>
);

export default TextPageByConfig;
