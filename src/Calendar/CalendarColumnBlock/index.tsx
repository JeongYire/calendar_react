import { useContext, useRef } from "react";
import { BaseDateContext, CalendarColumnContext } from "../Context";
import WeekBlock from "./WeekBlock";

const CalendarColumnBlock = () => {
    const {baseDate} : {baseDate : Date} = useContext(BaseDateContext);
    const today = useRef(new Date());

    const targetDate = new Date(baseDate);
    targetDate.setDate(targetDate.getDate()-targetDate.getDay());

    return (
      <div id="calendarBlock">
        <CalendarColumnContext.Provider value={{targetDate,today}}>
            <WeekBlock />
            <WeekBlock />
            <WeekBlock />
            <WeekBlock />
            <WeekBlock />
            <WeekBlock />
        </CalendarColumnContext.Provider>
      </div>
    );
}

export default CalendarColumnBlock;