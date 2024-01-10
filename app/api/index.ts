import axios from "axios";

async function getData() {
  const GET_DATA: any = process.env.NEXT_PUBLIC_GET_URL;
  try {
    const result = await axios.get(GET_DATA);
    return result;
  } catch (err) {
    throw err;
  }
}

async function postData(ogUrl: string, shortUrl: string = "HELLO DIV") {
  const SEND_DATA: any = process.env.NEXT_PUBLIC_SEND_URL;
  try {
    const result = await axios.post(SEND_DATA, {
      ogUrl: ogUrl,
      shortUrl: shortUrl,
    });
    return result;
  } catch (err) {
    throw err;
  }
}

export { getData, postData };
