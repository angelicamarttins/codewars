const friendOrFoe = (array) => array.filter(friend => friend.length === 4) 

console.log(friendOrFoe(["Ryan", "Kieran", "Mark"]))
console.log(friendOrFoe(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friendOrFoe(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
console.log(friendOrFoe(["Love", "Your", "Face", "1"]))