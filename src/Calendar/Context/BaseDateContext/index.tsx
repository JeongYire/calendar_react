import { createContext, useContext } from "react";

export type BaseDateContextType = {
    baseDate: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const BaseDateContext = createContext<BaseDateContextType>(null!);

export const useBaseDate = () => {
    return useContext<BaseDateContextType>(BaseDateContext);
};
