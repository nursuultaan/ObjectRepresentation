import Header from "./Components/Header.tsx";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Object from "./Pages/Object.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import Tree from '../src/Components/Tree.tsx'



const router = createBrowserRouter(createRoutesFromElements(
    <Route path={"/"} element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path={"object"} element={<Object/>} />


    </Route>
));

function App() {


  return (
   <>
       <Provider store={store}>
           <RouterProvider router={router}/>
       </Provider>
   </>
  )
}

export default App
