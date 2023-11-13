
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ModalMenuMobile from '../../components/ModalMenuMobile/ModalMenuMobile';
import { MyContextProvider } from '../../components/MyContextProvider/MyContextProvider';
import Modal from '../../components/Modal/Modal';
import {Outlet} from 'react-router-dom'

const Layout = () => {
    return (
<>
<MyContextProvider>
<ModalMenuMobile/>
  <Modal/>
  <Header/>
    <Outlet/>
  <Footer/>
</MyContextProvider>
</>
    );
}
 
export {Layout};