import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./app/components/_comm/Layout";
import FormPage from "./app/pages/FromPage";
import Home from "./app/pages/Home";

const qc = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={qc}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
