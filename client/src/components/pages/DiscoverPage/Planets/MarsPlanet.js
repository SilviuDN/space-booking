import shadow from './bolafinal.png'
import mars from './mars.gif'




const VenusPlanet = (props) => {



    const info = `<h1>Mars</h1>
    <p> <strong>Mass:</strong> 6,39 × 10^23 kg (0,107 M⊕)--
    <strong>Diameter:</strong>: 3.389,5 km </p>
    <p> <strong>Radius:</strong>: 695,500 km --
    <strong>Surface gravity:</strong>: 3,721 m/s²</p>
    <p> <strong>Sun Distance:</strong>: 227,9 millones km --
     <strong>Moons:</strong>: Fobos, Deimos </p>
    `




    return (

        <div className="content-rotate-right planet"
            style={{ backgroundImage: `url(${mars})` }}
            onClick={() => props.changeView('mars')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default VenusPlanet