const Sidebar = ({ children }) => {
    return (
        <div className="col-3 sidebar">
            <p>Side Bar</p>
            <div>{children}</div>
        </div>
    )
}

export default Sidebar
