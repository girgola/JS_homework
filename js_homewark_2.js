'use strict';

{

    //დავალება:1. მოცემულია ობიექტი:ციკლის საშუალებით გამოიტანეთ წინადადება: Tbilisi is Georgia

    let obj = {
        berlin: 'germany',
        tbilisi: 'georgia',
        kiev: 'ukraine'
    }

    for (let key in obj) {
        if (key == 'tbilisi') {
            console.log(`${(key)} is ${obj.tbilisi}`)
        }

    }
}
{
    //2.ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
    let i = 0;
    while (i < 100) {
        console.log(i);
        i++;
    }

}
{

    // 3.მოცემულია მასივი:  ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

    let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
    for (let x of array1) {
        if (x > 0 && x < 10) {
            console.log(x);
        }
    }

}
{

    //4.მოცემულია მასივი. ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let z of array2) {
        if (z == 5) {
            console.log('არის');
            break;
        }
    }

}
{

    //5.მოცემულია მასივი. ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი

    let array3 = [1, 2, 3, 4, 5];
    let result = 0;
    for (let i = 0; i < array3.length; i++) {
        result += array3[i]
    }
    console.log(result);

}
{
    //6.მოცემულია მასივი: გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

    let array4 = [1, 2, 3, 7, 6, 9];

    let sum = 0;

    for (let number of array4) {
        sum += number;
    }
    console.log(sum);
    let average = sum / array4.length;
    console.log(average);
}

{
    //7.შექმენით ცვლადი ნებისმიერი რიცხვითი მნიშვნელობით და switch case ის საშუელბით შეამოწმეთ:
    // თუ ცვალიდს მნიშვნელობა ტოლია 5 მაშინ კონსოლში გამოიტანეთ - რიცხვი არის 5; 
    // თუ ცვალიდს მნიშვნელობა ტოლია 10 მაშინ კონსოლში გამოიტანეთ - რიცხვი არის 10;
    // ყველა სხვა დანარვენ შემთხვევაში დალოგეთ - სხვა რიცხვი

    let array = [34, 23, 4, 65, 33, 12, 4, 7, 50];
    switch (array) {
        case array == 5:
            console.log('რიცხვი არის 5');
            break;
        case array == 10:
            console.log('რიცხვი არის 10');
            break;
        default: console.log('სხვა რიცხვი');
    }
    // if მეთოდით:
    let result1 =
        array == 5
            ? 'რიცხვი არის 5'
            : array == 10
                ? 'რიცხვი არის 10'
                : 'სხვა რიცხვი'
    console.log(result1);

}
{

    //8.მოცემულია მასივი, გამოიტანეთ ყველა რიცხვი 7 ის გარდა

    let array5 = [1, 2, 3, 7, 6, 9];
    for (let item of array5) {
        if (item == 7) {
            continue
        }
        console.log(item);
    }

}

