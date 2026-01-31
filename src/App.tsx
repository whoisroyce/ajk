import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { I18nProvider } from "@/i18n/I18nProvider";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import Philosophy from "@/pages/Philosophy";
import RomanKitchen from "@/pages/RomanKitchen";
import Menu from "@/pages/Menu";
import Experiences from "@/pages/Experiences";
import Reservations from "@/pages/Reservations";
import GiftADinner from "@/pages/GiftADinner";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <I18nProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<SiteLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/philosophy" element={<Philosophy />} />
                <Route path="/roman-kitchen" element={<RomanKitchen />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/gift-a-dinner" element={<GiftADinner />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </I18nProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
