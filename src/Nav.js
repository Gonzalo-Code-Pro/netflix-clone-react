import React  ,{useEffect,useState}from "react";
import "./Nav.css";

function Nav() {
  const [scroll,setScroll] = useState(true)
  useEffect(() => {
      window.addEventListener("scroll", ()=>{
      window.scrollY > 100 ?  setScroll(true) : setScroll(false)
      return  () => {
        window.removeEventListener('scroll')
      }
    },[])
  })
  return (
    <div className={`nav ${scroll && 'nav__black'}`}>
      <img className="nav__logo" src="./logo.svg" alt="Netflix" />
    </div>
  );
}

export default Nav;
