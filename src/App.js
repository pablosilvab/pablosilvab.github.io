
function App() {
  return (
    <div className="App">
      <main class="flex-shrink-0">
        <div class="container">
          <h1 class="mt-5">Pablo Silva</h1>
          <h5 class="mt-3">Backend Developer</h5>
          <hr />
          <p class="lead">Welcome! This website contains some features that I develop in my free time.
            If you need contact me, write me to <a href="mailto:pablonicolassilvabravo@gmail.com" class="link-primary">my email</a>
            :) </p>
          <p></p>
        </div>


        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th >2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th >3</th>
                <td >Larry the Bird</td>
                <td>twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
