import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import DogWalking from "./pages/DogWalking.tsx";
import PetSitting from "./pages/PetSitting.tsx";
import Overnight from "./pages/Overnight.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Facts from "./pages/Facts.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dog-walking" element={<DogWalking />} />
          <Route path="/pet-sitting" element={<PetSitting />} />
          <Route path="/overnight-pet-sitting" element={<Overnight />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
