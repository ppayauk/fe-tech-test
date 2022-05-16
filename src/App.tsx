import React, { useState } from "react";
import "./App.css";

import classNames from "classnames";
import usePpayaQuery from "./hooks/use-ppaya-query";

import { RefreshIcon, ArrowLeftIcon } from "@heroicons/react/solid";

function App() {
  const { loading, data, fetchMore, refetch, hasMoreItems } =
    usePpayaQuery("dummy-query");

  return (
    <div className="App flex flex-col items-center px-4">
      <span className="text-3xl font-bold underline text-amber-600 mt-6">
        This project is using TailwindCSS
      </span>
    </div>
  );
}

export default App;
