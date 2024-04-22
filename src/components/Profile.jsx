import fede from '../images/fede.png';
import linkedin from '../logos/linkedin.png';
import github from '../logos/github.png';

const Profile = () => (
    <div className="m-auto text-white self-center">
        <div className='flex justify-center'>
            <img src={fede} className="rounded-full size-40" alt="Fede"></img>
        </div>
        <div className='text-3xl mt-4'>
            Federico Taladriz
        </div>
        <div className='mt-2'>
            Hi! 👋 I'm a Software Engineer based in Chile. 
        </div>

        <div className='mt-2'>
        Let's connect!
        </div>
        <div className='flex justify-center mt-4 gap-4'>
            <a href='https://www.linkedin.com/in/federico-taladriz/'>
                <img src={linkedin} className="h-6 fill-white" alt='linkedin'/>
            </a>
            <a href='https://github.com/fedetaladriz'>
                <img src={github} className="h-6 fill-white" alt='github'/>
            </a>
        </div>
        <div className='mt-4'>
            federicotaladriz@gmail.com
        </div>
    </div>
)

export default Profile