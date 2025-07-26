import {
  getStatuses,
  GetStatusesRequest,
  GetStatusesResponse,
} from "@/api/status/get-statuses";
import { SelectOption } from "@/components/SelectField/SelectField";
import { CognitoUser } from "amazon-cognito-identity-js";
import { create } from "zustand";

/**
 * ステータスストアの状態
 */
type StatusState = {
  // ステータス一覧
  statuses: GetStatusesResponse[];
  // ステータスオプション
  statusOptions: SelectOption[];
  // 取得状態
  fetched: boolean;
  // ステータス取得
  fetchStatuses: (user: CognitoUser) => Promise<void>;
};

export const useStatusStore = create<StatusState>((set, get) => ({
  statuses: [],
  statusOptions: [],
  fetched: false,
  fetchStatuses: async (user: CognitoUser) => {
    if (get().fetched) return;
    try {
      const request: GetStatusesRequest = {
        userId: user.getUsername() ?? "",
      };
      const res: GetStatusesResponse[] = await getStatuses(request);
      set({
        statuses: res,
        statusOptions: res.map((item) => {
          return {
            label: item.statusName,
            labelColor: item.statusColor,
            value: item.id,
          };
        }),
        fetched: true,
      });
    } catch (err) {
      console.error(err);
    }
  },
}));
