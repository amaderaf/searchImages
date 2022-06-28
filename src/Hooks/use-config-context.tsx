import { useContext } from "react";
import ConfigContext from "../Context/ConfigContext";

const useConfigContext = () => {
  return useContext(ConfigContext);
};

export default useConfigContext;
