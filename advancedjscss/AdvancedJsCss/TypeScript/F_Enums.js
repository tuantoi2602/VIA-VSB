/*
* Enum
*/
var UserType;
(function (UserType) {
    UserType[UserType["SUPERADMIN"] = 0] = "SUPERADMIN";
    UserType[UserType["ADMIN"] = 1] = "ADMIN";
    UserType[UserType["COMMON_USER"] = 2] = "COMMON_USER";
    UserType[UserType["VISITOR"] = 3] = "VISITOR";
})(UserType || (UserType = {}));
var myUserType = UserType.ADMIN;
var myUserTypeString = UserType[myUserType]; // Vrátí "ADMIN"
/*
* Flag
*/
var Style;
(function (Style) {
    Style[Style["None"] = 0] = "None";
    Style[Style["Bold"] = 1] = "Bold";
    Style[Style["Italic"] = 2] = "Italic";
    Style[Style["Underline"] = 4] = "Underline"; // 100
})(Style || (Style = {}));
var myStyle1 = Style.Bold | Style.Italic; // bold + italic = 011
var myStyle2 = Style.Bold | Style.Italic | Style.Underline; // bold + italic + underline = 111
//# sourceMappingURL=F_Enums.js.map