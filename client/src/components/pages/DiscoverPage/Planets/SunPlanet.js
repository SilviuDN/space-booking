import shadow from './bolafinal.png'
import sun from './sun.gif'



const SunPlanet = (props) => {



    const info = `<h1>Sun</h1>
    <p> <strong>Mass:</strong> 1.98892 x 10<small>30</small> kg --
    <strong>Diameter:</strong>: 1,391,000 kilometers </p>
    <p> <strong>Radius:</strong>: 695,500 km --
    <strong>Surface gravity of the Sun:</strong>: 27.94 g </p>
    <p> <strong>Volume of the Sun:</strong>: 1.412 x 10<small>18</small> km<small>3</small> --
    <strong>Density of the Sun:</strong>: 0.890 g/cm<small>3</small> </p>
    `



    return (

        <div class="content-sun"
            style={{ backgroundImage: `url(${sun})` }}
            onClick={() => props.changeView('sun')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >


            <div class="sombra3dsun" style={{
                backgroundImage: `url(${shadow})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}></div>


        </div>

    )
}

export default SunPlanet