import { useLayoutEffect } from 'react';
import css from './PageNotFound.module.css'



const PageNotFound = () => {
    useLayoutEffect(()=>{
        document.title = "Страница не существует";
    })
    return (
<>

</>
      );
}
 
export {PageNotFound};