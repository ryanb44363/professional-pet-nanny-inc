import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PageLoader } from "@/components/PageLoader";
import Index from "./pages/Index.tsx";
import DogWalking from "./pages/DogWalking.tsx";
import PetSitting from "./pages/PetSitting.tsx";
import Overnight from "./pages/Overnight.tsx";
import SmartPuppy from "./pages/SmartPuppy.tsx";
import EmergencyPetSitting from "./pages/EmergencyPetSitting.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Facts from "./pages/Facts.tsx";
import Reviews from "./pages/Reviews.tsx";
import Reviews from "./pages/Reviews.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PageLoader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dog-walking" element={<DogWalking />} />
          <Route path="/pet-sitting" element={<PetSitting />} />
          <Route path="/overnight-pet-sitting" element={<Overnight />} />
          <Route path="/smart-puppy-plan" element={<SmartPuppy />} />
          <Route path="/emergency-pet-sitting" element={<EmergencyPetSitting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
