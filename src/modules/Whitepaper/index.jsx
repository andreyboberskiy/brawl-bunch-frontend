import TextPageByConfig from "components/common/TextPageByConfig";
import whitepaperConfig from "modules/Whitepaper/whitepaperConfig";

const Whitepaper = () => {
  return (
    <TextPageByConfig
      config={whitepaperConfig}
      header=" A Fully Decentralised RPG and Collection Game Built On The Immutable X
        L2 Network Whitepaper V3.4"
    />
  );
};

export default Whitepaper;
