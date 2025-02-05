import StackedBarChart from './StackedBarChart';
import { AppContext } from "./AppContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Graphlogo from "../assets/Graph.svg";


const Placement = () => {
  const { t } = useTranslation();
  const { theme } = useContext(AppContext);
  const chartData = {
    labels: ['UG 2019', 'UG 2020', 'UG 2021', 'UG 2022', 'UG 2023', 'UG 2024', 'UG 2025'],
    averageLPAs: [10, 12, 10, 10, 11.45, 10, 10],
    highestLPAs: [17, 44, 20, 20, 26, 20, 15],
  };

  return (
    <div className={`bg-${theme}txtbg text-${theme}txt w-full shadow-xl rounded-lg p-[10px] `}>
      <div className="flex items-center justify-evenly relative w-full">

        <div className="flex items-center justify-center">
          <img className={`w-5 ${theme === "dark" ? "invert" : ""}  mr-1`} src={Graphlogo} alt="Graphlogo" />
          <h1 className="font-dosis font-semibold text-xl">
            {t("placement_stat")}
          </h1>
        </div>

        <div>
          <div className="absolute right-2 top-1">
            <div className={`rounded-xl border-[0.5px] border-gray-300 text-[8px] flex flex-row w-full items-center justify-center gap-2 px-1 h-5 w-20`}>
              <div className={`p-[5px] bg-[#66D224] rounded-full whitespace-nowrap`}></div>
              2025 Ongoing
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center h-full w-full pb-2">
        <div className="w-80 ">
          <StackedBarChart data={chartData} height={400} width={700} />
        </div>
      </div>
    </div>
  );
};

export default Placement;
