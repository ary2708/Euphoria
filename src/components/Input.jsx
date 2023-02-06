/* 
    Inputs:
        1. Function
        2. arguments (argument count == text boxes)
        3. Button to submit the function
        4 (optionally?) contract object to call the function
*/

import { useState } from "react";

function Input(props){
    const {contractObject, func, argArray} = props;
    const initObj = {}
    argArray.forEach(argument => initObj[argument] = '')
    const [argObj, setArgObj] = useState(initObj)
    const [isSuccessful, setIsSuccessful] = useState(undefined)

    const OnSubmit = async () => {
        try{
            // arrange the arguments in order
            const argValues = argArray.map(argument => argObj[argument])
            await contractObject[func](...argValues)
            setIsSuccessful(true)
        } catch(e){
            setIsSuccessful(false)
        }
    }

    return(
        <div className="flex flex-col gap-2">
            {
                srgArray.map((argument, index) => {
                    return (
                        <input 
                            className="rounded w-full"
                            type="text" 
                            onChange={event => setArgObj(argObj => argObj[argument] = event.target.value)} 
                            value={argObj[argument]}
                        />
                    )
                })
            }
            <div className="flex flex-row-reverse">
                <div onClick={OnSubmit} className="cursor-pointer bg-blue-400 text-black">
                    Submit
                </div>
                {
                    isSuccessful !== undefined && (
                        <div>{isSuccessful ? 
                                    (<div className="text-green-500">Submit Successful</div>) : 
                                    (<div className="text-red-400">Submit Unsuccessful</div>)}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Input