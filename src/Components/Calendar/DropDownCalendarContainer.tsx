import React from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
// import {withRouter} from 'react-router-dom'
import {GlobalState} from "../../Data/redux-store"
import {
    TCalendars,
    TSetClickedMonthDay,
    SetClickedMonthDay, TCurrentDate, TClickedDay,
} from "../../Data/CalendarReducer";
import DropDownCalendar from "./DropDownCalendar";

export type TDropDownCalendarContainerOwnProps = {}

export type T_MSTP_DropDownCalendarContainer = {
    Calendars: TCalendars
    ClickedMonthDay: TClickedDay
    CurrentDate : TCurrentDate
}

export type T_MDTP_DropDownCalendarContainer = {
    SetClickedMonthDay: TSetClickedMonthDay
}


type TDropDownCalendarContainerProps = T_MDTP_DropDownCalendarContainer
    & T_MSTP_DropDownCalendarContainer & TDropDownCalendarContainerOwnProps

class DropDownCalendarContainer extends React.Component<TDropDownCalendarContainerProps> {
    render() {
        return <DropDownCalendar {...this.props} />
    }
}

let StateToProps = (state: GlobalState): T_MSTP_DropDownCalendarContainer => ({
    Calendars: state.CalendarData.Calendars,
    ClickedMonthDay: state.CalendarData.ClickedMonthDay,
    CurrentDate : state.CalendarData.CurrentDate

})

export default compose(connect<T_MSTP_DropDownCalendarContainer,
    T_MDTP_DropDownCalendarContainer,
    TDropDownCalendarContainerOwnProps, GlobalState>
(StateToProps, {SetClickedMonthDay}))(DropDownCalendarContainer)