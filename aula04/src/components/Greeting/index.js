const Greeting = ({user}) => {
    const greetingText = () => {
        if(user.lastName) {
            return `${user.firstName} ${user.lastName}`
        }
        return 'Turma Desconhecida'
    }

    return (
        <h1>Olá, {greetingText()}!</h1>
    )
}

export default Greeting;