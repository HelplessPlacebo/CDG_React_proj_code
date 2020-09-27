import {GlobalState} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {API} from "../API/requests"

const ADD_WORKLOG = "WORKLOGS/ADD_WORKLOG"
const DEL_WORKLOG = "WORKLOGS/DEL_WORKLOG"
const SET_IS_PLAYING_WORKLOG_BY_ID = "WORKLOGS/SET_IS_PLAYING_WORKLOG_BY_ID"
const CHANGE_WORKLOG = "WORKLOGS/CHANGE_WORKLOG"
const SET_WORKLOG_TO_CHANGE = "WORKLOGS/SET_WORKLOG_TO_CHANGE"
const ADD_TO_FAVORITE = "WORKLOGS/ADD_TO_FAVORITE"
const SET_WORKLOG_STATUS = "WORKLOGS/SET_WORKLOG_STATUS"

export const randomInteger = (min: number, max: number): number => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export type TNestingItem = {
    StartTime: string | null
    EndTime: string | null
    JiraCode: string | null
    TaskField: string | null
    status: "ok" | "warning" | "danger" | string
    Issue?: string
    id: number
    TimerValue: string | null
    IsFavorites : boolean
}

export type TBlockInfo = {
    BlockCreatedDate: string
    SummaryStatus: "ok" | "warning" | "danger" | string
    SummaryTime: string | null
    id: number
}

export type TWorkLog = {
    StartTime: string | null
    EndTime: string | null
    JiraCode: string | null
    TaskField: string | null
    status: "ok" | "warning" | "danger" | string
    TimerValue: string | null
    IsNesting?: boolean
    NestingItems?: Array<TNestingItem>
    id: number
    Issue?: string
    ParentId?: number
    IsFavorites : boolean
}

export type  TWorklogBlock = {
    BlockInfo: TBlockInfo
    Worklogs: Array<TWorkLog>
}

export type TTimerData = {
    TimerValue: string
    TimerIssue: string
    TimerTaskField: string
}
export type TSendWorklogsData = {
    WorkLogsBlocks: TWorklogBlock
}

