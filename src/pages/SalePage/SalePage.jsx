import { useLayoutEffect } from 'react';
import css from './SalePage.module.css'

const SalePage = () => {
    useLayoutEffect(()=>{
        document.title = "Акции";
    })
    return (
<>
<section className={css.container}>
<h1 className={css.header}>Акции</h1>
</section>
</>

    );
}
 
export {SalePage};