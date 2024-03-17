export const formatCurrency = (value: string): string => {
  value = value.replace(/\./g, ",");
  return value;
};
