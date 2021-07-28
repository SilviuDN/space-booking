import shadow from './bolafinal.png'
import saturn from './saturn.gif'



const SaturnPlanet = (props) => {


    const info = `<h1>Saturn</h1>
    <p> <strong>Mass:</strong> 5,683 × 10^26 kg (95,16 M⊕)--
    <strong>Diameter:</strong>: 58.232 km</p>
    <p> <strong>Surface:</strong>: 42,7 mil mill km² --
    <strong>Surface gravity:</strong>: 10,44 m/s²</p>
    <p> <strong>Sun Distance:</strong>:  1,434 mil mill km --
     <strong>Moons:</strong>:  Titan, , Mimas, Tetis, Dione, Rea ...</p>
    `




    return (

        <div class="content-rotate-right"
            style={{ backgroundImage: `url(${saturn})` }}
            onClick={() => props.changeView('saturn')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default SaturnPlanet