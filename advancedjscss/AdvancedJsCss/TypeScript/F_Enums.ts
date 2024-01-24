
/*
* Enum
*/
enum UserType{
    SUPERADMIN,
    ADMIN,
    COMMON_USER,
    VISITOR
}

var myUserType: UserType = UserType.ADMIN;

var myUserTypeString: string = UserType[myUserType]; // "ADMIN"




/*
* Flag
*/
enum Style {
    None = 0,     // 000
    Bold = 1,     // 001
    Italic = 2,   // 010
    Underline = 4 // 100
}

var myStyle1: Style = Style.Bold | Style.Italic; // bold + italic = 011
var myStyle2: Style = Style.Bold | Style.Italic | Style.Underline; // bold + italic + underline = 111