import React from "react";
import { useAppData } from "../libs/appData";

const HomePage: React.FC = () => {
  const { appData, updateAppData } = useAppData();
  console.log(appData);
  return <div>HomePage</div>;
};

export default HomePage;
