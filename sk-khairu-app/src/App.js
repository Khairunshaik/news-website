import Header from './Header';
import {Routes , Route} from "react-router-dom";
import Sachin from "./Sachin";
import Dhoni from "./Dhoni";
import Shubham from "./Shubham";
import Virat from "./Virat";
import NotFound from "./NotFound"
import Car from "./Car";
import CarModel from './CarModel';
import CarColor from "./CarColor";
import CarPrice from './CarPrice';
import User from './User';

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<Header/>} />
          {/* http://localhost:3000/ */}


          {/* using params */}
        <Route path="/user/:userId/:userName/:userCountry" element={<User/>} />
          {/* http://localhost:3000/User */}
        <Route path="/sachin" element={<Sachin/>} />
          {/* http://localhost:3000/Sachin */}
        <Route path="/dhoni" element={<Dhoni/>} />
        <Route path="/shubham" element={<Shubham/>} />
        <Route path="/virat" element={<Virat/>} />


        {/* Nested Routes */}
        <Route path="/car" element={<Car/>}>
          {/*  car is the parent route for carcolor and carmodel */}
          <Route path="model" element={<CarModel/>} />
            {/* http://localhost:3000/car/model */}
          <Route path="color" element={<CarColor/>} />
            {/* http://localhost:3000/car/color */}
          <Route path="price" element={<CarPrice/>} />
            {/* http://localhost:3000/car/price */}
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
