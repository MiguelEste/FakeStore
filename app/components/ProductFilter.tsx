"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type TRadioInputData = {
  key: string;
  value?: string;
};

export function ProductFilter({
  categories,
  selected,
}: {
  categories: string[];
  selected: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) params.set("category", value);
    else params.delete("category");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  /**
   * create radio input with label
   * @param key unique identifier for radio input
   * @param value value to set category to, will use key if left undefined
   * @returns wrapper with radio input and label
   */
  const radioInput = ({ key, value }: TRadioInputData) => {
    const labelText = key[0].toUpperCase() + key.slice(1);
    return (
      <div key={key}>
        <label>
          <input
            name="categories"
            type="radio"
            value={value ?? key}
            checked={selected === (value ?? key)}
            onChange={(e) => handleChange(e.target.value)}
          />
          {labelText}{" "}
        </label>
      </div>
    );
  };

  return (
    <div className="flex-none flex flex-col bg-gray-200 dark:bg-gray-900 rounded-md p-5">
      <fieldset>
        <legend className="text-xl font-bold">Category</legend>
        {radioInput({ key: "everything", value: "" })}
        {categories.map((cat) => radioInput({ key: cat }))}
      </fieldset>
    </div>
  );
}
