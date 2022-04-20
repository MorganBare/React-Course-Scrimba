import Card from './Card'
import data from "../data"

export default function CardHolder(){

    const cards = data.map(item => {
        return (
            <Card {...item} />
        )
    }) 

    return (
        <div className='cardholder'>
            {cards}
        </div>
    )
}
