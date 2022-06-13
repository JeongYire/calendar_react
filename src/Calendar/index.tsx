import React from "react";
import "../css/calendar.css";
import { BaseDateContext } from "./Context";
import YearBlock from "./YearBlock";
import MonthBlock from "./MonthBlock";
import DayOfWeekBlock from "./DayOfWeekBlock";
import CalendarColumnBlock from "./CalendarColumnBlock";

const Calendar = () => {
    const [baseDate, setDate] = React.useState(
        () => new Date(new Date().setDate(1))
    );

    return (
        <div id="calendar">
            <BaseDateContext.Provider value={{ baseDate, setDate }}>
                <YearBlock />
                <MonthBlock />
                <DayOfWeekBlock />
                <CalendarColumnBlock />
            </BaseDateContext.Provider>
        </div>
    );
};

export default Calendar;
