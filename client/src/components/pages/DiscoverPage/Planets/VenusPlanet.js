import shadow from './bolafinal.png'
import venus from './Venus.gif'




const VenusPlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${venus})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default VenusPlanet