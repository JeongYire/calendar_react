import { createContext, useContext } from "react";

export type CalendarColumnContextType = {
    targetDate: Date;
    today: React.MutableRefObject<Date>;
};

export const CalendarColumnContext = createContext<CalendarColumnContextType>(
    null!
);

export const useCalendarColumnContext = () => {
    return useContext<CalendarColumnContextType>(CalendarColumnContext);
};
