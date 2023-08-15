"use clietn";
import { Statistic } from "@/src/components/Statistic";

const StatisticWithFilterButton = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div>
        <Statistic.Title>Memebers</Statistic.Title>
      </div>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{1212122}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

const StatisticWithFilterButtonCode = `
"use clietn";
import { Statistic } from "keep-design";

const StatisticWithFilterButton = () => {
  return (
    <Statistic showFilter={true} showDollar={true}>
      <div>
        <Statistic.Title>Memebers</Statistic.Title>
      </div>
      <div className="flex items-center gap-2">
        <Statistic.Amount>{1212122}</Statistic.Amount>
        <Statistic.Rate>1.5</Statistic.Rate>
      </div>
    </Statistic>
  );
};

export default StatisticWithFilterButton;
`;

export { StatisticWithFilterButton, StatisticWithFilterButtonCode };
