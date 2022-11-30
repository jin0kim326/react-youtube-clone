import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader/SearchHeader';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    </>
  );
}

export default App;
