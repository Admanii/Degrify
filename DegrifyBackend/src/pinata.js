const key = `99d0f1a5187a5b79a52a`;
const secret =
  "6803014277db09abbe3a869477aa1d156697a7ad67a80c7dc6f5982192ccffcc";
const JWT = process.env.Pinata_JWT;
import axios from "axios";
import FormData from "form-data";

export const uploadJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataURL:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
