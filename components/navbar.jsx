import icon from '../src/img/React-icon.png'
export default function Navbar (){
  return(
    <>
    <header>
      <nav>
        <img className="nav-img" src={icon} alt="React Logo" />
        <span>ReactFacts</span>
      </nav>  
    </header>
    </> 
  )
}