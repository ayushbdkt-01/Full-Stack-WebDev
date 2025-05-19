function MsgBox({username, textColor}){
    let styles={color: textColor};
    let styles2={backgroundColor: "pink"};
    return(
        <div style={styles2}>
            <h1 style={styles}>Hello {username}</h1>
            <h2>My username is {username}</h2>
        </div>
    )
}

export default MsgBox;