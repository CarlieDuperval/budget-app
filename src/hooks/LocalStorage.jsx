import { useEffect, useState } from "react"

const LocalStorage = (key , defaultValue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue !=null) return JSON.parse(jsonValue)

        if(typeof defaultValue === "function"){
            return defaultValue()
        }else{
            return defaultValue
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]) // when ever a value change , this value will update in the localStorage

    return [value, setValue]
 
}
export default LocalStorage