alert( sumSK(377) );  // kvietimas <---!!!!

  function sksksksks(k, d) {  // целое число прописью, это основа
    var i = '', e = [
 ['','tūkstančiai','milijonai','milijard','trilijonas','kvadrilijonas','kvintilijonas','sekstiljonas','septilijonas','oktilionas','nonilijonas','declijonas'],
 ['','',''],// dar galvoju 
 ['','','']
];
    if (k == '' || k == '0') return ' zero'; // 0
    k = k.split(/(?=(?:\d{3})+$)/);  // masiv destruction in to III part
    if (k[0].length == 1) k[0] = '00'+k[0];
    if (k[0].length == 2) k[0] = '0'+k[0];
    for (var j = (k.length - 1); j >= 0; j--) {  // su galune
      if (k[j] != '000') {
        i = (((d && j == (k.length - 1)) || j == (k.length - 2)) && (k[j][2] == '1' || k[j][2] == '2') ? t(k[j],1) : t(k[j])) + declOfNum(k[j], e[0][k.length - 1 - j], (j == (k.length - 2) ? e[1] : e[2])) + i;
      }
    }
    function t(k, d) {  
      var e = [
 ['',' vienas',' du',' tris','keturi',' penki',' sesi',' septini',' astuoni',' devini'],
 [' desimt',' vienolika',' dvilika',' trilika',' keturiolika',' penkiolika','sesiolika',' septiniolika',' astuoniolika','deviniolika'],
 ['','',' dvidesimt',' trisdesimt',' keturesdesimt',' penkesdesimt',' sesesdesimt',' septinesdesimt',' astuonesdesimt',' devinesdesimt'],
 ['',' simtas',' dvi simtai',' tris simtai',' keturi simtai',' penki simtai',' sesi simtai',' septini simptai',' astuoni simtai',' devini simtai'],
 ['',' viena',' dvi']
];
      return e[3][k[0]] + (k[1] == 1 ? e[1][k[2]] : e[2][k[1]] + (d ? e[4][k[2]] : e[0][k[2]]));
    }
    return i;
  }
  function declOfNum(n, t, o) {  // saknis
    var k = [2,0,1,1,1,2,2,2,2,2];
    return (t == '' ? '' : ' ' + t + (n[n.length-2] == "1"?o[2]:o[k[n[n.length-1]]]));
  }
  function razUp(e) { 
    return e[1].toUpperCase() + e.substring(2);
  }
  function sumSK(a) {
    a = a.toString();  
     return razUp(sksksksks(a,1) + declOfNum(a, '', ['','',''])); //for linksniu

  }