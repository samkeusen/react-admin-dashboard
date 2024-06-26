import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Spending from "./scenes/spending";
import ManageCommitments from "./scenes/managecommitments";
import APIintegration from "./scenes/useraccount";
import Documentation from "./scenes/documentation";
import AWSDashboard from "./scenes/resources";
import MicrosoftAzure from "./scenes/microsoftazure";
import GoogleCloud from "./scenes/googlecloud";
import ManageIAM from "./scenes/manageiam";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar isSidebar={isSidebar} />
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/spending" element={<Spending />} />
              <Route path="/resources" element={<AWSDashboard />} />
              <Route path="/managecommitments" element={<ManageCommitments />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/microsoftazure" element={<MicrosoftAzure />} />
              <Route path="/googlecloud" element={<GoogleCloud />} />
              <Route path="/useraccount" element={<APIintegration />} />
              <Route path="/manageiam" element={<ManageIAM />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;