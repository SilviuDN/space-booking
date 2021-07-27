import shadow from './bolafinal.png'
import uranus from './uranus.gif'



const UranusPlanet = () => {

    return (

        <div class="content-rotate-right" style={{ backgroundImage: `url(${uranus})` }}>
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default UranusPlanet