let DefaultState = {
    WorkLogsBlocks: [{
        BlockInfo: {
            BlockCreatedDate: "Wed,September 28",
            SummaryStatus: "ok",
            SummaryTime: "07:05:00",
            id: 1
        },
        Worklogs: [{
            StartTime: "09:00",
            EndTime: "11:00",
            JiraCode: "JRM-310",
            TaskField: "Team standup",
            status: "warning",
            IsNesting: false,
            TimerValue: "02:00:00",
            id: 444553452341241,
            IsFavorites : false
        }, {
            StartTime: "10:00",
            EndTime: "11:15",
            JiraCode: "JRM-310",
            TaskField: "Meeting with QA",
            status: "ok",
            IsNesting: false,
            TimerValue: "01:15:00",
            id: 213124124125122,
            IsFavorites : false
        }, {
            StartTime: "09:00",
            EndTime: "10:00",
            JiraCode: "JRM-310",
            TaskField: "Company Branding",
            status: "warning",
            IsNesting: true,
            TimerValue: "03:50:00",
            id: 2131241255143,
            IsFavorites : false,
            NestingItems: [{
                StartTime: "11:30",
                EndTime: "13:00",
                JiraCode: "JRM-310",
                TaskField: "Marketing strategy",
                status: "warning",
                id: 123213213244,
                TimerValue: "01:30:00",
                IsFavorites : false,
            }, {
                StartTime: "13:20",
                EndTime: "16:00",
                JiraCode: "JRM-310",
                TaskField: "Moodboarding",
                status: "ok",
                id: 1232312351245,
                TimerValue: "03:20:00",
                IsFavorites : false
            }]
        }]
    },
        {
            BlockInfo: {
                BlockCreatedDate: "Wed,September 27",
                SummaryStatus: "warning",
                SummaryTime: "06:05:00",
                id: 2
            },
            Worklogs: [{
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Team standup",
                status: "danger",
                IsNesting: false,
                TimerValue: "01:00:00",
                id: 444553452341246,
                IsFavorites : false
            }, {
                StartTime: "10:00",
                EndTime: "11:15",
                JiraCode: "JRM-310",
                TaskField: "Meeting with QA",
                status: "ok",
                IsNesting: false,
                TimerValue: "01:15:00",
                id: 213124124125127,
                IsFavorites : false
            }, {
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Company Branding",
                status: "warning",
                IsNesting: true,
                TimerValue: "03:50:00",
                id: 2131241255148,
                IsFavorites : false,
                NestingItems: [{
                    StartTime: "11:30",
                    EndTime: "13:00",
                    JiraCode: "JRM-310",
                    TaskField: "Marketing strategy",
                    status: "warning",
                    id: 123213213249,
                    TimerValue: "01:30:00",
                    IsFavorites : false
                }, {
                    StartTime: "13:20",
                    EndTime: "16:00",
                    JiraCode: "JRM-310",
                    TaskField: "Moodboarding",
                    status: "ok",
                    id: 12323123512410,
                    TimerValue: "03:20:00",
                    IsFavorites : false
                }]
            }]
        },
        {
            BlockInfo: {
                BlockCreatedDate: "Wed,September 26",
                SummaryStatus: "warning",
                SummaryTime: "06:05:00",
                id: 3
            },
            Worklogs: [{
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Team standup",
                status: "danger",
                IsNesting: false,
                TimerValue: "01:00:00",
                id: 4445534523412411,
                IsFavorites : false
            }, {
                StartTime: "10:00",
                EndTime: "11:15",
                JiraCode: "JRM-310",
                TaskField: "Meeting with QA",
                status: "ok",
                IsNesting: false,
                TimerValue: "01:15:00",
                id: 2131241241251212,
                IsFavorites : false
            }, {
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Company Branding",
                status: "warning",
                IsNesting: true,
                TimerValue: "03:50:00",
                id: 21312412551413,
                IsFavorites : false,
                NestingItems: [{
                    StartTime: "11:30",
                    EndTime: "13:00",
                    JiraCode: "JRM-310",
                    TaskField: "Marketing strategy",
                    status: "warning",
                    id: 1232132132414,
                    TimerValue: "01:30:00",
                    IsFavorites : false
                }, {
                    StartTime: "13:20",
                    EndTime: "16:00",
                    JiraCode: "JRM-310",
                    TaskField: "Moodboarding",
                    status: "ok",
                    id: 12323123512415,
                    TimerValue: "03:20:00",
                    IsFavorites : false
                }]
            }]
        },
        {
            BlockInfo: {
                BlockCreatedDate: "Wed,September 25",
                SummaryStatus: "warning",
                SummaryTime: "06:05:00",
                id: 4
            },
            Worklogs: [{
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Team standup",
                status: "danger",
                IsNesting: false,
                TimerValue: "01:00:00",
                id: 4445534523412416,
                IsFavorites : false
            }, {
                StartTime: "10:00",
                EndTime: "11:15",
                JiraCode: "JRM-310",
                TaskField: "Meeting with QA",
                status: "ok",
                IsNesting: false,
                TimerValue: "01:15:00",
                id: 2131241241251217,
                IsFavorites : false
            }, {
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Company Branding",
                status: "warning",
                IsNesting: true,
                TimerValue: "03:50:00",
                id: 21312412551418,
                IsFavorites : false,
                NestingItems: [{
                    StartTime: "11:30",
                    EndTime: "13:00",
                    JiraCode: "JRM-310",
                    TaskField: "Marketing strategy",
                    status: "warning",
                    id: 1232132132419,
                    TimerValue: "01:30:00",
                    IsFavorites : false
                }, {
                    StartTime: "13:20",
                    EndTime: "16:00",
                    JiraCode: "JRM-310",
                    TaskField: "Moodboarding",
                    status: "ok",
                    id: 12323123512420,
                    TimerValue: "03:20:00",
                    IsFavorites : false
                }]
            }]
        }, {
            BlockInfo: {
                BlockCreatedDate: "Tue,September 24",
                SummaryStatus: "ok",
                SummaryTime: "08:00:00",
                id: 5
            },
            Worklogs: [{
                StartTime: "09:00",
                EndTime: "10:00",
                JiraCode: "JRM-310",
                TaskField: "Team standup",
                status: "ok",
                IsNesting: false,
                TimerValue: "01:00:00",
                id: 31232175895321,
                IsFavorites : false
            },
                {
                    StartTime: "10:00",
                    EndTime: "11:15",
                    JiraCode: "JRM-310",
                    TaskField: "Meeting with QA",
                    status: "ok",
                    IsNesting: false,
                    TimerValue: "01:15:00",
                    id: 76967845623522,
                    IsFavorites : false
                }, {
                    StartTime: "11:00",
                    EndTime: "13:15",
                    JiraCode: "JRM-310",
                    TaskField: "Company Branding",
                    status: "warning",
                    IsNesting: false,
                    TimerValue: "03:50:00",
                    id: 12312434256623,
                    IsFavorites : false
                }
            ]
        }] as Array<TWorklogBlock>,
    PlayingWorklog: {} as TWorkLog,
    WorklogToChange: undefined as TWorkLog | undefined
}

