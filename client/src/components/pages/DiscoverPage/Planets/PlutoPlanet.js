import shadow from './bolafinal.png'
import pluto from './pluton.gif'



const PlutoPlanet = (props) => {


    const info = `<h1>Pluto</h1>
    <p> <strong>Mass:</strong> 1,024 × 10^26 kg (17,15 M⊕) </p>
    </p><strong>Diameter:</strong>: 1.188,3 km</p>
    <p> <strong>Moons:</strong>: Caronte, Hidra, Estigia, Cerbero, Nix</p>
    `




    return (

        <div className="content-rotate-right planet"
            style={{ backgroundImage: `url(${pluto})` }}
            onClick={() => props.changeView('pluto')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default PlutoPlanet