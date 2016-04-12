var numtoCL = {}
numtoCL.toS = function(num){
    var op = {
        ch: '零一二三四五六七八九',
        ch_u: '个十百千万亿',
        toCL: this.toCL
    }
    return this.toCL.call(op,num);
}
Maxnumb = 9007199254740992;
numtoCL.toCL = function(num){
    var n = num, //传入的数字
        sn = n.toString(); //传入数字的字符串表示

    var ch = this.ch || '零一二三四五六七八九',
        ch_u = this.ch_u || '个十百千',
        n0 = ch.charAt(0),
        reg = new RegExp(ch.charAt(0)+"*$"),
        reg1 = new RegExp(ch.charAt(0)+"+",'g'),
        reg2 = new RegExp("一十");
    if(n !== n){return '参数错误!'}
    if(n>99999){return '超出出范围!'}

    if(sn.length==1){
        return  ch.charAt(n);
    }else if(sn.length<=4){
        var str = '';
        for(var i=0,n=sn.length;n--;){
            var _num = +sn.charAt(i);
            str += this.toCL(sn.charAt(i)) + (_num && n?ch_u.charAt(n):'')
            i++;
        }
        str = str.replace(reg1,n0);
        str = str.replace(reg,'');
        str = str.replace(reg2,'十');
        return str;
    }else{
        return '超出出范围!';
    }
}
