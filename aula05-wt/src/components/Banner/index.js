const Banner = ({children}) => {
    return(
        <section className="banner">
            {children[0]}
            {children[1]}
        </section>
    )
}

export default Banner