function subsribed() {
    alert("Channel Subscribed!");
}


export default function Greet() {
    return(
        <div>
            <h1>Hello Ayush</h1>
            <h2>I'm a good boy!</h2>
            <h1>Welcome User</h1>
            <a href="#" onClick={subsribed}>Subscribe!</a>
        </div>
    );
}