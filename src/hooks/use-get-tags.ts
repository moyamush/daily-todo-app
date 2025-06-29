import { getTags, GetTagsRequest, GetTagsResponse } from "@/api/tag/get-tags";
import { SelectOption } from "@/components/SelectField/SelectField";
import { useAppStore } from "@/providers/store-provider";
import { useCallback, useEffect, useState } from "react";

/**
 * タグ取得カスタムフック
 */
export default function useGetTags() {
  const [tags, setTags] = useState<GetTagsResponse[]>([]);
  const [tagOptions, setTagOptions] = useState<SelectOption[]>([]);

  // ログイン中のユーザID取得
  const { user } = useAppStore((state) => state);

  // タグ一覧取得
  const fetchData = useCallback(async () => {
    try {
      // リクエスト作成
      const request: GetTagsRequest = {
        userId: user?.getUsername() ?? "",
      };

      // レスポンス取得
      const res: GetTagsResponse[] = await getTags(request);
      setTags(res);
      setTagOptions(
        res.map((item) => {
          return {
            label: item.tagName,
            labelColor: item.tagColor,
            value: item.id,
          };
        }),
      );
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tags,
    tagOptions,
  };
}
