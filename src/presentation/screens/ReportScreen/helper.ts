import { generateColor } from "@/common/utils/colors";
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
    color: generateColor(),
  }));
}

export const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#ffa726",
  },
};
