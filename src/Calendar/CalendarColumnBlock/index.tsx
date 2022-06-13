import { useRef } from "react";
import { CalendarColumnContext } from "../Context";
import { BaseDateContextType, useBaseDate } from "../Context/BaseDateContext";
import WeekBlock from "./WeekBlock";

const CalendarColumnBlock = () => {
    const { baseDate }: Pick<BaseDateContextType, "baseDate"> = useBaseDate();
    const today = useRef(new Date());

    const targetDate = new Date(baseDate);
    targetDate.setDate(targetDate.getDate() - targetDate.getDay());

    return (
        <div id="calendarBlock">
            <CalendarColumnContext.Provider value={{ targetDate, today }}>
                <WeekBlock />
                <WeekBlock />
                <WeekBlock />
                <WeekBlock />
                <WeekBlock />
                <WeekBlock />
            </CalendarColumnContext.Provider>
        </div>
    );
};

export default CalendarColumnBlock;
