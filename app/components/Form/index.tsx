"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/helpers/enum";
import { DotsHorizontalIcon, Link2Icon } from "@radix-ui/react-icons";
import { GenerateShortUrl, isUrlAvailable } from "@/api";
import { setData } from "@/redux/features/url/urlSlice";
import { isValidUrl, smoothScrollTo, validateFormLength } from "@/helpers";
import { TextInput } from "@/components/Input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    originalURL: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const submitUrl = async (formData: FormData) => {
    const url = formData.get("originalURL") as string;
    const userInput = validateFormLength(url);

    if (!userInput) return toast("Please enter a value!");

    const result = isValidUrl(url);
    if (!result) return toast("Ensure that the entered link is valid!");

    setLoading(true);
    smoothScrollTo("result");
    setTimeout(async () => {
      const response = await isUrlAvailable(formData);
      const { status, result } = response.data;
      if (status === DATA.AVAILABLE) {
        toast("Check out the short link");
        dispatch(setData(result));
      } else {
        toast("Short link generated!");
        const generatedData = await GenerateShortUrl(formData);
        const { result } = generatedData.data;
        dispatch(setData(result));
      }

      setLoading(false);
      ref.current?.reset();
    }, 500);
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className="lg:w-10/12 md:p-16 md:bg-blue rounded-2xl">
      <form ref={ref} action={submitUrl} className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Link2Icon className="w-6 h-auto opacity-75" />
          <TextInput
            type="text"
            name="originalURL"
            placeholder="Paste your long url here"
            value={formValues.originalURL}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button variant="default" type="submit" size="lg" className="w-full">
          {loading ? (
            <DotsHorizontalIcon className="w-9 h-9 animate-pulse" />
          ) : (
            "Shorten URL"
          )}
        </Button>
      </form>
      <Toaster />
    </div>
  );
}
