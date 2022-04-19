import profile from '../assets/profile.png'
import Email from '../assets/Mail.png'
import Linkedin from '../assets/linkedin.png'

export default function Info(){
    return (
        <div className='info'>
            <img src={profile} alt='profile portrait' />
            <div className='info--content'>
                <h1>Laura Smith</h1>
                <p className='info--content--job-title'>Frontend Developer</p>
                <p className='info--content--email'>laurasmith.website</p>
                <div className='btn--div'>
                    <a className='email-btn' href='https://www.google.com'><img src={Email} alt='' />Email</a>
                    <a className='link-btn' href='https://www.linkedin.com'><img src={Linkedin} alt='' />Linkedin</a>
                </div>
            </div>
        </div>
    )
}