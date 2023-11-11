import React from "react";
import useAllData from "../../../hooks/useAllData";
import CategoryWiseData from "./CategoryWiseData";

const DashboardPage = () => {
  const [allData] = useAllData();
  // console.log(allData);
  const grouthMarketing = allData.filter(
    (items) => items.category === "grouth-marketing"
  );
  const digitalMarketing = allData.filter(
    (items) => items.category === "digital-marketing"
  );
  const productMarketing = allData.filter(
    (items) => items.category === "product-marketing"
  );
  const paidMarketing = allData.filter(
    (items) => items.category === "paid-marketing"
  );
  const organicMarketing = allData.filter(
    (items) => items.category === "organic-marketing"
  );
  // console.log(digitalMarketing);
  return (
    <div>
      <CategoryWiseData items={paidMarketing}></CategoryWiseData>
    </div>
  );
};

export default DashboardPage;
