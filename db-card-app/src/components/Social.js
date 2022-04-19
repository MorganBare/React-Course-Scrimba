import Twitter from '../assets/Twitter.png'
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Github from '../assets/GitHub.png'

export default function Social(){
    return (
        <div className='social--div'>
            <img src={Twitter} alt=''/>
            <img src={Facebook} alt=''/>
            <img src={Instagram} alt=''/>
            <img src={Github} alt=''/>
        </div>
    )
}