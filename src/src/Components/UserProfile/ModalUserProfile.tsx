import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';
import UserProfileForm from "./UserProfileForm";
//import {useInput} from "../hooks/useInput";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type TModalUserProfile = {
    IsOpen: boolean
    Hide: () => void
}
const ModalUserProfile: React.FC<TModalUserProfile> = (props) => {
    //const profileNameInput = useInput("user name")
    //const profileStatusInput = useInput("user status")
    const SaveProfileChanges = () => {
        // some logic with req on server, then await for response, check if res.status === 200 then
        // save new profile data in reducer
        props.Hide()
    }

    return <Dialog
        open={props.IsOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.Hide}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">{"Profile"}</DialogTitle>
        <DialogContent>
            <UserProfileForm/>
        </DialogContent>
        <DialogActions>

            <Button onClick={SaveProfileChanges} color="primary">
                save
            </Button>

            <Button onClick={props.Hide} color="primary">
                go back
            </Button>

        </DialogActions>
    </Dialog>
}

export default React.memo(ModalUserProfile, (prevProps, nextProps) => {
    if (nextProps.IsOpen !== prevProps.IsOpen) return false
    else return true
})