import Button from "components/ui/Button";

import { buttonsConfig } from "./config";

import s from "./NavigationHeader.module.scss";

const NavigationHeader = () => {
  return (
    <div className={`flex-between secondary-color-bg ${s.container}`}>
      <div className="cursor-pointer">
        <h1 className={s.logoText}>brawl bunch</h1>
      </div>
      <div className="flex-between">
        {buttonsConfig.map(({ label, handler }) => (
          <span key={label} onClick={handler} className={s.buttonText}>
            {label}
          </span>
        ))}
        <Button variant="blue" className="ml-3">
          INSTALL NOW
        </Button>
      </div>
    </div>
  );
};

export default NavigationHeader;
