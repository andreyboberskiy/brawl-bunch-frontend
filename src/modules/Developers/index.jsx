import { developers } from "./config";

import s from "./Developers.module.scss";

const Developers = () => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>Our team</h3>
      <div className="mt-2">
        {developers.map(({ department, people }, index) => (
          <div className="mt-5" key={index}>
            <h4 className={s.departmentTitle}> {department}</h4>
            <div className={s.delimiter} />
            {people.map(({ name, position, social }) => (
              <div className="flex-between">
                <p className={s.label}>{name}</p>
                <p className={s.label}>{position}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.label}
                >
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
