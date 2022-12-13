"use strict"
{
    // 1.მოცემულია სამი მასივი:
    // Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    let arr3 = [5, 6];

    let newArray = arr1.concat(arr2, arr3);
    console.log(newArray);
}
{
    // 2.შეამოწმეთ მოცელუმ მასივში  არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით;

    let arr = [-1, -2, -3, 4];

    let positive = (Element) => Element > 0;
    console.log(arr.some(positive));

}
{
    // 3.Sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადონის მიხედვით და ამოიღეთ მინიმალური რიცხვი;
    let array = [23, 45, 32, 5, 87, 7, 3, 98]
    array.sort(function (x, y) {
        return x - y
    });
    console.log(array);

    // მეორე მეთოდი
    let array1 = [23, 45, 32, 5, 87, 7, 3, 98]
    let maxValue = array1.sort((x, y) => y - x)[0];
    console.log(maxValue);
    //მინიმალური მნიშვნელობა

    let array2 = [23, 45, 32, 5, 87, 7, 3, 98];
    let minValue = array2.sort((x, y) => y - x)[array.length - 1];
    console.log(minValue);
}
{
    //     4.შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:

    //4.1 <div class=“wraper”> 
    let newDivElement = document.createElement('div');
    newDivElement.setAttribute("class", "wraper");
    //4.2  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
    let imgElement = document.createElement('img');
    imgElement.setAttribute("img src", "img/JavaScript_logo.svg.png"
    );
    imgElement.setAttribute("alt", "image");

    //4.3 <h2> image title </h2>
    let hElement = document.createElement('h2');
    hElement.innerText = 'image title';
    //4.4 H2 ჯს დან დაუმატეთ წითელი ფონტის ფერი და ფროტის ზომა 30px
    hElement.style.color = "red";
    hElement.style.fontSize = "30px";


    document.getElementById('mainDiv').appendChild(newDivElement);
    // newDivElement.appendChild(hElement);
    document.querySelectorAll('.wraper').appendChild(hElement);
    newDivElement.appendChild(imgElement);
}