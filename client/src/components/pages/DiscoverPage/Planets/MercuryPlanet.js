import shadow from './bolafinal.png'
import mercury from './mercury.gif'



const info = `<h1>Mercury</h1>
    <p> <strong>Mass:</strong> 3,285 × 10^23 kg (0,055 M⊕)--
    <strong>Diameter:</strong>: 2.439,7 km </p>
    <p> <strong>Surface:</strong>: 74,8 mill km² --
    <strong>Surface gravity:</strong>: 3,721 m/s²</p>
    <p> <strong>Sun Distance:</strong>: 227,9 mill km --
     <strong>Day duration:</strong>: 58d 15h 30m </p>
    `


const MercuryPlanet = (props) => {

    return (

        <div class="content-rotate-right"
            style={{ backgroundImage: `url(${mercury})` }}
            onClick={() => props.changeView('mercury')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default MercuryPlanet