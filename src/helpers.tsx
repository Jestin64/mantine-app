import {
  getLocalApiKey,
  removeLocalApiKey,
  removeLocalUserLogin,
} from "./utils";

export const appTheme = {
  borderColor: "#959595",
};

export const handleLogin = async ({
  setLoggedIn,
  setLocalUserLogin,
  username,
  password,
}) => {
  if (username !== "" && password !== "") {
    // // login to this http://api.recruitly.io/login
    // const response = await fetch("http://api.recruitly.io/login", {
    //   method: "POST",
    //   body: JSON.stringify({ username, password }),
    // });

    setLoggedIn(true);
    setLocalUserLogin(true);
  } else {
    alert("Username or password cannot be empty!");
  }
};

export const handleLogout = ({
  setLoggedIn,
  setCompanies,
  setCurrentViewCompany,
  setEditingCompany,
}) => {
  if (getLocalApiKey()) removeLocalApiKey();
  setLoggedIn(false);
  removeLocalUserLogin();
  setCompanies([]);
  setCurrentViewCompany(null);
  setEditingCompany(null);
};

export const fetchCompanies = async ({ setCompanies, setError }) => {
  try {
    const apiKey = getLocalApiKey();
    const pageNumber = 0;
    const pageSize = 5;
    if (apiKey) {
      const response = await fetch(
        `https://api.recruitly.io/api/company/list?apiKey=${apiKey}&onlyMyRecords=false&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=DESC&sortField=createdOn`
      );
      if (!response.ok) {
        throw new Error("Error fetching companies");
      }
      const data = await response.json();
      setCompanies(data); // Set the companies data
    }
  } catch (error) {
    setError(error);
  }
};

export const addOrUpdateCompany = ({
  company,
  setCompanies,
  editingCompany,
  setEditingCompany,
}) => {
  if (editingCompany) {
    setCompanies((prev) =>
      prev.map((c) => (c.name === editingCompany.name ? company : c))
    );
    setEditingCompany(null);
  } else {
    setCompanies((prev) => [...prev, company]);
  }
};
