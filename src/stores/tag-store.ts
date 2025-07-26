import { getTags, GetTagsRequest, GetTagsResponse } from "@/api/tag/get-tags";
import { SelectOption } from "@/components/SelectField/SelectField";
import { CognitoUser } from "amazon-cognito-identity-js";
import { create } from "zustand";

/**
 * タグストアの状態
 */
type TagState = {
  // タグ一覧
  tags: GetTagsResponse[];
  // タグオプション
  tagOptions: SelectOption[];
  // 取得状態
  fetched: boolean;
  // タグ取得
  fetchTags: (user: CognitoUser) => Promise<void>;
};

/**
 * タグストア
 */
export const useTagStore = create<TagState>((set, get) => ({
  tags: [],
  tagOptions: [],
  fetched: false,
  fetchTags: async (user: CognitoUser) => {
    if (get().fetched) return;
    try {
      const request: GetTagsRequest = {
        userId: user.getUsername() ?? "",
      };
      const res: GetTagsResponse[] = await getTags(request);
      set({
        tags: res,
        tagOptions: res.map((item) => {
          return {
            label: item.tagName,
            labelColor: item.tagColor,
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
