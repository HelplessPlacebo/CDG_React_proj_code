import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import {blue, blueGrey} from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import {TChangeIssue, TDeleteIssue} from "../../../Redux/IssuesReducer";
import {CustomListInput} from "../Inputs/CustomListInput";
import {useInput} from "../../hooks/useInput";
import {useBooleanState} from "../../hooks/useBooleanState";

export type TIssueListItemProps = {
    Issue: string
    el: "Issue" | "CompletedIssue"
    checked: string[]
    handleToggle: (value: string) => void
    DeleteIssue: TDeleteIssue
    ChangeIssue: TChangeIssue
}

export const IssueListItem: React.FC<TIssueListItemProps> = (props) => {
    const EditInputData = useBooleanState(false)
    const EditInputValue = useInput('')

    const OnSaveNewValue = () => {
        props.ChangeIssue(props.Issue, EditInputValue.value)
        EditInputData.Hide()
        EditInputValue.clear()
    }
    const onCancelInput = () =>{
        EditInputData.Hide()
    }

    const labelId = `transfer-list-all-item-${props.Issue}-label`

    return (<div className="IssueListItem">
            {
                EditInputData.isDisplayed
                    ? <CustomListInput onSubmit={OnSaveNewValue}
                             {...EditInputValue.bind} onCancel={onCancelInput} SubmitButtonText={"Save"}
                                       CancelButtonText={"cancel"}
                                             />
                    : <Grid key={props.Issue} container alignItems="center" justify="space-around">

                        <Grid item  style={{width:"85%"}}>

                            <ListItem role="listitem" button
                                      //@ts-ignore
                                      onClick={props.handleToggle(props.Issue)}>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={props.checked.indexOf(props.Issue) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={props.Issue}/>
                            </ListItem>
                        </Grid>

                        <Grid item  >

                            <Grid container justify="space-between" alignItems="center" style={{paddingRight : "1rem"}}>

                                {
                                    props.el === "Issue" && <Grid item style={{paddingRight : ".5rem"}}>
                                        <Tooltip title="Edit" arrow placement="top">
                                            <EditIcon onClick={() => EditInputData.Show()}
                                                      style={{color: blue[400], cursor: "pointer"}}
                                                      fontSize="default"/>
                                        </Tooltip>
                                    </Grid>
                                }

                                <Grid item >
                                    <Tooltip title="Delete" arrow placement="top">
                                        <DeleteIcon
                                            onClick={() => props.DeleteIssue(props.Issue, props.el)}
                                            style={props.el === "Issue"
                                                ? {color: blueGrey[600], cursor: "pointer"}
                                                : {color: blueGrey[600], cursor: "pointer"}}
                                            fontSize="default"/>
                                    </Tooltip>
                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>
            }
        </div>
    )
}