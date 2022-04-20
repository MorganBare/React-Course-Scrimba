import Location from '../assets/Location.svg'



export default function Card(props){
    return (
        <div className='card--outer--container'>
            <img className='dest--img'src={props.imageUrl} alt='destination' />
            <div className='card--content--container'>
                <div className='location--info--div'>
                    <img src={Location} alt='' />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View On Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='dest--description'>{props.description}</p>
            </div>
        </div>
    )
}