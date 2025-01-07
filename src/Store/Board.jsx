import { create } from "zustand";
import { boardData } from "../Data/Index";

const useBoard = create((set)=> ({
    board: boardData,
    setBoard: (board)=> set((state)=> ({board}))
}))

export default useBoard