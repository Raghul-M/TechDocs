import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/DocsLayout";
import Overview from "./pages/docs/Overview";
import EnvironmentSetup from "./pages/docs/EnvironmentSetup";
import CLIInstallation from "./pages/docs/CLIInstallation";
import PackagesCDN from "./pages/docs/PackagesCDN";
import VSCodeExtension from "./pages/docs/VSCodeExtension";
import NextSteps from "./pages/docs/NextSteps";
import UpgradeV8 from "./pages/docs/UpgradeV8";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Documentation Routes */}
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Overview />} />
            <Route path="environment-setup" element={<EnvironmentSetup />} />
            <Route path="cli-installation" element={<CLIInstallation />} />
            <Route path="packages-cdn" element={<PackagesCDN />} />
            <Route path="vscode-extension" element={<VSCodeExtension />} />
            <Route path="next-steps" element={<NextSteps />} />
            <Route path="upgrade-v8" element={<UpgradeV8 />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
