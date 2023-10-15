import { useState } from "react";

export const WorkoutForm = () => {

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
        const response = fetch('/api/workouts', {
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
            console.log("New Workout Added");
        }
    }
    
    return (
        <form className = "create" onSubmit={handleSubmit}>
            <h3>Add a New Workotu</h3>
            <label>Exercise Title:</label>
            <input type= "text">
                onChange = {(e) => setTitle(e.target.value)}
                value = {title};
            </input>

            <label>Load (KG):</label>
            <input type= "text">
                onChange = {(e) => setLoad(e.target.value)}
                value = {load};
            </input>

            <label>Total Reps:</label>
            <input type= "text">
                onChange = {(e) => setReps(e.target.value)}
                value = {reps};
            </input>
        </form>
    );
}

export default WorkoutForm;