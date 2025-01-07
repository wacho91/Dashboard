import { create } from "zustand";
import { INITIAL_EVENT } from "../Data/Index";

const useCalendar = create((set)=> ({
    currentEvents: INITIAL_EVENT,
    setCurrentEvents: (events)=> set({currentEvents: events})

}))

export default useCalendar