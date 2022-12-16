module.exports.getZad1 = (x)=>{
    if(x < 0)
        return Math.sin(x)**2;
    else
        return 1-(2*(Math.sin(x)**2));
    
}

module.exports.getZad2 = (x)=>{
    let a = String(x);
    while(a.length < 4)
    {
        a = "0" + a;
    }

    let b = a;
    let res = (a.split('').reverse().join('') == b) ? true : false;
    return res;
}

module.exports.getZad3 = (n)=>{
    if(n % 4 == 0)
    {
        if(n % 100 == 0)
        {
            if(n % 400 == 0)
            {
                return "Год является високосным";
            }
            else
                return "Год не является високосным";
        }
        else
            return "Год является високосным";
    }
    else
        return "Год не является високосным";
}

module.exports.getZad4 = (x)=>{
    if(x < -1)
        return -1;
    else if (x > -1)
        return x;
    else 
        return 1;
}

module.exports.getZad5 = (x)=>{
    switch(x)
    {
        case 1:
        case 2:
        case 12:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Лето";
        case 9:
        case 10:
        case 11:
            return "Осень";
        default:
            return "Номер месяца введён неверно";
    }
}

module.exports.getZad6 = (m,n)=>{
    let res = "";

    switch(n)
    {
        case 6:
            res += "Шестёрка ";
            break;
        case 7:
            res += "Семёрка ";
            break;
        case 8:
            res += "Восьмёрка ";
            break;
        case 9:
            res += "Девятка ";
            break;
        case 10:
            res += "Десятка ";
            break;
        case 11:
            res += "Валет ";
            break;
        case 12:
            res += "Дама ";
            break;
        case 13:
            res += "Король ";
            break;
        case 14:
            res += "Туз "
            break;
        default:
            "Неверно указан номер достоинства";
            break;
    }

    switch(m)
    {
        case 1:
            res += "Пик";
            break;
        case 2:
            res += "Треф";
            break;
        case 3:
            res += "Бубен";
            break;
        case 4:
            res += "Червей";
            break;
        default:
            return "Номер масти введён неверно";
    }
    return res;
}

module.exports.getZad7 = (n)=>{
    let res = "";
    let forAn = n % 12;
    let forCol = n % 10;
    switch(forAn)
    {
        case 0:
            res += "Крыса, ";
            break;
        case 1:
            res += "Корова, ";
            break;
        case 2:
            res += "Тигр, ";
            break;
        case 3:
            res += "Заяц, ";
            break;
        case 4:
            res += "Дракон, ";
            break;
        case 5:
            res += "Змея, ";
            break;
        case 6:
            res += "Лошадь, ";
            break;
        case 7:
            res += "Овца, ";
            break;
        case 8:
            res += "Обезьяна, ";
            break;
        case 9:
            res += "Петух, ";
            break;
        case 10:
            res += "Собака, ";
            break;
        case 11:
            res += "Свинья, ";
            break;
    }
    switch(forCol)
    {
        case 0:
        case 1:
            res += "Зелёный";
            break;
        case 2:
        case 3:
            res += "Красный";
            break;
        case 4:
        case 5:
            res += "Желтый";
            break;
        case 6:
        case 7:
            res += "Белый";
            break;
        case 8:
        case 9:
            res += "Чёрный";
            break;
    }
    return res;
}

module.exports.getZad8 = ()=>{
    for(let i = 2; i < 10; i++)
    {
        console.log(9 * i);
    }
}

module.exports.getZad9 = ()=>{
    for(let i = 2; i < 21; i++)
    {
        console.log(Math.sin(i));
    }
}

module.exports.getZad10 = (a, b)=>{
    //a
    let res = 0;
    for(let i = 100; i < 501; i++)
    {
        res += i;
    }
    console.log(res);
    //b
    res = 0;
    for(; a < 501; a++)
    {
        res += a;
    }
    console.log(res);
    //c
    res = 0;
    for(let i = -10; i <= b; i++)
    {
        res += i;
    }
    console.log(res);
    //d
    res = 0;
    for(; a <= b; a++)
    {
        res += a;
    }
    console.log(res);
}

module.exports.getZad11 = (n)=>{
    let res = 0;
    for(let i = 1; i <= n; i++)
    {
        res += 1/i;
    }
    return res;
}

module.exports.getZad12 = (x, y)=>{
    let res = 0;
    for(let i = 1; i <= y; i++)
    {
        res += x;
    }
    console.log(res);
    res = 0;
    let i = 1;
    while(i <= y)
    {
        res += x;
        i++;
    }
    console.log(res);
}

