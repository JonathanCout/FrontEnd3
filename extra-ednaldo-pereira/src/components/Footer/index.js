import './styles.scss'

const Footer = () => {
    
    const generateString = () => {
        const created = '2021'
        const current = `${new Date().getFullYear()}`;
        return created === current ? current : `${created} - ${current}`
    }
    
    return (
        <footer id="footer">
            <h3>Todos os direitos reservados, &copy;Copyright {generateString()}</h3>
        </footer>
    )
}

export default Footer