import React, { createContext } from "react";

const valueConfigContext = {
    apiKey: "5530df0cb02278ba7e6ce0ce77d964cb",
    urlImages: "https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg",
    perPage: "6",
    defaultTag: "Montain",
    period: "moth",
    count: "20"
}

export const ConfigContext = createContext(valueConfigContext);

export const ConfigContextProvider = ({children}: {children: React.ReactNode}): React.ReactElement => {
  return (
    <ConfigContext.Provider value={valueConfigContext}>
      {children}
    </ConfigContext.Provider>
  );
};
