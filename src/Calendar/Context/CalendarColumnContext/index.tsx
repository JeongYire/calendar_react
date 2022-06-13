import { createContext } from "react";

export type CalendarColumnContextType = {
    targetDate: Date;
    today: React.MutableRefObject<Date>;
};

export const CalendarColumnContext = createContext<CalendarColumnContextType>(
    null!
);
