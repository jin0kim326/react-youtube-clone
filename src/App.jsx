import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import SearchHeader from './components/SearchHeader/SearchHeader';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
