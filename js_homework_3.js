
{
    //1.	შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
    // 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;
    function sum(...numbers) {
        let numberSum = 0;
        for (let item of numbers) {
            if (item > 0) {
                numberSum += item;
            }
        }
        return numberSum;
    }


    let resultfunction = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
    console.log(resultfunction);
}
{
    //     2.	ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
    // 10, 50, 6, 7, 8, 11, 6, 3, 9
    function sum(...numbers) {
        let newSum = 0;
        for (let i of numbers) {
            newSum += i
        }
        return newSum
    }
    let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
    console.log(sumResult);
}
{
    // ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false; 
    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true
    }
    // function printName(user) {
    //     if (user.isloggedin) {
    //         return user.firstname + " " + user.lastname;
    //     }
    //     return false;
    // }
    function printName(user) {
        if (user.isloggedin) {
            return (`${user.firstname} ${user.lastname}`)
        }
        return false
    }

    let resultfunction = printName(user);
    console.log(resultfunction);
}
{
    // 4.	შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური: 

    function getMax(...array) {
        console.log(Math.max(...array));
    }
    getMax(10, 5, 50, -500, -12, 500, 30, 7);
}
{
    // For ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ რონლის სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ
    let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

    for (let item of array) {
        if (item.length > 4 && item.includes('av')) {
            console.log(item);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 4 && array[i].includes('av')) {
            console.log(array[i]);
        }

    }
    array.forEach(element => {
        if (element.length > 4 && element.includes('av')) {
            console.log(element);
        }

    });
}