import '../discover.css'
import shadow from './bolafinal.png'
import earth from './earth.gif'

const EarchPlanet = (props) => {




    const info = `<h1>Earth</h1>
    <p> <strong>Mass:</strong> 1.98892 x 10<small>30</small> kg --
    <strong>Equatorial diameter:</strong>: 12, 756 km(7926 mi) </p>
    <p> <strong>Polar diameter:</strong>: 12713.6 km(7899.86 mi)--
    <strong>Surface gravity:</strong>: 9,807 m/s² </p>
    `




    return (


        <div className="content-rotate-left planet"
            style={{ backgroundImage: `url(${earth})` }}
            onClick={() => props.changeView('earth')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>




    )


}


export default EarchPlanet