export const SearchWorklogBlock = (MonthName: string, DayNumber: number): Element | null => {
    let StateCopy: DefaultWorklogsState = JSON.parse(JSON.stringify(DefaultState))
    let WorklogsBlockToBeScrolled: HTMLElement | null = null
    StateCopy.WorkLogsBlocks.map(el => {
        let [Month, Day] = [...el.BlockInfo.BlockCreatedDate?.split(",")[1].split(" ")]

        if (Month === MonthName && Number.parseInt(Day) === DayNumber) {
            WorklogsBlockToBeScrolled = document.getElementById(el.BlockInfo.id.toString())
        }
    })
    return WorklogsBlockToBeScrolled
}


type  DefaultWorklogsState = typeof DefaultState


type TWorklogsReducerActions = ReturnType<TAddWorklog> | ReturnType<TDeleteWorklog>
    | ReturnType<TSetIsPlayingWorklogById> | ReturnType<TChangeWorklog>
    | ReturnType<TSetWorklogToChange> | ReturnType<TAddToFavorite> | ReturnType<TSetWorklogStatus>

type TWorklogsThunks = ThunkAction<Promise<void>, GlobalState, unknown, TWorklogsReducerActions>

const WorklogsReducer = (state = DefaultState, action: TWorklogsReducerActions): DefaultWorklogsState => {

    const GetWorklogsBlockCopy = () => {
        return JSON.parse(JSON.stringify(state.WorkLogsBlocks))
    }


    const FindWorklogById = (id: number | undefined, ParentId?: number | null) => {
        let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()
        let SoughtWorklog = {} as TWorkLog
        let WorklogBlockIndex = undefined as number | undefined
        let WorklogIndex = undefined as number | undefined
        let NestingWorklogIndex = undefined as number | undefined

        WorklogsBlocksCopy.map((WorklogBlock, Index) => {
            WorklogBlock.Worklogs.map((Worklog, WLIndex) => {

                if (ParentId) {
                    Worklog.NestingItems?.map((NestingItem, NestingIndex) => {
                        if (NestingItem.id === id) {
                            let SoughtNestingItem = {
                                ...NestingItem,
                                ParentId
                            }
                            //@ts-ignore
                            SoughtWorklog = SoughtNestingItem
                            WorklogBlockIndex = Index
                            NestingWorklogIndex = NestingIndex
                            WorklogIndex = WLIndex
                        }
                    })
                } else {
                    if (Worklog.id === id) {
                        WorklogBlockIndex = Index
                        SoughtWorklog = Worklog
                        WorklogIndex = WLIndex
                    }
                }
            })
        })
        return {SoughtWorklog, WorklogBlockIndex, WorklogIndex, NestingWorklogIndex}
    }

    switch (action.type) {
        case ADD_WORKLOG: {

            let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()

            let WorklogToCreate: TWorkLog
            let EmptyWorklog: TWorkLog = {
                StartTime: null,
                EndTime: null,
                id: randomInteger(0, 10000),
                NestingItems: undefined,
                TaskField: null,
                Issue: undefined,
                TimerValue: "00:00:00",
                JiraCode: "JRM-310",
                status: "danger",
                IsNesting: false,
                ParentId: undefined,
                IsFavorites : !!action.IsFavorites
            }

            action.NewWorklog
                ? WorklogToCreate = action.NewWorklog
                : WorklogToCreate = EmptyWorklog

            if (action.to) {
                WorklogsBlocksCopy.map(el => {
                    if (el.BlockInfo.BlockCreatedDate === action.to) {
                        el.Worklogs.unshift(WorklogToCreate)

                    }
                })
            } else {
                WorklogsBlocksCopy[0].Worklogs.unshift(WorklogToCreate)
            }

            return {
                ...state,
                WorkLogsBlocks: WorklogsBlocksCopy,
                PlayingWorklog: WorklogToCreate
            }
        }

        case SET_IS_PLAYING_WORKLOG_BY_ID: {
            let SoughtWorklog = FindWorklogById(action.ElementId, action.ParentId).SoughtWorklog
            return {
                ...state,
                //@ts-ignore
                PlayingWorklog: action.IsPlaying ?
                    SoughtWorklog
                    : {}
            }
        }
        case CHANGE_WORKLOG: {
            let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()
            WorklogsBlocksCopy.map(WB => WB.Worklogs.map(Worklog => {
                if (action.parentId) {
                    if (Worklog.id === action.NewWlParentId) {
                        Worklog.NestingItems?.map(NestingItem => {
                            if (NestingItem.id === action.WorkLogId) {
                                NestingItem.TimerValue = action.NewWorklog.TimerValue
                                NestingItem.Issue = action.NewWorklog.Issue
                                NestingItem.TaskField = action.NewWorklog.TaskField
                                NestingItem.EndTime = action.NewWorklog.EndTime
                                NestingItem.StartTime = action.NewWorklog.StartTime
                                //  NestingItem.EndTime = action.NewWorklog.EndTime
                            }
                        })
                    }
                } else {
                    if (Worklog.id === action.WorkLogId) {
                        Worklog.TimerValue = action.NewWorklog.TimerValue
                        Worklog.Issue = action.NewWorklog.Issue
                        Worklog.TaskField = action.NewWorklog.TaskField
                        Worklog.StartTime = action.NewWorklog.StartTime
                        Worklog.EndTime = action.NewWorklog.EndTime
                        Worklog.status = action.NewWorklog.status

                        // Worklog.EndTime = action.NewWorklog.EndTime
                    }
                }
            }))
            return {
                ...state,
                WorkLogsBlocks: WorklogsBlocksCopy
            }
        }
        case DEL_WORKLOG: {
            let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()
            let NewWorklogs: Array<Array<TWorkLog>> = []
            let NewNestingWorklogs: Array<Array<TNestingItem> | undefined> = []

            WorklogsBlocksCopy.map((el, index) => {
                if (action.DelParentId) {
                    el.Worklogs.map((Worklog, WLIndex) => {
                        if (Worklog.id === action.DelParentId) {
                            NewNestingWorklogs.push(Worklog.NestingItems?.filter(NestingItem => NestingItem.id !== action.DelWorklogId))
                            WorklogsBlocksCopy[index].Worklogs[WLIndex].NestingItems = NewNestingWorklogs[index]
                        }
                    })
                } else {
                    NewWorklogs.push(el.Worklogs.filter(WL => WL.id !== action.DelWorklogId))
                    WorklogsBlocksCopy[index].Worklogs = NewWorklogs[index]
                }

            })
            return {
                ...state,
                WorkLogsBlocks: WorklogsBlocksCopy
            }
        }
        case SET_WORKLOG_TO_CHANGE : {
            return {
                ...state,
                WorklogToChange: action.WorklogToChange ? action.WorklogToChange : undefined
            }
        }
        case ADD_TO_FAVORITE : {
            let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()
            let {SoughtWorklog, ...Indexes} = FindWorklogById(action.WorklogId, action.ParentId)
            if(action.ParentId){
                if(Indexes.WorklogBlockIndex !== undefined && Indexes.WorklogIndex !== undefined && Indexes.NestingWorklogIndex !== undefined){
                    //@ts-ignore
                  WorklogsBlocksCopy[Indexes.WorklogBlockIndex].Worklogs[Indexes.WorklogIndex].NestingItems[Indexes.NestingWorklogIndex].IsFavorites = true
                }
            }else {
                if (Indexes.WorklogBlockIndex !== undefined && Indexes.WorklogIndex !== undefined) {
                    WorklogsBlocksCopy[Indexes.WorklogBlockIndex].Worklogs[Indexes.WorklogIndex].IsFavorites = true
                }
            }

            return {
                ...state,
                WorkLogsBlocks: WorklogsBlocksCopy
            }
        }
        case SET_WORKLOG_STATUS: {

            let WorklogsBlocksCopy: Array<TWorklogBlock> = GetWorklogsBlockCopy()
            if(action.options.target === "worklog"){
                WorklogsBlocksCopy.map(WB => WB.Worklogs.map(Worklog => {
                    if (Worklog.id === action.options.id) Worklog.status = action.options.status
                }))
            } else {
                WorklogsBlocksCopy.map(WB=>{
                    if(WB.BlockInfo.id === action.options.id) WB.BlockInfo.SummaryStatus = action.options.status
                })
            }

            return {
                ...state,
                WorkLogsBlocks: WorklogsBlocksCopy
            }
        }

        default :
            return state
    }
}