module.exports.getZad13 = (n)=>{
    let res = 0;
    for(let i = 1; i <= n; i += 2)
    {
        res += i;
    }
    return res;
}

module.exports.getZad14 = ()=>{
    let res = 0;
    let sqr = 2;
    for(let i = 1; i <= 50; i++, sqr += 2)
    {
        res += Math.pow(i, sqr);
    }
}

module.exports.getZad15 = (a)=>{
    //a
    let res = 0;
    for(let i = 0; i < a.length; i++)
        res += a[i];
    console.log(res);
    //b
    console.log(a.length);

}

module.exports.getZad16 = (a)=>{
    let res = 0;
    let reslength = a.length;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] >= 0)
            res += a[i];
        else
            reslength--;
    }
    return res / reslength;
}

module.exports.getZad17 = (a)=>{
    let lastnumeric;
    let three = 0;
    let lastnum = a % 10;
    let lastc = 0;
    let even = 0;
    let moreThanFive = 0;
    let mulMoreSeven = 1;
    let zeroOrFive = 0;
    do
    {
        lastnumeric = a % 10;
        //a
        if(lastnumeric == 3)
            three++;
        //b
        if(lastnumeric == lastnum)
            lastc++;
        //c
        if((lastnumeric % 2) == 0)
            even++;
        //d
        if(lastnumeric > 5)
            moreThanFive += lastnumeric;
        //e
        if(lastnumeric > 7)
            mulMoreSeven *= lastnumeric;
        //f
        if(lastnumeric == 5)
            zeroOrFive++;
        if(lastnumeric == 0)
            zeroOrFive++;
        a /= 10;
    }while(a != 0);
    console.log("а) " + three);
    console.log("б) " + lastc);
    console.log("в) " + even);
    console.log("г) " + moreThanFive);
    console.log("д) " + mulMoreSeven);
    console.log("е) " + zeroOrFive);
}

module.exports.getZad18 = (a)=>{
    let num = a;
    let lastnumeric;
    let a1 = a % 10;
    let a2 = 0;
    let b1 = a % 10;
    let b2 = 10;
    //a.1
    do
    {
        lastnumeric = num % 10;
        if(lastnumeric > a1)
            a1 = lastnumeric;
        num /= 10;
    }while(num != 0);
    num = a;
    //a.2
    let digits = 0;
    do
    {
        digits++;
        num /= 10;
    }while(num != 0);
    num = a;
    while(digits > 1)
    {
        digits--;
        let number = num / Math.pow(10, digits)
        num -= number * Math.pow(10,digits);
        if(number > a2)
            a2 = number;
    }
    num = a;
    //b.1
    do
    {
        lastnumeric = num % 10;
        if(lastnumeric < b1)
            b1 = lastnumeric;
        num /= 10;
    }while(num != 0);
    num = a;
    //b.2
    digits = 0;
    do
    {
        digits++;
        num /= 10;
    }while(num != 0);
    num = a;
    while(digits > 1)
    {
        digits--;
        let number = num / Math.pow(10, digits)
        num -= number * Math.pow(10,digits);
        if(number < b2)
            b2 = number;
    }
    console.log("а.1 )" + a1);
    console.log("а.2 )" + a2);
    console.log("б.1 )" + b1);
    console.log("б.2 )" + b2);
}

module.exports.getZad19 = (a)=>{
    let i = 2;
    while(i < a)
    {
        if(a % i == 0)
            return "Число не является простым";
        i++;
    }
    return "Число является простым";
}

module.exports.getZad20 = (a)=>{
    let lastnum = a % 10;
    while(a != 0)
    {
        a /= 10;
        let num = a % 10;
        if(num > lastnum)
            return "Число не является при просмотре слева направо упорядоченным по возрастанию";
        lastnum = num;
    }
    return "Число является при просмотре слева направо упорядоченным по возрастанию";
}

module.exports.getZad21 = (a, n)=>{
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > n)
            return "Порядковый номер первого числа больше n = " + (i+1);
    }
    return "Таких чисел в последовательности нет";
}

module.exports.getZad22 = (n,a,b)=>{
    let countA;
    let countB;
    do
    {
        let digit = n % 10;
        if(digit == a)
            countA++;
        else if(digit == b)
            countB++;
        n /= 10;
    }while(n != 0);

    if(countA < countB)
        return true;
    else
        return false;
}

module.exports.getZad23 = ()=>{
    //a
    let i = 9;
    while(i < 30)
    {
        i++;
        console.log(i);
    }
    //b
    i = 9;
    do
    {
        i++;
        console.log(i);
    }while(i < 30)
}