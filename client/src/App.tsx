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
import Locations from "@/pages/locations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mobile-tyre-fitting" component={MobileTyreFitting} />
      <Route path="/emergency-call-out" component={EmergencyCallOut} />
      <Route path="/puncture-repair" component={PunctureRepair} />
      <Route path="/battery-replacement" component={BatteryReplacement} />
      <Route path="/locations" component={Locations} />
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