import { useLayoutEffect } from "react";
import CRMPage1 from "../../components/CRMPage1/CRMPage1";

const CRMPage = () => {
    useLayoutEffect(()=>{
        document.title = "CRM-Системы";
    })
    return ( 
<>
<CRMPage1/>
</>
     );
}
 
export {CRMPage};