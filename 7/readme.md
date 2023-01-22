<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
РОССИЙСКОЙ ФЕДЕРАЦИИ
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Сунагатов Денис Ринатович</p>
<br><br><br>
<p align = "center">Лабораторная работа №7<br>«Основы языка <strong>PHP</strong>»<br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2022 г.</p>

***
# <p align = "center">Оглавление</p>

- [Цели и задачи](#задачи)
- [Решение задач](#решение-задач)
    - [PHP](#php)
    - [Codewars](#codewars)
- [Вывод](#вывод)

***

# <p align = "center">Задачи</p>

1. Создайте переменную `$var` и присвойте ей значение `'hello'`. Обращаясь к отдельным символам этой строки выведите на экран символ `'h'`, символ `'e'`, символ `'o'`.

2. Напишите скрипт, который считает количество секунд в часе.

3. Переделайте приведенный код так, чтобы в нем использовались операции `+=`, `-=`, `*=`, `/=`, `++`, `--`. Количество строк кода при этом не должно измениться. Код для переделки:

    ```php
    <?php
    $var = 1;
    $var = $var + 12;
    $var = $var - 14;
    $var = $var * 5;
    $var = $var / 7;
    $var = $var + 1;
    $var = $var - 1;
    echo $var;
    ?>
    ```

4. Создайте переменную `$a` и присвойте ей значение `3`. Выведите значение этой переменной на экран.

5. Создайте переменные `$a=10` и `$b=2`. Выведите на экран их сумму, разность, произведение и частное (результат деления).

6. Создайте переменные `$c=15` и `$d=2`. Просуммируйте их, а результат присвойте переменной $result. Выведите на экран значение переменной `$result`.

7. Создайте переменные `$a=10`, `$b=2` и `$c=5`. Выведите на экран их сумму.

8. Создайте переменные `$a=17` и `$b=10`. Отнимите от `$a` переменную `$b` и результат присвойте переменной `$c`. Затем создайте переменную `$d`, присвойте ей значение `7`. Сложите переменные `$c` и `$d`, а результат запишите в переменную `$result`. Выведите на экран значение переменной `$result`.

9. Создайте переменную `$text` и присвойте ей значение `'Привет, Мир!'`. Выведите значение этой переменной на экран.

10. Создайте переменные `$text1='Привет'`, и `$text2='Мир!'`. С помощью этих переменных и операции сложения строк выведите на экран фразу `'Привет, Мир!'`.

11. Создайте переменную `$name` и присвойте ей ваше имя. Выведите на экран фразу `'Привет, %Имя%!'`. Вместо `%Имя%` должно стоять ваше имя.

12. Создайте переменную `$age` и присвойте ей ваш возраст. Выведите на экран `'Мне %Возраст% лет!'`.

13. Создайте переменную `$text` и присвойте ей значение `'abcde'`. Обращаясь к отдельным символам этой строки выведите на экран символ `'a'`, символ `'c'`, символ `'e'`.

14. Дана произвольная строка, например, `'abcde'`. Поменяйте первую букву (то есть букву `'a'`) этой строки на `'!'`.

15. Создайте переменную `$num` и присвойте ей значение `'12345'`. Найдите сумму цифр этого числа.

16. Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

17. Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате `'час:минута:секунда'`.

18. Создайте переменную, присвойте ей число. Возведите это число в квадрат (это значит нужно умножить его само на себя). Выведите его на экран.

19. Переделайте этот код так, чтобы в нем использовались операции `+=`, `-=`, `*=`, `/=`. Количество строк кода при этом не должно измениться.

    ```php
    $var = 47;
    $var = $var + 7;
    $var = $var - 18;
    $var = $var * 10;
    $var = $var / 20;
    echo $var;
    ```

20. Переделайте этот код так, чтобы в нем использовалась операция `.=`. Количество строк кода при этом не должно измениться.

    ```php
    $text = 'Я';
    $text = $text.' хочу';
    $text = $text.' знать';
    $text = $text.' PHP!';
    echo $text;
    ```

21. Переделайте этот код так, чтобы в нем использовались операции `++` и `--`. Количество строк кода при этом не должно измениться.

    ```php
    $var = 10;
    $var = $var + 1;
    $var = $var + 1;
    $var = $var - 1;
    echo $var;
    ```

22. Переделайте этот код так, чтобы в нем использовались операции `++`, `--` , `+=`, `-=`, `*=`, `/=`. Количество строк кода при этом не должно измениться.

    ```php
    $var = 10;
    $var = $var + 7;
    $var = $var + 1;
    $var = $var - 1;
    $var = $var + 12;
    $var = $var * 7;
    $var = $var - 15;
    echo $var;
    ```

## [Codewars](https://www.codewars.com)

23. [Breaking chocolate problem](https://www.codewars.com/kata/534ea96ebb17181947000ada)

24. [Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050)

25. [The reject() function](https://www.codewars.com/kata/52988f3f7edba9839c00037d)

26. [Deodorant Evaporator](https://www.codewars.com/kata/5506b230a11c0aeab3000c1f)

27. [Fibonacci's FizzBuzz](https://www.codewars.com/kata/57bf599f102a39bb1e000ae5)

28. [Product of Array Items](https://www.codewars.com/kata/5901f361927288d961000013)

29. [Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da)

30. [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047)

31. [Calculate average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

32. [Scrolling Text](https://www.codewars.com/kata/5a995c2aba1bb57f660001fd)

33. [Bumps in the Road](https://www.codewars.com/kata/57ed30dde7728215300005fa)

34. [Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe](https://www.codewars.com/kata/582746fa14b3892727000c4f)

35. [Remove duplicate words](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)

***

# <p align = "center">Решение задач</p>

## PHP

```php
<?php
// 1.
echo '1 задание.<br><br>';
$var = 'hello';
echo $var[0] . $var[1] . $var[strlen($var) - 1];

// 2.
echo '<br><br><br> 2 задание.<br><br>';
echo 'Количество секунд в часе = ' . 60 * 60;

// 3.
echo '<br><br><br> 3 задание.<br><br>';
$var = 1;
$var += 12;
$var -= 14;
$var *= 5;
$var /= 7;
$var += 1;
$var -= 1;
echo $var;

// 4.
echo '<br><br><br> 4 задание.<br><br>';
$a = 3;
echo $a;

// 5.
echo '<br><br><br> 5 задание.<br><br>';
$a = 10;
$b = 2;
echo $a + $b;
echo $a - $b;
echo $a * $b;
echo $a / $b;

// 6.
echo '<br><br><br> 6 задание.<br><br>';
$c = 15;
$d = 2;
$result = $c + $d;
echo $result;

// 7.
echo '<br><br><br> 7 задание.<br><br>';
$a = 10;
$b = 2;
$c = 5;
echo $a + $b + $c;

// 8.
echo '<br><br><br> 8 задание.<br><br>';
$a = 17;
$b = 10;
$c = $a - $b;
$d = 7;
echo $result = $c + $d;

// 9.
echo '<br><br><br> 9 задание.<br><br>';
echo $text = 'Привет, Мир!';

// 10.
echo '<br><br><br> 10 задание.<br><br>';
echo $text1 = 'Привет, ' . $text2 = 'Мир!';

// 11.
echo '<br><br><br> 11 задание.<br><br>';
$name = 'Артем';
echo "Привет, $name!";

// 12.
echo '<br><br><br> 12 задание.<br><br>';
$age = 18;
echo "Мне $age лет!";

// 13.
echo '<br><br><br> 13 задание.<br><br>';
$text = 'abcde';
echo $text[0] . $text[1] . $text[-1];

// 14.
echo '<br><br><br> 14 задание.<br><br>';
$text[0] = '!';
echo $text;

// 15.
echo '<br><br><br> 15 задание.<br><br>';
$num = '12345';
echo array_sum(str_split($num));

// 16.
echo '<br><br><br> 16 задание.<br><br>';
echo 'Количество секунд в часе: ' . 60 * 60 . '<br>';
echo 'Количество секунд в сутках: ' . 60 * 60 * 24 . '<br>';
echo 'Количество секунд в месяце: ' . 60 * 60 * 24 * 30 . '<br>';

// 17.
echo '<br><br><br> 17 задание.<br><br>';
$hour = 11;
$min = 15;
$sec = 42;
echo "$hour:$min:$sec";

// 18.
echo '<br><br><br> 18 задание.<br><br>';
$num = 5;
echo $num * $num;

// 19.
echo '<br><br><br> 19 задание.<br><br>';
$var = 47;
$var += 7;
$var -= 18;
$var *= 10;
$var /= 20;
echo $var;

// 20.
echo '<br><br><br> 20 задание.<br><br>';
$text = 'Я';
$text .= ' хочу';
$text .= ' знать';
$text .= ' PHP!';
echo $text;

// 21.
echo '<br><br><br> 21 задание.<br><br>';
$var = 10;
$var++;
$var++;
$var--;
echo $var;

// 22.
echo '<br><br><br> 22 задание.<br><br>';
$var = 10;
$var += 7;
$var++;
$var--;
$var += 12;
$var *= 7;
$var -= 15;
echo $var;
```

# [Codewars](https://www.codewars.com) ([Profile Link](https://www.codewars.com/users/ZFGinc))

## **[Breaking chocolate problem](https://www.codewars.com/kata/534ea96ebb17181947000ada)**

```php
function breakChocolate ($n, $m) {
  if($n*$m == 0) {
    return 0;
  }
  return $n * $m - 1;
};
```

***

## **[Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050)**

```php
function digPow($n, $p)
{
  $arr = array_map('intval', str_split($n));

  $sum = 0;
  for ($i=0; $i < count($arr); $i++, $p++) {
    $sum += pow($arr[$i], $p);
  }

  if ($sum % $n == 0) {
    return $sum / $n;
  }
  return -1;
}
```

***

## **[The reject() function](https://www.codewars.com/kata/52988f3f7edba9839c00037d)**

```php
function reject($a, $f) {
  return array_values(array_filter($a, function ($e) use ($f) {return !$f($e);}));
}
```

***

## **[Deodorant Evaporator](https://www.codewars.com/kata/5506b230a11c0aeab3000c1f)**

```php
function evaporator($content, $evap_per_day, $threshold)
{
  $res = 0;

  $left = 100;
  do {
    $left -=  $left * $evap_per_day * 0.01;
    $res++;
  } while ($left > $threshold);

  return $res;
}
```

***

## **[Fibonacci's FizzBuzz](https://www.codewars.com/kata/57bf599f102a39bb1e000ae5)**

```php
function fibs_fizz_buzz($n)
{
  $one = 0;
  $two = 1;

  $res = [];
  for ($i = 0, $current = 0; $i < $n; $i++) {
    $one = $two;
    $two = $current;
    $current = $one + $two;

    if ($current % 3 == 0) {
      array_push($res, 'Fizz');
      if ($current % 5 == 0) {
        $res[count($res) - 1] .= 'Buzz';
      }
    } else if ($current % 5 == 0) {
        array_push($res, 'Buzz');
    }
    else {
        array_push($res, $current);
    }
  }

  return $res;
}
```

***

## **[Product of Array Items](https://www.codewars.com/kata/5901f361927288d961000013/solutions/php?filter=me&sort=best_practice&invalids=false)**

```php
function product($a) {
  return empty($a) ? null : array_reduce($a, fn ($acc, $cur) => ($acc * $cur), 1);
}
```

***

## **[Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da)**

```php
function letter_ord($c) {
  return ord($c) - ord('a') + 1;
}

function alphabet_position(string $s): string {
  return join(' ', array_map('letter_ord', array_filter(str_split(strtolower($s)), 'ctype_alpha')));
}
```

***

## **[Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047)**

```php
function find_even_index($arr) {
  if (count($arr) <= 1) {
    return 0;
  }
  for ($i = 0; $i < count($arr); $i++) {
    if (array_sum(array_slice($arr, 0, $i)) == array_sum(array_slice($arr, $i + 1))) {
      return $i;
    }
  }

  return -1;
}
```

***

## **[Calculate average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)**

```php
function find_average($array): float {
  if($array) {
    return array_sum($array)/count($array);
  }
  else {
    return 0;
  }
}
```

***

## **[Scrolling Text](https://www.codewars.com/kata/5a995c2aba1bb57f660001fd)**

```php
function scrollingText($text) {
  $res = [];
  for ($i = 0; $i < strlen($text); $i++) {
    array_push($res, strtoupper($text));
    $text = substr($text, 1) . $text[0];
  }
  return $res;
}
```

***

## **[Bumps in the Road](https://www.codewars.com/kata/57ed30dde7728215300005fa)**

```php
function bump($x) {
  if (substr_count($x, 'n') > 15) {
    return 'Car Dead';
  }
  return 'Woohoo!';
}
```

***

## **[Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe](https://www.codewars.com/kata/582746fa14b3892727000c4f)**

```php
function count_developers($a) {
  $count = 0;
  foreach ($a as $member) {
    if ($member["continent"] == "Europe" && $member["language"] == "JavaScript")
      $count++;
  }
  return $count;
}
```

***

## **[Remove duplicate words](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)**

```php
function removeDuplicateWords($s) {
  $res = [];
  foreach (explode(" ", $s) as $word) {
    if (!in_array($word, $res)) array_push($res, $word);
  }
  return join(" ", $res);
}
```

***

# <p align = "center">Вывод</p>

Выполнил *лабораторную работу №7*, вспоминая навыки работы с языком **PHP**.
