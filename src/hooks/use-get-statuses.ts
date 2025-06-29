import {
  getStatuses,
  GetStatusesRequest,
  GetStatusesResponse,
} from "@/api/status/get-statuses";
import { SelectOption } from "@/components/SelectField/SelectField";
import { useAppStore } from "@/providers/store-provider";
import { useCallback, useEffect, useState } from "react";

/**
 * ステータス取得カスタムフック
 */
export default function useGetStatuses() {
  const [statuses, setStatuses] = useState<GetStatusesResponse[]>([]);
  const [statusOptions, setStatusOptions] = useState<SelectOption[]>([]);

  // ログイン中のユーザID取得
  const { user } = useAppStore((state) => state);

  const fetchData = useCallback(async () => {
    try {
      // リクエスト作成
      const request: GetStatusesRequest = {
        userId: user?.getUsername() ?? "",
      };

      // レスポンス取得
      const res: GetStatusesResponse[] = await getStatuses(request);
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
      console.error(err);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    statuses,
    statusOptions,
  };
}
