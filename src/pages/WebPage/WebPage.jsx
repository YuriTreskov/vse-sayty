import { useLayoutEffect } from "react";
import css from './WebPage.module.css'
import WebPage1 from "../../components/WebPage1/WebPage1";
import WebPage2 from "../../components/WebPage2/WebPage2";
import WebPage3 from "../../components/WebPage3/WebPage3";
import WebPage4 from "../../components/WebPage4/WebPage4";
import WebPage5 from "../../components/WebPage5/WebPage5";


const WebPage = () => {
    useLayoutEffect(()=>{
        document.title = "Разработка сайтов";
        window.scrollTo(0, 0);
    })
    return (
<>
<div className={css.container}>
<WebPage1/>
<WebPage2/>
<WebPage3/>
<WebPage4/>
<WebPage5/>
</div>
</>
    );
}
 
export {WebPage};