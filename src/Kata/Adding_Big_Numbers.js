function res(a, b, result, carry, base) {
    if(a.length == 0 && b.length == 0 && !carry)
        return result;

    //берем младшие разряды
    var left = parseInt(a.pop() || '0', 10);

    var right = parseInt(b.pop() || '0', 10);

    //складываем и добавляем перебор с прошлой итерации
    var l = left + right + (carry || 0);
    console.log(carry)
    //console.log(a.pop() || '0')
    //вызываем для следующих разрядов, правильно вычисляя добавленную цифру и цифру переноса
    return res(a, b, l % base + (result || ""), Math.floor(l/base), base);
}

function add(a, b) {
    //console.log(a.toString().split(""))
    return res(a.toString().split(""), b.toString().split(""), "","",10).toString();
}
add('63829983432984289347293874', '90938498237058927340892374089');// -> "444"
//add("11", "99");   -> "110"
