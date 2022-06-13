import CalendarButton from "../CalendarButton";
import { BaseDateContextType, useBaseDate } from "../Context/BaseDateContext";

const YearBlock = () => {
    const { baseDate }: Pick<BaseDateContextType, "baseDate"> = useBaseDate();
    return (
        <div id="yearBlock">
            <span>{baseDate.getFullYear()}년</span>
            <CalendarButton />
        </div>
    );
};

export default YearBlock;
