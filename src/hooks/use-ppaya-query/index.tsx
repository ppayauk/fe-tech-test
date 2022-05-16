import { useEffect, useState } from "react";

import response from "./response.json";
import response2 from "./response2.json";

export default function usePpayaQuery(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [hasMoreItems, setHasMoreItems] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(
        (response as any).data.invitationToTenderList.invitationsToTender
      );
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  async function fetchMore() {
    if (hasMoreItems) {
      setLoading(true);
      await new Promise((resolve) =>
        setTimeout(() => {
          setData([
            ...data,
            ...(response2 as any).data.invitationToTenderList
              .invitationsToTender,
          ]);
          setHasMoreItems(false);
          resolve(undefined);
        }, 2000)
      );
      setLoading(false);
    }
  }

  async function refetch() {
    setLoading(true);
    setData(undefined);
    await new Promise((resolve) =>
      setTimeout(() => {
        setData(
          (response as any).data.invitationToTenderList.invitationsToTender
        );
        setHasMoreItems(true);
        resolve(undefined);
      }, 2000)
    );
    setLoading(false);
  }

  return {
    loading,
    data,
    fetchMore,
    refetch,
    hasMoreItems,
  };
}
