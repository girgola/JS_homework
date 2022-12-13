"use strict"
{
    // 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

    //   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
    //   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
    //   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
    //   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
    //   დაბეჭდეთ მასივისი ახალი ელემენტები.


    let numbers = [5, 25, 89, 120, 36];
    numbers.push('javascript', 'python');
    numbers.unshift('html', 'css')
    console.log(numbers);
    console.log(numbers.length);
    numbers.shift();
    numbers.pop();
    console.log(numbers);
}

{
    //   2.  შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
    //   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
    //   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
    //   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
    //   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
    //   მასივის მე - 3 ადგილას დაამატეთ ელემენტი: მანგო;
    //   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
    //   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

    let array = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
    console.log(array.length);
    array.push('ვაშლი', 'ანანასი');
    array.unshift('საზამთრო');
    console.log(array.length);
    array.splice(3, 0, 'მანგო')
    array.pop();
    array.shift()
    console.log(array.length);
    console.log(array);

}

{
    // 3. მოცემულია მასივი:
    // map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;
    let array = [12, 25, 3, 6, 8, 14, 7, 23];
    let newArray = array.map(function (item) {
        return item / 3;
    })
    console.log(newArray);
}
{
    // 4.  მოცემულია მასივი:
    // filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

    let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

    let arrayFilter = array.filter(function (item) {
        return typeof item == 'number'
    });
    console.log(arrayFilter);



}
{
    //     5.მოცემულია მასივი:
    // ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;
    let languages = ['html', 'css', 'javascript', 'python', 'php'];

    let newArray = languages.filter(function (item) {
        return item.length > 3
    })
    console.log(newArray);
}
{
    // 6. მოცემულია მასივი:
    // შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;
    let item = [12, 'google', 32, null, 'yahoo', 25];

    let mapItem = item.map(function (array) {
        if (typeof array === 'number') {
            return (array * array);
        }
        if (typeof array == 'string') {
            return array.toUpperCase();
        } else {
            return array;
        }
    })

    console.log(mapItem);

}
{
    // 7. Მოცემულია მასივი:
    // Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;
    let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
    let newWordsFilter = words.filter(words => words.includes('m') || words.includes('M'))
    console.log(newWordsFilter);

}
{
    // 8.მოცემულია მასივი:
    // Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

    let arr = [1, 2, 3, 4, 5];

}
{
    // 9.მოცემულია მასივი:Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები
    let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
    let newArrayFilter = numbers.filter(function (item) {
        return item > 0;
    })
    console.log(newArrayFilter);
    //მეორე მეთოდი
    let newArrayFilter2 = numbers.filter(x => x > 0);
    console.log(newArrayFilter2);
}
{
    // 10. მოცემულია მასივი let array =[1, 2, 3, 4, 5]. Splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

    let array = [1, 2, 3, 4, 5];
    array.splice(3, 0, 'a', 'b', 'c');
    console.log(array);
}
