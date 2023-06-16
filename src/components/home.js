const Home = () => {
    return(
        <div>
            <h1>Home View</h1>
            <p>Esta es la vista Home</p>
            <p>Datos de Introducción a la Aplicación</p>

            <div class="mb-3">
                <label for="mail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="mail" 
                placeholder="name@example.com"></input>

            </div>

            <div class="mb-3">
                <label for="text-area" class="form-label">Text Area Example</label>
                <textarea class="form-control" id="text-area" rows="3"></textarea>
            </div>


        </div>
    );
}

export default Home;