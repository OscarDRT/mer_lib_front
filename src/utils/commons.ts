export const amountFormat = (amount: number, currency: string) => {
  return Number(amount).toLocaleString("es-AR", {
    style: "currency",
    currency,
  });
};
