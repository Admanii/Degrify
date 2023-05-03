import { expect } from "chai";
import { ethers } from "ethers";

describe("Token Contract", function () {
  if (
    ("Should create degree document",
    async function () {
      const [owner] = await ethers.getSigners();

      const Degree = await ethers.getContractFactory("Degree");
      const degree = await Degree.deploy();
      await degree.deployed();
      const degreeAddress = degree.address;
      console.log("Degree address", degreeAddress);
    })
  );
});
