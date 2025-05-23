function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

export default function Form() {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" />
            <button>Submit!</button>
        </form>
    );
}