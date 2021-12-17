
//使い方：
//<input type="text" id="TEL" onblur="zenkaku2hankaku(this)" />
function zenkaku2hankaku($this) {

        var str = $this.value;
        var id = $this.id;

        var out = str.replace(/[！-～]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
 
        if (id == "TEL") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        } else if (id == "YUBIN") {
            str = str.replaceAll("-", "");
            str = str.replaceAll("/", "");
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", ""); 
        } else{
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        }
        document.getElementById(id).value = out;
}
