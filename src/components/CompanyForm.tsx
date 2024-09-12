import React, { useState, useEffect } from "react";
import { TextInput, Button, Box } from "@mantine/core";
import { CompanyInterface } from "../App";
import { defaultCompanyData, getLocalApiKey } from "../utils";
interface CompanyFormProps {
  initialData?: CompanyInterface;
  setCompanies: any;
  setEditingCompany: (company: CompanyInterface | null) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  initialData,
  setCompanies,
  setEditingCompany,
}) => {
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = async () => {
    if (companyName !== "") {
      const date = new Date().toISOString();
      const apiKey = getLocalApiKey();
      try {
        const bodyData = {
          ...defaultCompanyData,
          name: companyName,
          createdOn: date,
        };
        const response = await fetch(
          `https://api.recruitly.io/api/company?apiKey=${apiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
          }
        );

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        // testing
        console.log(data);
        setCompanies((prev) => [...prev, data]);
        setEditingCompany(null);
        setCompanyName("");
      } catch (err) {
        console.error(err);
        alert("An error occurred while adding the company.");
      }
    } else {
      alert("Please enter a company name.");
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <TextInput
        label="Company Name"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <Button fullWidth mt="xl" onClick={handleSubmit} variant="outline">
        {initialData ? "Update" : "Add"} Company
      </Button>
      <Button
        fullWidth
        mt="xl"
        onClick={() => {
          setEditingCompany(null);
          setCompanyName("");
        }}
        variant="outline"
      >
        Clear
      </Button>
    </Box>
  );
};

export default CompanyForm;
