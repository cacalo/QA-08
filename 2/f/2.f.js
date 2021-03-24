longString = "Characters capitalization";
space = longString.indexOf(" ");
cappitalizedString = longString.substring(0,1).toUpperCase() + longString.substring(1,space).toLowerCase() +  " " + longString.substring(space+1,space+2).toUpperCase()+longString.substring(space+2,longString.length);