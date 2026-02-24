"use client";
import Tag from "@/components/modules/tag";
import Form from "@/components/modules/form/regular";
import inputs from "@/constants/form/selectTagDisposition";
import useTagStore from "@/store/tagStore";
import { useState, useEffect } from "react";

function TagList() {
  const tags = useTagStore((s) => s.tags);
  const getFilteredTags = useTagStore((s) => s.getFilteredTags);
  const selectTag = useTagStore((s) => s.selectTag);
  const selectedTag = useTagStore((s) => s.selectedTag);
  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    setFilteredTags(getFilteredTags());
  }, [tags, selectedTag, getFilteredTags]);

  const submitFn = (result) => {
    const value = result?.disposition;
    if (value) {
      selectTag(value);
    }
  };

  return (
    <div className="flex flex-col px-4">
      <div className="form-wrapper flex justify-between items-center gap-x-4">
        <span className="label">Disposition:</span>
        <Form submitFn={submitFn} inputs={inputs} mode="onChange" />
      </div>
      <div className="tags-warpper flex mt-10 justify-between w-full">
        <span className="label">Tags:</span>
        <div
          className="
            flex 
            flex-wrap 
            gap-2 
            p-4
            justify-start
            items-center
          "
        >
          {filteredTags?.map((tag) => (
            <Tag key={tag.id} {...tag} />
          ))}
          <Tag mode="add" />
        </div>
      </div>
    </div>
  );
}

export default TagList;
