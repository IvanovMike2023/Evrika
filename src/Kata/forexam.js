
function longestRepetition(s) {

   // console.log(s)
   // console.log('acdccccccccccccccccc')
}
//longestRepetition("h4q1e0k2yr65fe0tl5wvdqndbjlfpp4dzcgeuftb11p4czftvih04srxwrjyze3v5qswwh3cirsvmf4l427i963vp6249lo6iehsoa8oe4m0g6tq7szo1b89jgfm9rxr4ev7hbcwy7gy6t5tsxrp58l2fnaqedp3sknb5bx92ib3t7d7zmjnieybbfdekcg0k8hhqsm9o7odzegca8xa1vmb5532bn34she8pxoid7hoxrumj5cl91xk83zatev1xbxjto3oenrfoanqj882e66qhwuyt7pmwxpfp6zoe8crayksn4iflhk2v46g2afw4ylcbjkr0369cbp1zp70cprbgfswfb3p6cwsmjogfe4ji45ceboilejj1lm8lzqst4rhqaw4g9txr6mcac556t3lqmll7lpbxnpc4b9kab0j4b4aj249d9gryfdioa5f28xfk6eoo5hpinkw4lztdks2npstlndbxywaee88j9fnqdlt63k1"); // 'Hello good day' ['a', 'a', 'b', 'b', 'b']
//longestRepetition("bbbaaabaaaa")
longestRepetition("h4q1e0k2yr65fe0tl5wvdqndbjlfpp4dzcgeuftb11p4czftvih04srxwrjyze3v5qs")
//longestRepetition("bbaabbbbbbс")
//longestRepetition("bbbaaabaaaccccca")
/*function decipherThis(str) {
   return str.split(" ")
     .map(w =>
       w.replace(/^\d+/, c => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
     )
     .join(" ")
 }
*/
let users = ['dimych', 'valera', 'artem', 'katya']


function removeWhitespaces(string) {
    console.log(string.split(' '))
    string.split(' ').filter(s => s !== '').join('_')
}

console.log(removeWhitespaces('you are JS developer'))