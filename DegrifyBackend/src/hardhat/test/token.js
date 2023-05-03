import { expect } from "chai";

describe("Token Contract", function () {
  if (
    ("Should create degree document",
    async function () {
      const [owner] = await ethers.getSigners();

      const Degree = await ethers.getContractFactory("UniversityDegrees");
      const degree = await Degree.deploy();
      await degree.deployed();
      const degreeAddress = degree.address;
      console.log("Degree address", degreeAddress);

      const addDegree = degree.addDegree("osama", "18608");
      expect(await degree.totalDegrees).to.equal(totalDegrees + 1);
    })
  );
});
