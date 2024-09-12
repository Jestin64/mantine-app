import React, { useEffect, useState } from "react";
import LoginPage from "./components/LoginPage";
import CompanyList from "./components/CompanyList";
import CompanyForm from "./components/CompanyForm";
import CompanyView from "./components/CompanyView";
import Navbar from "./components/Navbar";
import {
  getLocalApiKey,
  getLocalUserLogin,
  setLocalApiKey,
  setLocalUserLogin,
} from "./utils";
import {
  addOrUpdateCompany,
  fetchCompanies,
  handleLogin,
  handleLogout,
} from "./helpers";

export interface CompanyInterface {
  data: any[];
  totalCount: number;
}

const API_KEY = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [companies, setCompanies] = useState<any>([]);
  const [currentViewCompany, setCurrentViewCompany] =
    useState<CompanyInterface | null>(null);
  // console.log("currentViewCompany", currentViewCompany);
  const [editingCompany, setEditingCompany] = useState<CompanyInterface | null>(
    null
  );
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!getLocalApiKey()) setLocalApiKey(API_KEY);
    const userLogin = getLocalUserLogin();
    if (userLogin) setLoggedIn(true);
  }, []);

  useEffect(() => {
    fetchCompanies({ setCompanies, setError });
  }, []);

  if (!loggedIn) {
    return (
      <LoginPage
        onLogin={(username, password) =>
          handleLogin({ setLoggedIn, setLocalUserLogin, username, password })
        }
      />
    );
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
        backgroundColor: "#ffeed8 !important",
      }}
    >
      <Navbar
        onLogout={() =>
          handleLogout({
            setLoggedIn,
            setCompanies,
            setCurrentViewCompany,
            setEditingCompany,
          })
        }
      />
      {currentViewCompany ? (
        <CompanyView
          company={currentViewCompany}
          onBack={() => setCurrentViewCompany(null)}
        />
      ) : (
        <>
          <CompanyForm
            initialData={editingCompany || undefined}
            setCompanies={setCompanies}
            setEditingCompany={setEditingCompany}
          />
          <CompanyList
            companies={companies}
            onViewCompany={(company) => setCurrentViewCompany(company)}
            onEditCompany={(company) => setEditingCompany(company)}
          />
        </>
      )}
    </div>
  );
};

export default App;
