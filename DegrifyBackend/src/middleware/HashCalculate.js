import { createHash } from "crypto";
import IPFS from "ipfs-mini";
//import { ipfsClient } from "ipfs-http-client";

export function hashCal(string) {
  return createHash("sha256").update(string).digest("hex");
  console.log("hash cal");
}

export function hash2Cal(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export function ipfs(string) {
  const projectId = process.env.projectId
  const projectSecret = process.env.projectSecret
  console.log(projectId)
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
  const ipfs = new IPFS({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    // headers: {
    //   authorization: auth,
    // },
  });

  ipfs.add(string, (err, hash) => {
    if (err) {
      console.log(err);
    }
    console.log(hash);
  });
}
