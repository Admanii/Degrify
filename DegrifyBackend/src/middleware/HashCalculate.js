import { createHash } from "crypto";

export function hashCal(string) {
  return createHash("sha256").update(string).digest("hex");
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
