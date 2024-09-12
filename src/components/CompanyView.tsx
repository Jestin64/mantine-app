import React from "react";
import { Button, Card, Text } from "@mantine/core";
import { CompanyInterface } from "../App";
import { CustomButton } from "./helpComponents/CustomButton";

interface CompanyViewProps {
  company: any;
  onBack: () => void;
}

const CompanyView: React.FC<CompanyViewProps> = ({ company, onBack }) => {
  return (
    <>
      <Card
        withBorder
        style={{
          padding: "20px",
          backgroundColor: "white",
          border: "2px solid #e0e0e0",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Section bg="blue.6" p="md">
          <Text mt="md" c="dimmed" size="sm">
            Company Name:
          </Text>
          <Text size="xl" fw={700} c="white">
            {company.name}
          </Text>
        </Card.Section>

        <Text mt="md" c="dimmed" size="sm">
          Company ID:
        </Text>
        <Text size="lg" fw={500}>
          {company.id}
        </Text>

        <Text mt="md" c="dimmed" size="sm">
          Created On:
        </Text>
        <Text size="lg" fw={500}>
          {new Date(company.createdOn).toLocaleDateString()}
        </Text>
      </Card>

      <CustomButton style={{ marginTop: "20px" }} onClick={onBack}>
        Back to List
      </CustomButton>
    </>
  );
};

export default CompanyView;
