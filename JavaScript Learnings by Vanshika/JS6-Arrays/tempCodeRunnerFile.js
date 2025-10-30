




let cartValue = 40, isPremiumMember = true;
let freeShipping = cartValue > 50 || isPremiumMember;
console.log(freeShipping);


for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        if (j === 1) break;
        console.log(`${i}, ${j}`);
    }
}
 