const Mainbar = ({ children }) => {
    return (
        <div className="col-7 mainbar">
            <p>Normal element</p>
            <div>{children}</div>
        </div>
    )
}

export default Mainbar
