import bcrypt from "bcrypt";
import Degree from "../models/Degree.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";
import { uploadJSONToIPFS } from "../pinata.js";
import { hash2Cal, hashCal } from "../middleware/HashCalculate.js";
import { sign } from "crypto";
import { ethers } from "ethers";
import Student from "../models/Student.js";
//import UniversityDegree from "../hardhat/contracts/UniversityDegrees.sol/UniversityDegrees.json";

export const HECAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        HECVerified: true,
        completeVerified: true,
        dateCreated: Date.now(),
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    ).select(["-ipfsLink", "-hashValue", "-dateCreated"]);
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }
    const response = await uploadJSONToIPFS(updatedDegree);
    console.log(response.pinataURL);
    const hash = hashCal(JSON.stringify(updatedDegree));
    console.log(hash);

    const updateDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        ipfsLink: response.pinataURL,
        hashValue: hash,
        //dateCreated: Date.now,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    var StudentDetails1 = await Student.findById(updateDegree.studentID).select(
      [
        "name",
        "enrollmentNumber",
        "fatherName",
        "studentID",
        "DateOfBirth",
        "CNIC",
        "DateOfAdmission",
        "DateOfompletion",
        "Program",
        "GraduatingYear",
        "organisationID",
        "TotalCreditHours",
        "CGPA",
      ]
    );
    const contractAddress = "0x553952fd4267A6BAb54903E11F46804A400AB326";
    const abi = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "degreeId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            indexed: true,
            internalType: "address",
            name: "studentAddress",
            type: "address",
          },
          {
            indexed: false,
            internalType: "string",
            name: "ERP",
            type: "string",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "isVerified",
            type: "bool",
          },
        ],
        name: "DegreeAdded",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "uint256",
            name: "degreeId",
            type: "uint256",
          },
        ],
        name: "DegreeVerified",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_ERP",
            type: "string",
          },
          {
            internalType: "string",
            name: "_tokenURI",
            type: "string",
          },
        ],
        name: "addDegree",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "degrees",
        outputs: [
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "degreeId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isVerified",
            type: "bool",
          },
          {
            internalType: "string",
            name: "ERP",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAllDegrees",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "degreeId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isVerified",
                type: "bool",
              },
              {
                internalType: "string",
                name: "ERP",
                type: "string",
              },
            ],
            internalType: "struct UniversityDegrees.Degree[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_ERP",
            type: "string",
          },
        ],
        name: "getDegreeByERP",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "degreeId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isVerified",
                type: "bool",
              },
              {
                internalType: "string",
                name: "ERP",
                type: "string",
              },
            ],
            internalType: "struct UniversityDegrees.Degree",
            name: "",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalDegrees",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ];

    console.log("jjj");
    if (typeof window !== "undefined") {
      console.log("jjjj");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      let contract = new ethers.Contract(contractAddress, abi, signer);
      let transaction = await contract.addDegree(
        StudentDetails1.name,
        StudentDetails1.studentID,
        response.pinataURL
      );
      await transaction.wait();
      console.log("ggg");

      let getting = await contract.getDegreeByERP(StudentDetails1.studentID);
      console.log(getting);
    }

    // const signer = provider.getSigner();
    console.log(StudentDetails1.name + " " + StudentDetails1.studentID);

    // console.log(contract);

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated by HEC", updateDegree)
    );
  } catch (err) {
    console.log(err);
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error is displaying ", err)
    );
  }
};

export const OrganisationAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        organisationVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    const hash = hashCal(JSON.stringify(updatedDegree));
    const updateDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        hashValue: hash,
        //dateCreated: Date.now,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Degree Updated by University",
        updateDegree
      )
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying ",
        error
      )
    );
  }
};

export const StudentAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        studentVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Degree Updated by Student",
        updatedDegree
      )
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying ",
        error
      )
    );
  }
};

export const CompleteAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        completeVerified: true,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    if (!updatedDegree) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Degree Not Found", null)
      );
    }

    return res.json(
      jsonGenerate(
        statusCode.SUCCESS,
        "Degree Updated Completely",
        updatedDegree
      )
    );
  } catch (error) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying",
        error
      )
    );
  }
};

export const UnHECAppovedDegree = async (req, res) => {
  try {
    const updatedDegree = await Degree.findByIdAndUpdate(
      req.query.degree_id,
      {
        HECVerified: false,
        completeVerified: false,
        ipfsLink: "",
        hashValue: "",
        dateCreated: "",
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Degree Updated by HEC", updatedDegree)
    );
  } catch (err) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Error is displaying ", err)
    );
  }
};
