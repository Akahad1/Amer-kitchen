import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServicesDetails from "../../Pages/ServicesDetails/ServicesDetails";
import SignUp from "../../Pages/Singup/SignUp";
import PrivetRouter from "../PrivetRouter/PrivetRouter";


export const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element: <Home></Home>},
        {path:"/login",element:<Login></Login>},
{path:"/signup",element:<SignUp></SignUp>},
{path:'/services',element:<AllServices></AllServices>},
{path:'/services/:id',element:<ServicesDetails></ServicesDetails>,
loader:({params})=>fetch(`http://localhost:5000/allservices/${params.id}`)
},
{path:'/addservice',element:<PrivetRouter><AddService></AddService></PrivetRouter>},
{path:'/myreviews',element:<PrivetRouter><MyReviews></MyReviews></PrivetRouter>}

    ]
},

])