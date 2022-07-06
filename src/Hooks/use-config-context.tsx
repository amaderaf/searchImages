import { useContext } from "react";
import { ConfigContext } from "Context";

const useConfigContext = () => {
  return useContext(ConfigContext);
};

export default useConfigContext;
