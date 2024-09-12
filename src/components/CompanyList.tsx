// src/components/CompanyList.tsx
import React, { useEffect, useState } from "react";
import { Table, Button } from "@mantine/core";
import { CompanyInterface } from "../App";
import { CustomButton } from "./helpComponents/CustomButton";

interface CompanyListProps {
  companies: CompanyInterface;
  onViewCompany: (company: CompanyInterface) => void;
  onEditCompany: (company: CompanyInterface) => void;
}

const CompanyList: React.FC<CompanyListProps> = ({
  companies,
  onViewCompany,
  onEditCompany,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {companies?.data?.map((company, index) => (
          <tr key={index}>
            <td>{company.name}</td>
            <td>
              <CustomButton onClick={() => onViewCompany(company)}>
                View
              </CustomButton>
              <CustomButton onClick={() => onEditCompany(company)}>
                Edit
              </CustomButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CompanyList;
