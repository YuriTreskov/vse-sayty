import css from './WebPage3.module.css'
import {motion} from 'framer-motion'

const lst = [{
    'number':'1',
    'header':'Сбор информации и аналитика',
    'content':`Для начала мы производим анализ конкурентов в нише,
     определяем особенности и премущества лучших из них и проектируем 
     будущий сайт с учетом этих факторов и нашего опыта в разработке успешных сайтов.`
},
{
    'number':'2',
    'header':'Разработка прототипа',
    'content':`Перед разработкой дизайна, 
    мы определяем самые выгодные варианты предоставления информации 
    на сайте для лучшего восприятия Вашими клиентами. Проектирование 
    включает в себя модуляцию поведения действий на сайте.`
},
{
    'number':'3',
    'header':'Дизайн сайта',
    'content':`Внешний вид Вашего сайта играет очень важную роль
     в восприятии посетителями. Наши дизайнеры используют современные
      технологии в реализации клиентоориентированных проектов. Вы получаете
       оригинальный дизайн-проект который в последующем будет ассоциироваться с Вашей компанией.`
},
{
    'number':'4',
    'header':'Вёрстка и программирование',
    'content':`Наши программисты выполняют работы любой
     сложности на профиссиональном уровне под четким контролем.
      В итоге Вы получаете быстрый, современный и успешный проект, уже оптимизированный для дальнейшего продвижения`
},]

const WebPage3 = () => {
    const width = window.screen.width
    if (width>768){
    return ( 
<>
<section className={css.container}>
    <motion.h2 initial={{y:100}} whileInView={{y:0}} className={css.header}>Как мы будем создавать Ваш сайт?</motion.h2>
    <div className={css.cardContainer}>
    {lst.map((item, index) => (
            
            index % 2 ? (
                <motion.div initial={{ x: -300 }} viewport={{amount:.7}}  whileInView={{ x: 0 }} className={css.card} style={{marginRight:'24vw'}}>
                <span className={css.cardNumber}>{item.number}</span>
                <div className={css.cardContent}>
                    <h3 className={css.cardHeader}>{item.header}</h3>
                    <p className={css.cardFullText}>{item.content}</p>
                </div>
            </motion.div>
            ) : 
            <motion.div initial={{ x: 300 }} viewport={{amount:0.7}}  whileInView={{ x: 0 }} className={css.card} style={{marginLeft:'24vw'}}>
                <span className={css.cardNumber}>{item.number}</span>
                <div className={css.cardContent}>
                    <h3 className={css.cardHeader}>{item.header}</h3>
                    <p className={css.cardFullText}>{item.content}</p>
                </div>
            </motion.div>
            ))}
    </div>
</section>
</>
    );
            }else{
                return ( 
                    <>
                    <section className={css.container}>
                        <h2 className={css.header}>Как мы будем создавать Ваш сайт?</h2>
                        <div className={css.cardContainer}>
                        {lst.map((item, index) => (       
                            <motion.div initial={{ scale:0 }} viewport={{amount:0.7}}  whileInView={{ scale:1 }} className={css.card}>
                            <span className={css.cardNumber}>{item.number}</span>
                            <div className={css.cardContent}>
                                <h3 className={css.cardHeader}>{item.header}</h3>
                                <p className={css.cardFullText}>{item.content}</p>
                            </div>
                            </motion.div>
                                ))}
                        </div>
                    </section>
                    </>
                        );
            }
}
 
export default WebPage3;