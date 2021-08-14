import shadow from './bolafinal.png'
import uranus from './uranus.gif'



const UranusPlanet = (props) => {



    const info = `<h1>Uranus</h1>
    <p> <strong>Mass:</strong> 8,681 × 10^25 kg (14,54 M⊕)--
    <strong>Diameter:</strong>: 25.362 km km</p>
    <p> <strong>Surface:</strong>: 8,083 mil mill km² --
    <strong>Surface gravity:</strong>: 8,87 m/s²</p>
    <p> <strong>Sun Distance:</strong>:  2,871 mil mill km --
     <strong>Moons:</strong>:  Umbriel, Oberón, Ariel, Puck ...</p>
    `




    return (

        <div className="content-rotate-right planet"
            style={{ backgroundImage: `url(${uranus})` }}
            onClick={() => props.changeView('uranus')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default UranusPlanet