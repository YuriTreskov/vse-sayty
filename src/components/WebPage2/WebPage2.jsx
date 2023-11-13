import css from './WebPage2.module.css'
import { Link } from 'react-router-dom';
import  { motion} from "framer-motion";



const WebPage2 = () => {
    
    return ( 
<section className={css.container}>
    <motion.h2 initial={{y:100}} whileInView={{y:0}} className={css.header}>Какие решения мы предлагаем?</motion.h2>
    <div className={css.cardContainer}>
        <div className={css.nestedContainer}>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.4}} transition={{duration:1}} className={css.card}>
                <div className={css.imgContainer}>
                <h3 className={css.cardHeader}>Landing page</h3>
                <motion.img initial={{y:100}} whileInView={{y:0}} className={css.cardImg} src="WebPage/landing.png" alt="" />
                </div>
                <div className={css.contentContainer}>
                    <p className={css.fullText}><b>Лендинг</b> — это простое интернет-решение для быстрого запуска продаж.
                         Клиенты получают всю необходимую информацию в компактном виде на одной странице.
                          В компании SiteUP работают профессиональные специалисты в области разработки
                           и рекламы Landing Page.
                    </p>
                    <motion.div initial={{y:100}} whileInView={{y:0}} className={css.buttonContainer}>
                        <Link  to='/landingpage' className={css.cardButtonUp}>Подробнее</Link>
                        <Link  to='/calc' className={css.cardButtonUp}>Калькулятор</Link>
                    </motion.div>
                </div>
            </motion.div> {/*  Card */}
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.4}} transition={{duration:1}} className={css.card}>
            <div className={css.imgContainer}>
                <h3 className={css.cardHeader}>Корпоративный сайт</h3>
                <motion.img initial={{y:100}} whileInView={{y:0}} className={css.cardImg} src="WebPage/corp.png" alt="" />
                </div>
                <div className={css.contentContainer}>
                    <p className={css.fullText}><b>Корпоративный сайт </b> - это решение для компаний, который хотят донести максимум информации
                     о себе до потенциальных клиентов. Мы предлагаем реализовать доступный и понятный для Ваших клиентов сайт,
                      который позволит максимум конверсий.
                    </p>
                    <motion.div initial={{y:100}} whileInView={{y:0}} className={css.buttonContainer}>
                        <Link  to='/landingpage' className={css.cardButtonUp}>Подробнее</Link>
                        <Link  to='/calc' className={css.cardButtonUp}>Калькулятор</Link>
                    </motion.div>
                </div>
            </motion.div>   
        </div>
        <div className={css.nestedContainer}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.4}} transition={{duration:1}} className={css.card}>
        <div className={css.imgContainer}>
                <h3 className={css.cardHeader}>Интернет магазин</h3>
                <motion.img initial={{y:100}} whileInView={{y:0}} className={css.cardImg} src="WebPage/shop.png" alt="" />
                </div>
                <div className={css.contentContainer}>
                    <p className={css.fullText}>Профессиональное решение для онлайн продажи своих товаров в сети интернет.
                     Компания SiteUP имеет огромный опыт в создании успешных проектов, которые уже вышли на обороты
                      в несколько млн. руб/мес. Инвестиции окупаются, как правило, в течении 3-6 месяцев.
                    </p>
                    <motion.div initial={{y:100}} whileInView={{y:0}} className={css.buttonContainer}>
                        <Link  to='/landingpage' className={css.cardButtonUp}>Подробнее</Link>
                        <Link  to='/calc' className={css.cardButtonUp}>Калькулятор</Link>
                    </motion.div>
                </div>
        </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.4}} transition={{duration:1}} className={css.card}>
            <div className={css.imgContainer}>
                <h3 className={css.cardHeader}>Сайт для бизнеса</h3>
                <motion.img initial={{y:100}} whileInView={{y:0}} className={css.cardImg} src="WebPage/bisnes.png" alt="" />
                </div>
                <div className={css.contentContainer}>
                    <p className={css.fullText}>Индивидуальный проект который призван покорить просторы интернета.
                     Расскажите нам о своей идее и вместе мы реализуем самый лучший проект любой сложности.
                    </p>
                    <motion.div initial={{y:100}} whileInView={{y:0}} className={css.buttonContainer}>
                        <Link  to='/landingpage' className={css.cardButtonUp}>Подробнее</Link>
                        <Link  to='/calc' className={css.cardButtonUp}>Калькулятор</Link>
                    </motion.div>
                </div>
            </motion.div> 
        </div>
    </div>
</section>
     );
}
 
export default WebPage2;