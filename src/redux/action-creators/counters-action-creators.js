import {
    INC_CUSTOM,
    INC,
    DEC,
    RESET,
} from "../action-types";

const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
const incAction = () => ({type: INC})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})

export {
    incCustomAction,
    incAction,
    decAction,
    resetAction,
}