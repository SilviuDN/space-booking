import shadow from './bolafinal.png'
import venus from './Venus.gif'




const VenusPlanet = (props) => {



    const info = `<h1>Venus</h1>
    <p> <strong>Mass:</strong> 4,867 × 10^24 kg (0,815 M⊕)--
    <strong>Diameter:</strong>: 6.051,8 km km</p>
    <p> <strong>Surface:</strong>: 460,2 mill km² --
    <strong>Surface gravity:</strong>: 8,87 m/s²</p>
    <p> <strong>Sun Distance:</strong>:  2,871 mil mill km --
     <strong>Day duration:</strong>:  116d 18h 0m </p>
    `



    return (

        <div class="content-rotate-right"
            style={{ backgroundImage: `url(${venus})` }}
            onClick={() => props.changeView('venus')}
            onMouseEnter={() => props.showInfo(info)}
            onMouseOut={() => props.hideInfo()}
        >
            <div class="sombra3d" style={{ backgroundImage: `url(${shadow})` }}></div>


        </div>

    )
}

export default VenusPlanet