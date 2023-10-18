import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export const WorkoutForm = () => {

    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        //Since we dont want the page to refresh after the form is submitted
        e.preventDefault();

        //JSON object to store all values
        const workout = {title, load, reps};


        //POST Request 
        const response = await fetch('http://localhost:4000/api/workouts/', {
            method: 'POST', 
            body: JSON.stringify(workout),
            headers: { 
                'Content-Type': 'application/json'
            }
        })

        //
        const json = await response.json()
        
        if(!response.ok) {
            setError(json.error);
        }
        if(response.ok)
        {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log("New Workout Added", json);
            dispatch({type: 'CREATE_WORKOUT', payload: json});
        }
    }
    
    return (
        <form className = "create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input 
                type= "text"
                onChange = {(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Load (KG):</label>
            <input 
                type= "number"
                onChange = {(e) => setLoad(e.target.value)}
                value = {load}
            />

            <label>Total Reps:</label>
            <input 
                type= "number"
                onChange = {(e) => setReps(e.target.value)}
                value = {reps}
            />
            <button>Add Workout</button>
            {error && <div className = "error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;