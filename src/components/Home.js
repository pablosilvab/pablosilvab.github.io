import admintasks from './../img/admintasks.png'

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

            <h3 className="mt-5">My Projects</h3>
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




        </div>
    );
};

export default Home;