export const AddWorklog = (NewWorklog ?: TWorkLog, to?: string, IsFavorites?: boolean) => {

    return {type: ADD_WORKLOG, NewWorklog, to, IsFavorites} as const
}
export type TAddWorklog = typeof AddWorklog

export const DeleteWorklog = (DelWorklogId: number, DelParentId: number | null = null) => {
    return {type: DEL_WORKLOG, DelWorklogId, DelParentId} as const
}
export type TDeleteWorklog = typeof DeleteWorklog

export const SetIsPlayingWorklogById = (IsPlaying: boolean, ElementId?: number,  ParentId: number | null = null) => {
    return {type: SET_IS_PLAYING_WORKLOG_BY_ID, IsPlaying, ElementId, ParentId} as const
}
export type TSetIsPlayingWorklogById = typeof SetIsPlayingWorklogById

export const ChangeWorklog = (WorkLogId: number,parentId : number, NewWorklog: TWorkLog, NewWlParentId: number | null = null) => {

    return {type: CHANGE_WORKLOG, WorkLogId, NewWorklog, parentId, NewWlParentId} as const
}
export type TChangeWorklog = typeof ChangeWorklog

export const SetWorklogToChange = (WorklogToChange: TWorkLog | undefined = undefined) => {
    return {type: SET_WORKLOG_TO_CHANGE, WorklogToChange} as const
}
export type TSetWorklogToChange = typeof SetWorklogToChange

export const AddToFavorite = (WorklogId: number,  ParentId: number | null = null) => {
    return {type: ADD_TO_FAVORITE, WorklogId, ParentId} as const
}
export type TAddToFavorite = typeof AddToFavorite


export const SendWorklogBlockThunk = (WorklogBlockData: TSendWorklogsData): TWorklogsThunks => async (dispatch) => {
    console.log(WorklogBlockData)
    const SendNewMessageResult = await API.SendWorklogBlock(WorklogBlockData)
    // if (SendNewMessageResult.resultCode === 0) {
    //     dispatch(GetWorklogs(WorklogBlockId))
    // }
}
export type TSendWorklogBlockThunk = typeof SendWorklogBlockThunk

export const SetWorklogStatus = (options: {
    target: "worklog" | "worklogblock",
    id: number,
    status: "ok" | "danger" | "warning"
}) => {
    return {type: SET_WORKLOG_STATUS, options} as const
}
export type TSetWorklogStatus = typeof SetWorklogStatus


export default WorklogsReducer