import { useContext } from "react";
import { BaseDateContext } from "../Context";
import CalendarButton from "../CalendarButton";
import { BaseDateContextType } from "../Context/BaseDateContext";

const YearBlock = () => {
    const { baseDate }: Pick<BaseDateContextType, "baseDate"> =
        useContext<BaseDateContextType>(BaseDateContext);
    return (
        <div id="yearBlock">
            <span>{baseDate.getFullYear()}년</span>
            <CalendarButton />
        </div>
    );
};

export default YearBlock;
