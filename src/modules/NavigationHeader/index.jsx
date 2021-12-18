import Button from "components/ui/Button";
import routesByName from "constants/routesByName";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { buttonsConfig } from "./config";

import s from "./NavigationHeader.module.scss";

const NavigationHeader = () => {
  const navigate = useNavigate();

  const pushToCommunity = useCallback(() => {
    navigate(routesByName.community);
  }, [navigate]);

  return (
    <div className={`flex-between secondary-color-bg ${s.container}`}>
      <div className="cursor-pointer" onClick={pushToCommunity}>
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
