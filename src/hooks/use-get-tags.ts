import { getTags, TagsResponse } from "@/api/tag/tags";
import { SelectOption } from "@/components/SelectField/SelectField";
import { useCallback, useEffect, useState } from "react";

/**
 * タグ取得カスタムフック
 */
export default function useGetTags() {
  const [tags, setTags] = useState<TagsResponse[]>([]);
  const [tagOptions, setTagOptions] = useState<SelectOption[]>([]);
  const fetchData = useCallback(async () => {
    try {
      const res: TagsResponse[] = await getTags();
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
    } catch (err) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    tags,
    tagOptions,
  };
}
