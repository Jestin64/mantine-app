import { Button } from "@mantine/core";

export const CustomButton = ({
  onClick,
  children,
  style = {},
  size = "xs",
}) => {
  const defaultStyle = {
    ...style,
    borderColor: "grey",
  };

  return (
    <Button size={size} style={defaultStyle} onClick={onClick}>
      {children}
    </Button>
  );
};
