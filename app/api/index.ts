import axios from "axios";

async function isValidUrl(formData: FormData) {
  const { originalURL } = Object.fromEntries(formData.entries());
  const IS_VALID_URL: any = process.env.NEXT_PUBLIC_IS_VALID_URL;
  try {
    const result = await axios.post(IS_VALID_URL, {
      ogUrl: originalURL,
    });
    return result;
  } catch (err) {
    throw err;
  }
}

async function isUrlAvailable(formData: FormData) {
  const { originalURL } = Object.fromEntries(formData.entries());
  const LONG_URL_IS_EXIST: any = process.env.NEXT_PUBLIC_LONG_URL_IS_EXIST;
  try {
    const result = await axios.post(LONG_URL_IS_EXIST, {
      ogUrl: originalURL,
    });
    return result;
  } catch (err) {
    throw err;
  }
}

async function GenerateShortUrl(formData: FormData): Promise<any> {
  const { originalURL } = Object.fromEntries(formData.entries());
  const SEND_DATA: any = process.env.NEXT_PUBLIC_SEND_URL;
  try {
    const result = await axios.post(SEND_DATA, {
      ogUrl: originalURL,
    });
    return result;
  } catch (err) {
    throw err;
  }
}

export { isValidUrl, isUrlAvailable, GenerateShortUrl };
