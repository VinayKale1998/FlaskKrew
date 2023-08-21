import { createBrowserRouter,RouterProvider } from "react-router-dom";
import CreateFlashCard from "./Pages/CreateFlashCard";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import MyFlashCards from "./Pages/MyFlashCards";
import FlashCard from "./Pages/FlashCard";


function App() {
  const router = createBrowserRouter([
    
    {
      path:'/', element:<HomePage></HomePage>, errorElement:<ErrorPage></ErrorPage>
      , children: [
        {
          index: true,
          element: <CreateFlashCard></CreateFlashCard>,
        },
        {
          path:'MyFlashCards',
          element: <MyFlashCards></MyFlashCards>,
        },


        {
          path:'MyFlashCards/:index',
          element:<FlashCard></FlashCard>
        }
      ]
    }
  
  ]);

  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;