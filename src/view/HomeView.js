import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'

export const HomeView = () => {

    const [dailyRandomMeal, setDailyRandomMeal] = useState("Meatballs")

    useEffect(() => {
        alert("Daily Random Meal: " + dailyRandomMeal)
        return () => {
            alert("Return to the Planner View for a new random meal suggestion!")
        }
    }, [dailyRandomMeal])

/*    
    const [recipeMonday, setRecipeMonday] = useState()
    const [recipeTuesday, setRecipeTuesday] = useState()
    const [recipeWednesday, setRecipeWednesday] = useState()
    const [recipeThursday, setRecipeThursday] = useState()
    const [recipeFriday, setRecipeFriday] = useState()
    const [recipeSaturday, setRecipeSaturday] = useState()
    const [recipeSunday, setRecipeSunday] = useState()
*/

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayIfUserIsAuthenticated = () => {
        return (authenticatedUser)
        ?   <div>
                <div className="homeWrapper">
                    <h3>Welcome to the Planner View!</h3>
                    <span>{authenticatedUser}, you have signed in and can randomize and save meals!</span>
                    <br/><br/>
                </div>
                <div className="plannerWrapper">
                    <span>Monday: </span><input placeholder="Enter your Monday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Tuesday: </span><input placeholder="Enter your Tuesady meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Wednesday: </span><input placeholder="Enter your Wednesday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Thursday: </span><input placeholder="Enter your Thursday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Friday: </span><input placeholder="Enter your Friday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Saturday: </span><input placeholder="Enter your Saturday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                    <span>Sunday: </span><input placeholder="Enter your Sunday meal here or click on 'Random' ..."/><button>Clear</button><button>Random</button><button>Save</button>
                </div>
                <br/>
                <div className="dailyWrapper">
                    <span> </span><button className="newDailyMealButton" onClick={() => setDailyRandomMeal("Lasagna")}>New Daily Random</button>
                </div>
            </div>
        :   <div>
                <div className="homeWrapper">
                    <h3>Welcome to the Planner View!</h3>
                    <span>Please sign in to randomize and save all meals.</span>
                    <br/><br/>
                </div>
                <div className="plannerWrapper">
                    <span>Monday: </span><input placeholder="Enter your Monday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Tuesday: </span><input placeholder="Enter your Tuesday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Wednesday: </span><input placeholder="Enter your Wednesday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Thursday: </span><input placeholder="Enter your Thursday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Friday: </span><input placeholder="Enter your Friday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Saturday: </span><input placeholder="Enter your Saturday meal here ..."/><button>Clear</button><span></span><br/>
                    <span>Sunday: </span><input placeholder="Enter your Sunday meal here ..."/><button>Clear</button><span></span><br/>
                </div>
                <br/>
                <div className="dailyWrapper">
                    <span> </span><button className="newDailyMealButton" onClick={() => setDailyRandomMeal("Lasagna")}>New Daily Random</button>
                </div>
            </div>
    }

    return (
        <div>
            {displayIfUserIsAuthenticated()}
        </div>
    )
}