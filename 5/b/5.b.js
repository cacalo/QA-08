x=["first","second","third","fourth","fifth"];
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    cappitalizedWord = element.substring(0,1).toUpperCase() + element.substring(1,element.length);
    x[index]=cappitalizedWord;
    alert("The item in postion " + index+1 + " was changed to: " + cappitalizedWord);
}