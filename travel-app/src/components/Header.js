import Globe from '../assets/globe.svg'

export default function Header(){
    return (
        <header>
            <img src={Globe} alt=''/>
            <p>my travel journal</p>
        </header>
    )
}