import shadow from './bolafinal.png'
import jupiter from './jupiter.gif'



const JupiterPlanet = (props) => {


    const info = `<h1>Jupiter</h1>
    <p> <strong>Mass:</strong> 1,898 × 10^27 kg (317,8 M⊕)--
    <strong>Diameter:</strong>: 69.911 km</p>
    <p> <strong>Surface:</strong>: 61,42 mil mill km² --
    <strong>Surface gravity:</strong>: 24,79 m/s²</p>
    <p> <strong>Sun Distance:</strong>:  778,5 mil km --
     <strong>Moons:</strong>:  Ío, Calisto, Metis, Amaltea, Himalia,</p>
    `




    return (

        <div class="content-rotate-right"
            style={{ backgroundImage: `url(${jupiter})` }}
            onClick={() => props.changeView('jupiter')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default JupiterPlanet