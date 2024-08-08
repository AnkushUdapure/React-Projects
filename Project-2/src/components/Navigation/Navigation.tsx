import styles from "./Navigation.module.css";

const Navigation = () =>
{
    return(
        <nav className= {`${styles.Navigation} container`} >
           <div> 
            <img src="./images/Frame.png" alt="frame"/>
           </div>

           <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Conntact</li>
           </ul>
        </nav>
    )
};

export default Navigation;