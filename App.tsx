import { BrowserRouter,Routes,Route } from "react-router-dom";
import AskNumberOfLots from "./src/Pages/askNumberOfLots";
import store from './src/store/store';
import  {Provider}  from "react-redux";
import AvailableLots from "./src/Pages/availableLots";
import ParkingArea from "./src/Pages/parkingArea";


export default function App() {
  return ( 
        <Provider store={store}>
            <BrowserRouter>
             <Routes>
               <Route path="/" element={<AskNumberOfLots/>}/>
               <Route path="/availableLots" element={<AvailableLots/>}/>
               <Route path="/parkingArea" element={<ParkingArea/>}/>
             </Routes>
            </BrowserRouter>
        </Provider>
  );
}
