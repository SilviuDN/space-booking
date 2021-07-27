import shadow from './bolafinal.png'
import pluto from './pluton.gif'



const PlutoPlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${pluto})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default PlutoPlanet