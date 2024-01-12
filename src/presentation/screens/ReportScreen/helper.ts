import { Proposal } from "@/features/proposals/interfaces";

interface Goup {
  city: string;
  quantity: number;
}

export function groupByCityAndCount(proposals: Proposal[]): Goup[] {
  const groupedByCity: { [city: string]: number } = {};

  proposals.forEach((proposal) => {
    const city = proposal.addressCity;

    if (!groupedByCity[city]) {
      groupedByCity[city] = 1;
    } else {
      groupedByCity[city]++;
    }
  });

  return Object.entries(groupedByCity).map(([city, quantity]) => ({
    city,
    name: city,
    quantity,
  }));
}
