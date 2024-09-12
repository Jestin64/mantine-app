import React, { useState, useEffect } from "react";
import { TextInput, Button, Box } from "@mantine/core";

interface Company {
  name: string;
}

interface CompanyFormProps {
  initialData?: Company;
  onSubmit: (company: Company) => void;
  setEditingCompany: (company: Company | null) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({
  initialData,
  onSubmit,
  setEditingCompany,
}) => {
  const [name, setName] = useState("");
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ name });
  };

  return (
    // style this more professionally
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
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button fullWidth mt="xl" onClick={handleSubmit} variant="outline">
        {initialData ? "Update" : "Add"} Company
      </Button>
      {/* route to previous page */}
      <Button
        fullWidth
        mt="xl"
        onClick={() => {
          setEditingCompany(null);
        }}
        variant="outline"
      >
        Cancel
      </Button>
    </Box>
  );
};

export default CompanyForm;
