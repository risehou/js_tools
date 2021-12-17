
//使い方：
//<input type="text" id="TEL" onblur="zenkaku2hankaku(this)" />
function zenkaku2hankaku($this) {

        var str = $this.value;
        var id = $this.id;

        var out = str.replace(/[！-～]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
 
        if (id == "TEL") {
            out = out.replaceAll("-", "");
            out = out.replaceAll("/", "");
            str = str.replaceAll(" ", "");
            out = out.replaceAll("　", "");
        } else if (id == "YUBIN") {
            out = out.replaceAll("-", "");
            out = out.replaceAll("/", "");
            out = out.replaceAll(" ", "");
            out = out.replaceAll("　", ""); 
        } else{
            out = str.replaceAll(" ", "");
            out = str.replaceAll("　", "");
        }
        $this.value = out;
}
