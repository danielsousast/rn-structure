import { useList } from "@/features/proposals";
import React, { useEffect, useMemo } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { groupByCityAndCount } from "./helper";
import { Screen } from "@/presentation/components";
import * as S from "./styles";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CHART_WIDTH = SCREEN_WIDTH - 62;

export function ReportScreen() {
  const { proposals } = useList();

  const reportyData = useMemo(() => {
    return groupByCityAndCount(proposals);
  }, [proposals]);

  return (
    <Screen>
      <S.Title>Cadastros por cidade</S.Title>
      <PieChart
        data={reportyData}
        width={SCREEN_WIDTH}
        height={CHART_WIDTH - 90}
        accessor={"quantity"}
        backgroundColor={"transparent"}
        paddingLeft={"20"}
        center={[0, 0]}
        absolute
        chartConfig={{
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
        }}
      />
    </Screen>
  );
}
