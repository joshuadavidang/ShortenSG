"use server";

import { isValidUrl } from "@/helper/isValidUrl";

export async function ValidateData(formData: FormData): Promise<boolean> {
  const { originalURL, newDomain } = Object.fromEntries(formData.entries());
  return isValidUrl(originalURL as string);
  // && isValidUrl(newDomain as string);
}

function randomAliasId(): string {
  return Math.floor(Math.random() * Date.now()).toString(36);
}

// function to shorten url - done in koa
export async function ShortenUrl(formData: FormData): Promise<string> {
  const { originalURL, newDomain } = Object.fromEntries(formData.entries());
  const protocols = ["https://", "http://"];
  let ogUrl = originalURL as string;
  let ogDomain = "";

  for (let protocol of protocols) {
    if (ogUrl.includes(protocol)) {
      ogDomain = ogUrl.replace(protocol, "").split("/")[0];
    }
  }
  return ogDomain + "/" + randomAliasId();
}
