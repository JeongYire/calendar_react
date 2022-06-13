import { useContext } from "react";
import { BaseDateContext } from "../Context";
import CalendarButton from "../CalendarButton";

const YearBlock = () => {
    const {baseDate} : {baseDate : Date} = useContext(BaseDateContext);
    return (
      <div id="yearBlock">
          <span>{baseDate.getFullYear()}년</span>
          <CalendarButton />
      </div>
    )
}

export default YearBlock;