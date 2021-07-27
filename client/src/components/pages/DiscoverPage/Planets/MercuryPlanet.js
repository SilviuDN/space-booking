import shadow from './bolafinal.png'
import mercury from './mercury.gif'




const MercuryPlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${mercury})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default MercuryPlanet