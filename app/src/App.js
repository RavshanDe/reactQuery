import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./components/Example";
import { ReactQueryDevtools } from "react-query/devtools";
import Todo from "./components/Todo";
import InfiniteScroll from "./components/InfiniteScroll";
import User from "./components/User";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools />
      <Todo />
      <Example /> */}
      {/* <InfiniteScroll /> */}
    </QueryClientProvider>
  );
}

export default App;
