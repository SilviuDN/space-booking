import shadow from './bolafinal.png'
import neptune from './neptune.gif'



const NeptunePlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${neptune})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default NeptunePlanet