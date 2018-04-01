var AboutClass = /** @class */ (function () {
    function AboutClass(workAt, collegeName, schoolName, livesIn, contactNumber, age, emailID, DOB, gender, language, relationshipStatus, nickname, fevQuote, numberOfFriends) {
        var _this = this;
        this.workAt = workAt;
        this.collegeName = collegeName;
        this.schoolName = schoolName;
        this.livesIn = livesIn;
        this.contactNumber = contactNumber;
        this.age = age;
        this.emailID = emailID;
        this.DOB = DOB;
        this.gender = gender;
        this.language = language;
        this.relationshipStatus = relationshipStatus;
        this.nickname = nickname;
        this.fevQuote = fevQuote;
        this.numberOfFriends = numberOfFriends;
        this.getAge = function () {
            return _this.age;
        }; //end of method
        this.getDOB = function () {
            return _this.DOB;
        };
        this.getNumberOfFriends = function () {
            return _this.numberOfFriends;
        };
        this.workAt = workAt;
        this.collegeName = collegeName;
        this.schoolName = schoolName;
        this.livesIn = livesIn;
        this.contactNumber = contactNumber;
        this.age = age;
        this.emailID = emailID;
        this.DOB = DOB;
        this.gender = gender;
        this.language = language;
        this.relationshipStatus = relationshipStatus;
        this.nickname = nickname;
        this.fevQuote = fevQuote;
        this.numberOfFriends = numberOfFriends;
    } //end of constructor
    return AboutClass;
}()); // end of class
var aboutObject = new AboutClass("IBM India Pvt. Ltd.", "SGGS College of Engineering", "P. N. College", "Pusad", 7777777777, 23, "mayurmahamune7@gmail.com", "12 Feb 1995", "Male", "English, Hindi and MArathi", "single", "Myu", "Work hard and stay humble", 1050);
console.log("\n 1. Currently working at \"" + aboutObject.workAt + "\"");
console.log("\n 2. Graduated from \"" + aboutObject.collegeName + "\"");
console.log("\n 3. Studied at \"" + aboutObject.schoolName + "\"");
console.log("\n 4. Lives in \"" + aboutObject.livesIn + "\"");
console.log("\n 5. Mobile contact number is \"" + aboutObject.contactNumber + "\"");
console.log("\n 6. Current age is \"" + aboutObject.getAge() + "\"");
console.log("\n 7. Email ID is \"" + aboutObject.emailID + "\"");
console.log("\n 8. Date of Birth is \"" + aboutObject.getDOB() + "\"");
console.log("\n 9. Gender is \"" + aboutObject.gender + "\"");
console.log("\n 10. Languages are \"" + aboutObject.language + "\"");
console.log("\n 11. Relationship status is \"" + aboutObject.relationshipStatus + "\"");
console.log("\n 12. Nickname is \"" + aboutObject.nickname + "\"");
console.log("\n 13. Favourite quote is \"" + aboutObject.fevQuote + "\"");
console.log("\n 14. Total Friends are \"" + aboutObject.getNumberOfFriends() + "\"");
