import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main';
import { Children } from 'react';
import VideoList from './components/VideoList/VideoList';
import Video from './components/Video/Video';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1> 찾을수 없는 페이지 입니다. 🙏 </h1>,
    children: [
        // {
        //   path: "videos",
        //   element: <VideoList />
        // }
    ]
  },
  {
    path: `/video/:id`,
    element: <Video />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
