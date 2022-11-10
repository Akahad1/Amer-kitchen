import { useEffect } from "react"

const useTitle =title=>{
    useEffect(()=>{
        document.title= `${title} -Amer Kitchen`;
    },[title])
}

export default useTitle