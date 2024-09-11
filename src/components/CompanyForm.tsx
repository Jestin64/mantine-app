// src/components/CompanyForm.tsx
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Box } from '@mantine/core';

interface Company {
  name: string;
}

interface CompanyFormProps {
  initialData?: Company;
  onSubmit: (company: Company) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({ name });
  };

  return (
    <Box mt="lg">
      <TextInput
        label="Company Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Button fullWidth mt="xl" onClick={handleSubmit}>
        {initialData ? 'Update' : 'Add'} Company
      </Button>
    </Box>
  );
};

export default CompanyForm;
