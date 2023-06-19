import '../css/estilos.css';
import { IconName,BiEnvelopeOpen,BiArch,BiAlarm } from "react-icons/bi";

const About = () => {
    return(
        <div>
            <h1>About View</h1>
            <p>Esta es la vista About</p>
            <p>Datos del desarrollador</p>

            <div>
                <form class="formulario" method="get">
                    <h1>Login</h1>
                    <div class="contenedor">
                        <div class="input-contenedor">
                            <BiEnvelopeOpen class="icon"></BiEnvelopeOpen>
                            <input type="text" placeholder="Correo"></input>
                        </div>
                        <div class="input-contenedor">
                            <BiAlarm class="icon" />
                            <input type="password" placeholder="Contraeña"></input>
                        </div>
                        <input type="submit" value="Login" class="button" />
                        <p>Al registrarte, aceptas nuestras Condiciones de uso y 
                            Política de privacidad.</p>
                    </div>
    
                </form>
            </div>

        </div>
    );
}

export default About;