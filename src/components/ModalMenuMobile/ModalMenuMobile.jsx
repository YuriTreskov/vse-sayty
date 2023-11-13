import css from './ModalMenuMobile.module.css'
import './ModalMenuMobile.css'
import { MyContext } from '../MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import  { motion} from "framer-motion";
import { NavLink } from 'react-router-dom';

const ModalMenuMobile = () => {
    const { modalMenu, setModalMenu  } = useContext(MyContext); 

    if(modalMenu){
        return (
            <>
            <motion.section animate={{opacity:1}} initial={{opacity:0}} transition={{duration:.4}} className={css.container} style={{display:modalMenu}}>
            <nav className={css.navbarContainer}>
                        <NavLink onClick={()=>{setModalMenu(false)}} to='/'   className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/login.png" alt="" />Главная</NavLink>
                       <NavLink onClick={()=>{setModalMenu(false)}} to='/login'   className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/login.png" alt="" />Войти</NavLink>
                       <NavLink onClick={()=>{setModalMenu(false)}} to='/price' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/price.png" alt=""  />Цены</NavLink>
                       <NavLink onClick={()=>{setModalMenu(false)}} to='/sale' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/sale.png" alt="" />Акции</NavLink>
                       <NavLink onClick={()=>{setModalMenu(false)}} to='/question' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/why.png" alt="" />Вопросы</NavLink>
                       <NavLink onClick={()=>{setModalMenu(false)}} to='/calc' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}><img className={css.calc} src="/Header/calc.png" alt="" />Калькулятор</NavLink>
            </nav> 
            </motion.section>
            </>
                );   
    }

}
 
export default ModalMenuMobile;