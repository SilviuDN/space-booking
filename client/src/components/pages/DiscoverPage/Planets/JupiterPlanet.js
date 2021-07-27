import shadow from './bolafinal.png'
import jupiter from './jupiter.gif'



const JupiterPlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${jupiter})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default JupiterPlanet