import { useLayoutEffect } from 'react';
import css from './PricePage.module.css'

const ok = <img className={css.imgOk} src='WebPage/ok.png'></img>
const lst = [{
    'title': 'Индивидуальный дизайн',
    'q':'-',
    'w':'-',
    'e':ok,
    'r':ok,
},
{
    'title': 'Установка CMS',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},
{
    'title': 'Адаптация под мобильные',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},
{
    'title': 'Хостинг 12 месяцев',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Домен',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Установка сайта на хостинг',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Установка аналитики',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Добавление в Яндекс',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Добавление в Google',
        'q':ok,
        'w':ok,
        'e':ok,
        'r':ok,
},]


const PricePage = () => {
    useLayoutEffect(()=>{
        document.title = "Наши цены";
    })
    return ( 
<>
<section className={css.container}>
    <h2 className={css.header}>Тарифы на наши услуги</h2> 
    <table className={css.table}>
    <tr className={css.strong} style={{borderBottom:'1px solid #06466d'}} >
        <td className={css.column1}>ЧТО ВХОДИТ В УСЛУГУ</td>
        <td className={css.column2}>Landing Page</td>
        <td className={css.column3}>Корпоративный сайт</td>
        <td className={css.column4}>Интернет магазин</td>
        <td className={css.column5}>Индивидуальный проект</td>
    </tr>
    {   lst.map((item, index) => (
        index % 2 ? (
        <tr className={css.strong} style={{background:'#0b181f'}} >
            <td className={css.column} >{item.title}</td>
            <td className={css.column}>{item.q}</td>
            <td className={css.column}>{item.w}</td>
            <td className={css.column}>{item.e}</td>
            <td className={css.column}>{item.r}</td>
        </tr>
        ) : 
        <tr className={css.strong} >
            <td className={css.column}>{item.title}</td>
            <td className={css.column}>{item.q}</td>
            <td className={css.column}>{item.w}</td>
            <td className={css.column}>{item.e}</td>
            <td className={css.column}>{item.r}</td>
        </tr>
        ))}
        <tr className={css.strongButton} style={{borderBottom:'1px solid #06466d'}} >
        <td className={css.columnButton} style={{color:'rgb(187, 68, 68)',fontWeight:'bold',fontSize:'1.7vw'}}>Стоимость</td>
        <td className={css.columnButton}>
            <h3 className={css.columnPrice}>от 10 000 руб.</h3>
            <a className={css.columnButtonOn}>Заказать</a>
        </td>
        <td className={css.columnButton}>
            <h3 className={css.columnPrice}>от 35 000 руб.</h3>
            <a className={css.columnButtonOn}>Заказать</a>
        </td>
        <td className={css.columnButton}>
            <h3 className={css.columnPrice}>от 80 000 руб.</h3>
            <a className={css.columnButtonOn}>Заказать</a>
        </td>
        <td className={css.columnButton}>
            <h3 className={css.columnPrice}>от 120 000 руб.</h3>
            <a className={css.columnButtonOn}>Заказать</a>
        </td>
    </tr>
    </table>    
</section>
</>
     );
}
 
export  {PricePage};