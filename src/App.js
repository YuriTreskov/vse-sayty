
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Layout } from './pages/Layout/Layout';
import {Home} from './pages/Home/Home'
import { WebPage } from './pages/WebPage/WebPage';
import { MobilePage } from './pages/MobilePage/MobilePage';
import { CRMPage } from './pages/CRMPage/CRMPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { DisignPage } from './pages/DisignPage/DisignPage';
import { PromotionPage } from './pages/PromotionPage/PromotionPage';
import { Login } from './pages/Login/Login';
import { PricePage } from './pages/PricePage/PricePage';
import { SalePage } from './pages/SalePage/SalePage';
import { Question } from './pages/Question/Question';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalcPage } from './pages/CalcPage/CalcPage';




function App() {

  return (
<>
<Routes>
  
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/website' element={<WebPage/>}/>
    <Route path='/mobile' element={<MobilePage/>}/>
    <Route path='/crm' element={<CRMPage/>}/>
    <Route path='/disign' element={<DisignPage/>}/>
    <Route path='/promotion' element={<PromotionPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/price' element={<PricePage/>} />
    <Route path='/sale' element={<SalePage/>}/>
    <Route path='/question' element={<Question/>}/>
    <Route path='/calc' element={<CalcPage/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Route>
</Routes>
</>
  );
}

export default App;


















