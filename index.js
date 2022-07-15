
const text = Buffer.from('aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K', "base64");
const oldText = text.toString();
var decoded = "";
for (var i = oldText.length - 1; i >= 0; i--) {
    decoded += oldText[i]; 
}
console.log(decoded)


