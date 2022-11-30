import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Main from './components/Main/Main';
import Video from './components/Video/Video';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import VideoDetail from './components/VideoDetail/VideoDetail';


const queryClient = new QueryClient();

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
    element: <VideoDetail />,
  }
]);

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router}/>
    </QueryClientProvider>
    </>
  );
}

export default App;
