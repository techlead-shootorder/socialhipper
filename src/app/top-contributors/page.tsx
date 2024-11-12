import ImportantUpdate from "@/components/ImportantUpdate/ImportantUpdate";
import InfluencerTable from "@/components/top-contributors/InfluencerTable";
import Message from "@/components/top-contributors/Message";
import RowTable from "@/components/top-contributors/RowTable";
import React from "react";

const page = () => {
  return (
    <div>
      <ImportantUpdate />
      <Message />
      <InfluencerTable />
      <RowTable/>
    </div>
  );
};

export default page;
