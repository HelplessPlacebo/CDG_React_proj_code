import React from "react";
import {
    TCalendar,
    TClickedDay,
    TCurrentDate,
    TSetClickedMonthDay,
} from "../../Redux/CalendarReducer";
import CS from "./Calendar.module.css"
import {CalendarDay} from "./CalendarDay";
import {randomInteger, TWorklogBlock} from "../../Redux/WorkLogsReducer";
import {DropDownCalendarFooterElement} from "./DropDownCalendarFooterElement";

export type TDropDownCalendarProps = {
    Calendar: TCalendar
    ClickedMonthDay: TClickedDay
    SetClickedMonthDay: TSetClickedMonthDay
    CurrentDate: TCurrentDate
    WorklogsBlocks: Array<TWorklogBlock>
}

export const DropDownCalendar: React.FC<TDropDownCalendarProps> = (props) => {
    const DaysNamesArr = ["S", "M", "T", "W", "T", "F", "S"]

    return (<div className={CS.DropDownCalendar}>
        <div className={CS.DropDownCalendarHeader}>
            {props.CurrentDate.CurrentMonth}
        </div>
        <div className={CS.DropDOwnCalendarContentContainer}>
            <div className={CS.DropDownCalendarContent}>

                {DaysNamesArr.map(el => {
                    return <div key={randomInteger(0, 10000)} className={CS.DropDownCalendarDayNames}>
                        {el}
                    </div>
                })}

                {
                    props.Calendar[props.CurrentDate.CurrentMonth].map(day => {
                        return <CalendarDay ClickedMonthDay={props.ClickedMonthDay}
                                            CurrentDay={props.CurrentDate.CurrentDay}
                                            MonthName={props.CurrentDate.CurrentMonth}
                                            key={day.id}
                                            SetClickedMonthDay={props.SetClickedMonthDay}
                                            {...day}
                                            WorklogsBlocks={props.WorklogsBlocks}
                        />
                    })}

            </div>
        </div>
        <div className={CS.DropDownCalendarFooterContainer}>

            <div className={CS.DropDownCalendarFooter}>
                <DropDownCalendarFooterElement status={"ok"} text={"Done"}/>
                <DropDownCalendarFooterElement status={"warning"} text={"In progress"}/>
                <DropDownCalendarFooterElement status={"danger"} text={"Missed"}/>
                <DropDownCalendarFooterElement status={"empty"} text={"no activity"}/>
            </div>
        </div>
    </div>)
}
