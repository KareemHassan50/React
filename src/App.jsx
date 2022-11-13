import React, { useState, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import Search from "./pages/Search";
// import Details from "./pages/Details";
// import Notfound from "./pages/NotFound";
import AdoptedPetContext from "./contexts/AdoptedPetContext";
import Loader from "./components/Loader";

const Details = lazy(() => import("./pages/Details"));
const Notfound = lazy(() => import("./pages/NotFound"));
const Search = lazy(() => import("./pages/Search"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="loader-container">
                <Loader />
              </div>
            }
          >
            <header>
              <Link to="/">Abopt me</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<Search />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
