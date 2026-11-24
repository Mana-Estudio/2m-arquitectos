/** Separador de miles con punto siempre (es-ES no agrupa números de 4 cifras) */
export const miles = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
export const euros = (n: number) => `${miles(Math.round(n / 5000) * 5000)} €`;
