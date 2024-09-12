import React from "react";
import { Button, Card, Text } from "@mantine/core";

interface Company {
  name: string;
}

interface CompanyViewProps {
  company: Company;
  onBack: () => void;
}

const CompanyView: React.FC<CompanyViewProps> = ({ company, onBack }) => {
  return (
    <Card shadow="sm" p="lg">
      <Text>Company Name: {company.name}</Text>
      <Button onClick={onBack}>Back</Button>
    </Card>
  );
};

export default CompanyView;
