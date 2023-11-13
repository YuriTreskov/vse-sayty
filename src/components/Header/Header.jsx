import { useEffect, useState } from 'react';
import css from './Header.module.css'
import './Header.css'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import  { motion} from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyContext } from '../MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const Header = () => {
    const { modalMenu, setModalMenu } = useContext(MyContext); 
    const [navbarDisplay,setMavbarDisplay] = useState(false)
    const width = window.screen.width

    // Создание прокрутки меню при скролле
    useEffect(() => {
        // Создаем анимацию с GSAP и ScrollTrigger
        gsap.to('#logoContur', {
            scrollTrigger: {
                trigger: "#Pagу2",
                start: "top center", // Анимация начинается, когда верх изображения достигает середины экрана
                end: "bottom center", // Анимация заканчивается, когда низ изображения достигает середины экрана
                scrub: 1 // Связывает прогресс анимации с положением скролла
            },
            rotation: 1500, // Вращение на 360 градусов
            ease: "none" // Без ускорения или замедления
        });

        // Возвращаем функцию для очистки, чтобы удалить ScrollTrigger при размонтировании компонента
    }, []);

    if (width>768){
        return (
            <>
            <div className={css.container}>
                
                <motion.div initial={{ scale:0 }}  animate={{ scale:1 }} transition={{delay:2.5}} className={css.logoContainer} onClick={()=>{setMavbarDisplay(!navbarDisplay)}}>
                    
            
                    <img className={css.logoContur} id='logoContur' src="Header/menu.png" alt="" />
                    <motion.img initial={{ opacity:0 }}  whileInView={{ opacity:.8 }} transition={{delay:1.5,duration:2}} className={css.logo}  src="Header/logo.png" alt="" />
                </motion.div>
                {navbarDisplay&&
                    <motion.nav  animate={{x:0,opacity:1}} initial={{x:-500,opacity:0}}  style={{display:navbarDisplay}} className={css.navbarContainer}>
                       <NavLink to='/'   className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/home.png" alt="" />Главная</NavLink>
                       <NavLink to='/login'   className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/login.png" alt="" />Войти</NavLink>
                       <NavLink to='/price' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/price.png" alt=""  />Цены</NavLink>
                       <NavLink to='/sale' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/sale.png" alt="" />Акции</NavLink>
                       <NavLink to='/question' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/why.png" alt="" />Вопросы</NavLink>
                       <NavLink to='/calc' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/calc.png" alt="" />Калькулятор</NavLink>
                   </motion.nav> 
                }
            </div>
            </>
                );
    }else{
        return (
            <>
            <div className={css.container}>      
                <motion.div initial={{ scale:0 }}  animate={{ scale:1 }} transition={{delay:2.5}}  className={css.logoContainer} onClick={()=>{setModalMenu(!modalMenu)}}>
                    <img className={css.logoContur} id='logoContur' src="Header/menu.png" alt="" />
                    <motion.img initial={{ opacity:0 }}  whileInView={{ opacity:.8 }} transition={{delay:1.5,duration:2}} className={css.logo}  src="Header/logo.png" alt="" />
                </motion.div>
            </div>
            </>
                );  
    }


}
 
export default Header;
  