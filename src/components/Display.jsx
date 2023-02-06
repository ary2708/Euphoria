/* 
    Inputs:
        1. Function
        2. arguments (argument count == text boxes)
        3. Button to submit the function
        4 (optionally?) contract object to call the function
*/

import { useState } from "react";

function Display(props){
    const {contractObject, func} = props;
    const [data, setData] = useState('')

    const Request = async () => {
        try{
            const queryData = await contractObject[func]()
            setData(JSON.stringify(queryData, null, 2))
        } catch(e){
            setIsSuccessful('')
            console.error(e)
        }
    }

    return(
        <div className="flex flex-col gap-2">
            <div>
                {
                    JSON.stringify()
                }
            </div>
            <div className="flex flex-row-reverse">
                <div onClick={Request} className="cursor-pointer bg-blue-400 text-black">
                    Request
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

export default Display