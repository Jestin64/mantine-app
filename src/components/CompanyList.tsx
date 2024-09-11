// src/components/CompanyList.tsx
import React from 'react';
import { Table, Button } from '@mantine/core';

interface Company {
  name: string;
}

interface CompanyListProps {
  companies: Company[];
  onViewCompany: (company: Company) => void;
  onEditCompany: (company: Company) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, onViewCompany, onEditCompany }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <tr key={index}>
            <td>{company.name}</td>
            <td>
              <Button size="xs" onClick={() => onViewCompany(company)}>
                View
              </Button>
              <Button size="xs" ml="xs" onClick={() => onEditCompany(company)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CompanyList;
