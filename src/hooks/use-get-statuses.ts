import { getStatuses, GetStatusesResponse } from "@/api/status/get-statuses";
import { SelectOption } from "@/components/SelectField/SelectField";
import { useCallback, useEffect, useState } from "react";

/**
 * ステータス取得カスタムフック
 */
export default function useGetStatuses() {
  const [statuses, setStatuses] = useState<GetStatusesResponse[]>([]);
  const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const res: GetStatusesResponse[] = await getStatuses();
      setStatuses(res);
      setStatusOptions(
        res.map((item) => {
          return {
            label: item.statusName,
            labelColor: item.statusColor,
            value: item.id,
          };
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    statuses,
    statusOptions,
  };
}
