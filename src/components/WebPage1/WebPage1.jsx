import css from './WebPage1.module.css'
import  { motion} from "framer-motion";

const WebPage1 = () => {
    return ( 
<>
<section className={css.container}>
    <motion.img initial={{ opacity:0 }}  whileInView={{ opacity:1}} transition={{duration:.5,ease: "easeOut"}} className={css.fon} src="WebPage/comp4.png" alt="" />
    <div className={css.gradient}></div>
    <div className={css.textContainer}>
        <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:.5}} className={css.header}>Создание <span>веб-сайтов</span></motion.h1>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.7}} transition={{delay:1,duration:1}} className={css.header1}>Ваш бизнес достигнет новых вершин с нашими инновационными решениями и экспертизой</motion.h2>
    </div>

</section>
</>
     );
}
 
export default WebPage1;