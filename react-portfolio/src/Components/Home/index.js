
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import logoimg from '../../assets/images/working.svg'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [" ","A","m",'n','a']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  useEffect(() => {
    let timer1 =setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000) ;
    return ()=>{
      clearTimeout(timer1)
    }
  }, [])

    return(
 <div className='container home-page'>
    <div className='text-zone'>
<h1> Hi, <br/> I'm

<AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
<h2>Front End Developer / JavaScript Expert / Mother</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className='work-container'>
        <div className="greeting-image-div">
            <img
              alt="man at desk"
              src={logoimg}
            ></img>
          </div>
        </div>
        </div>
   

    )
}

export default Home