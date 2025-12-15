import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MobileTyreFitting from "@/pages/services/mobile-tyre-fitting";
import EmergencyCallOut from "@/pages/services/emergency-call-out";
import PunctureRepair from "@/pages/services/puncture-repair";
import BatteryReplacement from "@/pages/services/battery-replacement";
import WheelBalancing from "@/pages/services/wheel-balancing";
import EmergencyFuel from "@/pages/services/emergency-fuel";
import LockingNutRemoval from "@/pages/services/locking-nut-removal";
import Booking from "@/pages/booking";
import Blog from "@/pages/blog";
import TyreSafetyTips from "@/pages/blog/tyre-safety-tips";
import WhenToReplaceTyres from "@/pages/blog/when-to-replace-tyres";
import WinterTyresGuide from "@/pages/blog/winter-tyres-guide";
import Locations from "@/pages/locations";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import SitemapPage from "@/pages/sitemap-page";
import About from "@/pages/about";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mobile-tyre-fitting" component={MobileTyreFitting} />
      <Route path="/emergency-call-out" component={EmergencyCallOut} />
      <Route path="/puncture-repair" component={PunctureRepair} />
      <Route path="/battery-replacement" component={BatteryReplacement} />
      <Route path="/wheel-balancing" component={WheelBalancing} />
      <Route path="/emergency-fuel" component={EmergencyFuel} />
      <Route path="/locking-nut-removal" component={LockingNutRemoval} />
      <Route path="/booking" component={Booking} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/tyre-safety-tips" component={TyreSafetyTips} />
      <Route path="/blog/when-to-replace-tyres" component={WhenToReplaceTyres} />
      <Route path="/blog/winter-tyres-guide" component={WinterTyresGuide} />
      <Route path="/locations" component={Locations} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/sitemap" component={SitemapPage} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;