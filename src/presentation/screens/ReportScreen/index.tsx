import { useList } from "@/features/proposals";
import React, { useMemo } from "react";
import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { chartConfig, groupByCityAndCount } from "./helper";
import { Button, Screen } from "@/presentation/components";
import * as S from "./styles";
import { EmtpyFeedback } from "../../components/EmtpyFeedback";

const SCREEN_WIDTH = Dimensions.get("window").width;
const CHART_WIDTH = SCREEN_WIDTH - 62;

export function ReportScreen({ navigation }) {
  const { proposals } = useList();

  const reportyData = useMemo(() => {
    return groupByCityAndCount(proposals);
  }, [proposals]);

  return (
    <Screen>
      <S.Content>
        <S.Title>Propostas por cidade</S.Title>
        {reportyData?.length === 0 && <EmtpyFeedback />}
        <PieChart
          data={reportyData}
          width={SCREEN_WIDTH}
          height={CHART_WIDTH - 90}
          accessor={"quantity"}
          backgroundColor={"transparent"}
          paddingLeft={"20"}
          center={[0, 0]}
          absolute
          chartConfig={chartConfig}
        />
      </S.Content>
      <Button title="Voltar" onPress={navigation.goBack} />
    </Screen>
  );
}
