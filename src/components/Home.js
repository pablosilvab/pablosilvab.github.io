import admintasks from './../img/admintasks.png'
import breaking from './../img/breaking.png'

const Home = () => {
    return (
        <div className="App">
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">Pablo Silva</h1>
                    <h5 className="mt-3">Backend Developer</h5>
                    <hr />

                </div>
            </main>
            <p className="lead">Welcome! This website contains some features that I develop in my free time.
                If you need contact me, write me to <a href="mailto:pablonicolassilvabravo@gmail.com" className="link-primary">my email</a>
                :)
            </p>


            <h4 className="mt-4">My projects</h4>
            <br />

            <div className="card mb-3">
                <a href='https://pensive-benz-37e91f.netlify.app/' target="_blank" >
                    <img src={admintasks} className="img-thumbnail" alt="Responsive image" />

                </a>
                <div className="card-body">
                    <h5 className="card-title">Admin Tasks</h5>
                    <p className="card-text">This project is a webapp for manage tasks.</p>
                    <p className="card-text"><small class="text-muted">Tools: React, Node JS, Mongo DB, Heroku.</small></p>
                </div>
            </div>
            <div className="card mb-3">
                <a href='https://agitated-spence-fe5db4.netlify.app/' target="_blank" >
                    <img src={breaking} className="img-thumbnail" alt="Responsive image" />

                </a>
                <div className="card-body">
                    <h5 className="card-title">Breaking Bad</h5>
                    <p className="card-text">
                        A web application that shows phrases from
                        the best series in history: Breaking Bad.</p>
                </div>
            </div>





        </div>
    );
};

export default Home;