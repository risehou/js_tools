
//使い方：
//<input type="text" id="TEL" oninput="zenkaku2hankaku(this)" />
function zenkaku2hankaku($this) {

        var str = $this.value;
        var id = $this.id;

        if (id == "TEL"||id == "YUBIN") {
            //if (!str.match(/[０-９]/g)) {
                str = str.replaceAll(/\D/g, "");
           //}
        } else{
            str = str.replaceAll(" ", "");
            str = str.replaceAll("　", "");
        }
        
        var out = str.replace(/[！-～]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
 
        $this.value = out;
}
