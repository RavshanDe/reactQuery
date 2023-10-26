import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./components/Example";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} className="App">
      <Example />
    </QueryClientProvider>
  );
}

export default App;
