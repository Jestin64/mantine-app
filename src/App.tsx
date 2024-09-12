import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import CompanyList from "./components/CompanyList";
import CompanyForm from "./components/CompanyForm";
import CompanyView from "./components/CompanyView";
import Navbar from "./components/Navbar";
import {
  getLocalApiKey,
  getLocalUserLogin,
  removeLocalApiKey,
  removeLocalUserLogin,
  setLocalApiKey,
  setLocalUserLogin,
} from "./utils";

interface Company {
  name: string;
}

const API_KEY = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [currentViewCompany, setCurrentViewCompany] = useState<Company | null>(
    null
  );
  const [editingCompany, setEditingCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (!getLocalApiKey()) setLocalApiKey(API_KEY);
    const userLogin = getLocalUserLogin();
    if (userLogin) setLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    setLocalUserLogin(true);
  };
  const handleLogout = () => {
    if (getLocalApiKey()) removeLocalApiKey();
    setLoggedIn(false);
    removeLocalUserLogin();
  };

  const addOrUpdateCompany = (company: Company) => {
    if (editingCompany) {
      setCompanies((prev) =>
        prev.map((c) => (c.name === editingCompany.name ? company : c))
      );
      setEditingCompany(null);
    } else {
      setCompanies((prev) => [...prev, company]);
    }
  };

  const handleViewCompany = (company: Company) => {
    setCurrentViewCompany(company);
  };

  const handleEditCompany = (company: Company) => {
    setEditingCompany(company);
  };

  if (!loggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar onLogout={handleLogout} />
      {currentViewCompany ? (
        <CompanyView
          company={currentViewCompany}
          onBack={() => setCurrentViewCompany(null)}
        />
      ) : (
        <>
          <CompanyForm
            initialData={editingCompany || undefined}
            onSubmit={addOrUpdateCompany}
            setEditingCompany={setEditingCompany}
          />
          <CompanyList
            companies={companies}
            onViewCompany={handleViewCompany}
            onEditCompany={handleEditCompany}
          />
        </>
      )}
    </div>
  );
};

export default App;
