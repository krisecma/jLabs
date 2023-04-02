import { useEffect, useState } from "react";
import { get } from "../services/crudRequests";
import { BASE_API_URL, RECORDS } from "../config/client";

export function useRecordsGetList() {
  const [query, setQuery] = useState({ data: [], loading: true, error: false });

  const getQuery = () => {
    get(BASE_API_URL, RECORDS).then((respnse) => {
      setQuery({ data: respnse, loading: false, error: !respnse });
    });
  };

  useEffect(() => {
    getQuery();
  }, []);

  return { ...query };
}
