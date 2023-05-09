//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract UniversityDegrees {
    address payable owner;

    uint256 listPrice = 0.0001 ether;
    struct Degree {
        string tokenURI;
        uint256 degreeId;
        string name;
        bool isVerified;
        string ERP;
    }

    mapping(uint256 => Degree) public degrees;
    uint256 public totalDegrees;

    // this event is emit when we need to add degree in blockchain
    event DegreeAdded(
        string tokenURI,
        uint256 indexed degreeId,
        string name,
        address indexed studentAddress,
        string ERP,
        bool isVerified
    );
    event DegreeVerified(uint256 indexed degreeId);

    function addDegree(
        string memory _name,
        string memory _ERP,
        string memory _tokenURI
    ) public {
        totalDegrees++;
        degrees[totalDegrees] = Degree(
            _tokenURI,
            totalDegrees,
            _name,
            true,
            _ERP
        );
        emit DegreeAdded(
            _tokenURI,
            totalDegrees,
            _name,
            msg.sender,
            _ERP,
            true
        );
    }

    // function verifyDegree(uint256 _degreeId) public {
    //     require(_degreeId <= totalDegrees, "Invalid degree ID");
    //     require(degrees[_degreeId].studentAddress == msg.sender, "You are not the owner of this degree");
    //     require(!degrees[_degreeId].isVerified, "Degree is already verified");

    //     degrees[_degreeId].isVerified = true;
    //     emit DegreeVerified(_degreeId);
    // }
    function getAllDegrees() public view returns (Degree[] memory) {
        Degree[] memory allDegrees = new Degree[](totalDegrees);
        for (uint256 i = 1; i <= totalDegrees; i++) {
            allDegrees[i - 1] = degrees[i];
        }
        return allDegrees;
    }

    // get a single degree information through erp
    function getDegreeByERP(string memory _ERP)
        public
        view
        returns (Degree memory)
    {
        for (uint256 i = 1; i <= totalDegrees; i++) {
            if (keccak256(bytes(degrees[i].ERP)) == keccak256(bytes(_ERP))) {
                return degrees[i];
            }
        }
        revert("Degree not found");
    }
}
