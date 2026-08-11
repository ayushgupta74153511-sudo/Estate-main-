export const calculateEMI = (principal, rate, months) => {
  const monthlyRate = rate / 12 / 100;
  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return emi ? emi.toFixed(0) : 0;
};