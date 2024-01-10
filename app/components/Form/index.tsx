"use client";

import { useRef } from "react";
import { TextInput } from "@/components/Input";
import { useState } from "react";
import { ValidateData, ShortenUrl } from "@/actions/formAction";
import SubmitButton from "./SubmitButton";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { postData } from "@/api";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState({
    originalURL: "",
    newDomain: "",
    alias: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const submitUrl = async (formData: FormData) => {
    const result = await ValidateData(formData);
    console.log(result);
    if (!result) return toast("Invalid data");

    const shortenLink = await ShortenUrl(formData);
    if (!shortenLink) return toast("error");
    console.log(shortenLink);

    const submission = await postData(formValues.originalURL, shortenLink);
    if (!submission) return toast("error");

    ref.current?.reset();
    toast("Check out your links below");
  };

  const handleKeyDown = (event: React.KeyboardEvent<any>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <div className="w-screen md:w-1/2 px-6 pt-6">
      <form ref={ref} action={submitUrl}>
        <TextInput
          type="text"
          name="originalURL"
          placeholder="Paste your long url here"
          value={formValues.originalURL}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        {/* <div className="flex flex-col md:flex-row md:gap-5 items-center">
          <TextInput
            type="text"
            name="newDomain"
            placeholder="Add a custom domain e.g. https://tech.gov.sg"
            value={formValues.newDomain}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
          <TextInput
            type="text"
            name="alias"
            placeholder="Add an alias e.g. InternEngagementDay"
            value={formValues.alias}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div> */}
        <SubmitButton />
        <Toaster />
      </form>
    </div>
  );
}
