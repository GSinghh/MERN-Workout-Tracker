import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from 'react';

export const useWorkoutsContext = () => {

    const context = useContext(WorkoutContext);

    if(!context)
        throw('useWorkoutContext must be used inside a WorkoutContextProvider')

    return context;

}