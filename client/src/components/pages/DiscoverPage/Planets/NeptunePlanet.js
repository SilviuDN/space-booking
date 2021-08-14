import shadow from './bolafinal.png'
import neptune from './neptune.gif'



const NeptunePlanet = (props) => {


    const info = `<h1>Neptune</h1>
    <p> <strong>Mass:</strong> 1,024 × 10^26 kg (17,15 M⊕)--
    <strong>Diameter:</strong>: 24.622 km</p>
    <p> <strong>Surface:</strong>: 7,618 mil mill km² --
    <strong>Surface gravity:</strong>: 11,15 m/s²</p>
    <p> <strong>Sun Distance:</strong>:  4,495 mil mill km --
     <strong>Moons:</strong>:  Tritón, S/2004 N 1, Talasa, Proteo, Nereida, Sao, Galatea...</p>
    `



    return (

        <div className="content-rotate-right planet"
            style={{ backgroundImage: `url(${neptune})` }}
            onClick={() => props.changeView('neptune')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default NeptunePlanet