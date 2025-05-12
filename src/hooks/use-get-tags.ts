import { getTags, GetTagsResponse } from "@/api/tag/get-tags";
import { SelectOption } from "@/components/SelectField/SelectField";
import { useCallback, useEffect, useState } from "react";

/**
 * タグ取得カスタムフック
 */
export default function useGetTags() {
  const [tags, setTags] = useState<GetTagsResponse[]>([]);
  const [tagOptions, setTagOptions] = useState<SelectOption[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const res: GetTagsResponse[] = await getTags();
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tags,
    tagOptions,
  };
}
