import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import "../../styles/home.scss"

const NotFound = () => {

    const [time,setTime] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        const countdown = setTimeout(() => {
            setTime(time-1)
        },1000)

        if (time <= 0 ){
            setTime(0)
            clearTimeout(countdown)
            navigate('./', {replace : true})
        }

        return() => clearTimeout(countdown)
    },[time,navigate])
    return(
            <main>
                <h1>Página não encontrada</h1>
                <p>Você será redirecionado em {time} segundos...</p>
            </main>
    )
}

export default NotFound;