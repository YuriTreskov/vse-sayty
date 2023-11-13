import css from './Footer.module.css'
import  { motion} from "framer-motion";


const Footer = () => {
    return (
<>
<section className={css.container}>
    <motion.nav initial={{ gap:'10vw' }} viewport={{amount:.7}}  whileInView={{gap:'5vw' }} className={css.navbar}>
        <a className={css.navbarLink} href="">Политика конфиденциальности</a>
        <a className={css.navbarLink} href="">FAQ (Часто Задаваемые Вопросы)</a>
        <a className={css.navbarLink} href="">Контакты</a>
    </motion.nav>
</section>
</>
    );
}
 
export default Footer;