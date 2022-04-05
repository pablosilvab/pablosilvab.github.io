import { useState } from "react";


const Contact = () => {

    const [emailSubject, setEmailSubject] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

       await fetch("https://demo-backend-spring-boot.herokuapp.com/email/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                subject: emailSubject,
                text: emailMessage,
            }),
        }).then((res) => {
            alert('Thanks you :)')
        });
    }

    return (
        <div className="App">
            <main class="flex-shrink-0">
                <div class="container">
                    <h1 class="mt-5">Contact me</h1>
                    <hr />

                </div>
            </main>

            <p>
                If you need contact me, write me
            </p>

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Subject..."
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                    />
                </div>
                <br />
                <div class="form-group">
                    <textarea
                        className="form-control"
                        type="text"
                        rows="3"
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                    />
                </div>
                <hr />
                <button type="submit" className="btn btn-primary">Send</button>
            </form>

        </div>
    );
};

export default Contact;