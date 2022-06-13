import { createContext } from "react";

export type BaseDateContextType = {
    baseDate: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const BaseDateContext = createContext<BaseDateContextType>(null!);
