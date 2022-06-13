import { useContext } from "react";
import { BaseDateContext, CalendarColumnContext } from "../../Context";
import DayBlock from "../DayBlock";

const WeekBlock = () => {
    const { baseDate } = useContext(BaseDateContext); 
    const { targetDate } = useContext(CalendarColumnContext);
    const { today } = useContext(CalendarColumnContext);

    const isSameMonth = () : boolean => targetDate.getMonth() === baseDate.getMonth();
    const isToday = () => isSameMonth() && targetDate.getMonth() === today.current.getMonth() && targetDate.getDate() === today.current.getDate();

    const dayArray : JSX.Element[] = [];

    for( let i = 0; i < 7; i++ ){

        const date = targetDate.getDate();

        if(isToday()){
        dayArray.push(<DayBlock day = {date} key = {"DAY_" + date} className='isToday'/>)
        }else if(!isSameMonth()){
        dayArray.push(<DayBlock day = {date} key = {"DAY_" + date} className='notMonth'/>)
        }else{
        dayArray.push(<DayBlock day = {date} key = {"DAY_" + date} className=''/>)
        }

        targetDate.setDate(date + 1);
        
    }

    return (
        <div className='weekBlock'>
        {
            dayArray.map((oneDay) => {
            return oneDay;
            })
        }
        </div>
    )

}

export default WeekBlock;