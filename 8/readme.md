<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
РОССИЙСКОЙ ФЕДЕРАЦИИ
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Сунагатов Денис Ринатович</p>
<br><br><br>
<p align = "center">Лабораторная работа №8<br>«Основы языка <strong>PHP</strong>»<br>01.03.02 Прикладная математика и информатика</p>
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
- [Вывод](#вывод)


***

# <p align = "center">Задачи</p>

1. Создать файл php. В начале файла добавить 2 комментария (однострочный и многострочный) с именем автора и датой выполнения. Напечатать приветствие при помощи `echo`.

2. Придумайте и запишите имена переменных для таких сущностей: название телеканала, адрес производителя, цвет автомобиля, температура воды, модель телефона. Следуйте правилам именования переменных. Используйте `lowerCamelCase` для имен, составленных из двух и более слов.

3. Создайте 3 переменных с произвольными именами на свой выбор. Присвойте им значения `3`, `5`, `8` соответственно. Выведите значения этих переменных на страницу. Найдите сумму этих переменных и запишите ее в новую переменную. Выведите значение новой переменной. Найдите значение такого выражения: `2+6+2/5-1`. Запишите его в переменную с именем `$result` и выведите на страницу.

4. Будем использовать переменные `$a`, `$b`, `$c`, `$d`. Задайте значения `1` и `2` переменным `$a`, `$b` соответственно. Выведите значения переменных `$a`, `$b`. Скопируйте значение переменной `$a` в переменную `$c`. Скопируйте переменную `$b` в переменную `$d` по ссылке. Распечатайте значения переменных `$c`, `$d`. Присвойте переменным `$a`, `$b` значения `3` и `4` соответственно. Распечатайте переменнные `$a`, `$b`, `$c`, `$d`. Сделайте выводы относительно полученных результатов.

5. Создайте 2 константы с произвольными именами со значениями `41` и `33`. Найдите и выведите сумму этих констант. Попытайтесь переопределить одну из констант. Внимательно прочтите подсказку об ошибке в Вашей IDE (если поддерживается).

6. Определите типы следующих переменных и выведите их на экран:

	```php
	$a = 152;
	$b = '152';
	$c = 'London'; $d = array(152); $e = 15.2;
	$f = false;
	$g = true;
	```

7. Написать код, который будет формировать строку и выводить ее на экран, подставляя в нее значения переменных `$a` и `$b`.

8. Определить три переменных со значениями: `“Доброе утро”`, `“дамы”` `“и господа”`. Вывести значения переменных в браузер. Сформировать строку `"Доброе утро, дамы и господа"` используя созданные переменные и комбинированный оператор склеивания.

9. Создать 2 простых массива с количеством элементов 5.  В первый массив добавить один элемент с индексом (!) `element` и произвольным значением. Из второго массива удалить элемент с индексом `0`. Используйте функцию `unset()`;  Вывести на экран элементы под индексом `2` из первого и второго массива.  Вывести на экран содержимое массивов полностью.  Найти количество элементов в каждом массиве. Используйте функцию `count()`. Вывести результаты на экран.

10. Вывести на экран `N` случайных чисел (каждое с новой строки) из диапазона `[-21, 35]`

11. Вывести на экран сумму `N` случайных чисел.

12. Вывести на экран `N` случайных чисел (каждое с новой строки). Для каждого числа, начиная со второго, рядом выводить - больше ли оно предыдущего или меньше.

13. Вывести на экран n-ное число Фибоначчи.

14. Дано некоторое число длиной от 1 до 5 цифр - вывести его цифры в обратном порядке. Подсказка: используйте цикл `while` и операцию получения остатка.

15. Дано некоторое число длиной от 1 до 5 символов, вывести все его "нечётные" цифры в обратном порядке (аналогично предыдущей задаче), если же таких цифр не найдёт, вывести сообщение `"Нечетных цифр не обнаружено!"`

16. Задать массив из 7-ми элементов, заполнить его случайными значениями в одном цикле, а в другом цикле вывести эти значения на экран.

17. Задать двумерный массив размерностью `m` на `n` (MxN) элементов (`m` и `n` вынести в область определения констант), заполнить его случайными значениями и вывести их на экран уже после того, как весь массив будет заполнен (т.е. заполнять и выводить в разных группах циклов).

18. Задайте случайным образом массив из `N` элементов. Выведите его на экран "ёлочкой". Вот начало такого вывода:

	```php
	1
	2 3
	4 5 6
	7 8 9 10
	11 12 ......
	```

	Второй вариант - сделайте то же самое, но не используйте массив: у вас есть переменная `N`, выведете на экран, все числа до N, по тому же принципе что и выше, например, если `N = 9`, то получим:

	```php
	1
	2 3
	4 5 6
	7 8 9
	```

19. Задайте случайным образом массив из `N` элементов (целых чисел). Найдите максимальное число и напечатайте его.

20. Задайте случайным образом массив из 20-ти элементов (целых чисел). Найдите минимальное число и напечатайте его.

21. Даны два массива по 20 элементов каждый (заполните случайными числами, так чтобы среди элементов массива при очередном запуске программы могли встретиться и отрицательные и положительные числа).
Сравните каждый 3-ий элемент 1-ого массива с каждый 2-ым элементов 2-ого массива - сравнение проводите пока не закончится та выборка, которая короче.

22. Создайте функцию, которая принимает на вход массив случайных чисел из диапазона `[5..12]`. Обходит этот массив и делает для каждого элемента следующее (пусть она оказывает побочный эффект прямо в своём теле): Если это число равно 5 -- то выведете на экран строку `"пять"`, если 6 -- то строку `"шесть"`, если 7 то число `"7"`, иначе -- строку `"какое-то другое число"`. Используйте для решения задачи оператор `switch`.

23. Есть два массива "a" и "b". На вход вашей программе подаётся массив "a" случайных чисел (10 элементов) из диапазона от 1 до 20. Задача: вывести на экран все числа, которые не содержатся в массиве "b"

	```php
	$b = [12, 5, 17, 6, 4];
	```

	Решите эту задачу двумя способами: Без использования `in_array()`. С использованием `in_array()`

***

# <p align = "center">Решение задач</p>

## PHP

```php
<?php
//	1.
//	Автор: Хроменков Владимир
/*	Дата выполнения:
	Начало: 26.11.2022
	Время выполнения: ~ 1.5 часа*/
echo "Задание 1 <br>";
echo "Приветствие!";
echo "<br><br>";

//	2.
$tvChannel;		//	название телеканала
$manAdress;		//	адрес производителя
$carColor;		//	цвет автомобиля
$waterTemp;		//	температура воды
$phoneModel;	//	модель телефона

//	3.
echo "Задание 3 <br>";
$three = 3;
$five = 5;
$eight = 8;
echo "$three, $five, $eight";
echo "<br>";

$sum = $three + $five + $eight;
echo $result = 2 + 6 + 2 / 5 - 1;
echo "<br><br>";

//	4.
echo "Задание 3 <br>";
$a = 1;
$b = 2;
echo "$a, $b";
echo "<br>";
$c = $a;
$d = $b;
echo "$c, $d";
echo "<br>";
$a = 3;
$b = 4;
echo "$a, $b, $c, $d";
echo "<br><br>";

// 5.
echo "Задание 5 <br>";
define("const1", 41);
define("const2", 33);
echo const1 + const2;
echo "<br><br>";

//	6.
echo "Задание 6 <br>";
$a = 152;
$b = '152';
$c = 'London';
$d = array(152);
$e = 15.2;
$f = false;
$g = true;
var_dump($a, $b, $c, $d, $e, $f, $g);
echo "<br><br>";

//	7.
echo "Задание 7 <br>";
echo "\$a = $a, \$b = $b", PHP_EOL;
echo "<br><br>";

//	8.
echo "Задание 8 <br>";
$first = "Доброе утро";
$second = "дамы";
$third = "и господа";
echo $first . " " . $second . " " . $third, PHP_EOL;
echo "<br><br>";

// 9.
echo "Задание 9 <br>";
$arr1 = [1, 2, 3, 4, 5];
$arr2 = [6, 7, 8, 9, 10];
$arr1["element"] = 25;

unset($arr2[0]);
echo $arr1[2], $arr2[2];
echo "<br>";

var_dump($arr1, $arr2);
echo count($arr1), count($arr2);
echo "<br><br>";

//	10.
echo "Задание 10 <br>";
define("N", 5);

for ($i = 0; $i < N; $i++) {
	echo random_int(-21, 35);
	echo "<br>";
}
echo "<br><br>";

//	11.
echo "Задание 11 <br>";
$sum = 0;
for ($i = 0; $i < N; $i++) {
	$sum += random_int(-21, 35);
}
echo $sum;
echo "<br><br>";

// 12.
echo "Задание 12 <br>";
for ($i = 0, $last = null; $i < N; $i++) {
	$num = random_int(-50, 50);
	echo $num;

	if ($last != null)
		if ($num > $last)
			echo " - Больше предыдущего";
		else if ($num < $last)
			echo " - Меньше предыдущего";
		else
			echo " - Равны";
	$last = $num;
	echo "<br>";
}
echo "<br><br>";

//	13.
echo "Задание 13 <br>";
function Fibb($n)
{
	if ($n <= 1) return 0;

	if ($n == 2) return 1;

	return Fibb($n - 1) + Fibb($n - 2);
}

echo N, " число Фибоначчи = ", Fibb(N);
echo "<br><br>";

//	14.
echo "Задание 14 <br>";
$number = 12345;
do {
	echo $number % 10;
	$number = ($number - $number % 10) / 10;
} while ($number > 0);
echo "<br><br>";

//	15.
echo "Задание 15 <br>";
$number = 12345;
$hasOdds = false;
do {
	$num = $number % 10;
	if ($num % 2 != 0) {
		$hasOdds = true;
		echo $num;
	}
	$number = ($number - $number % 10) / 10;
} while ($number > 0);
if (!$hasOdds) echo "Нечетных цифр не обнаружено!";
echo "<br><br>";

//	16.
echo "Задание 16 <br>";
for ($i = 0; $i < 7; $i++) {
	$arr[$i] = random_int(-10, 10);
}
for ($i = 0; $i < 7; $i++) {
	echo $arr[$i], " ";
}
echo "<br><br>";

//	17.
echo "Задание 17 <br>";
$m = 5;
$n = 5;
for ($i = 0; $i < $m; $i++) {
	$arr[$i] = [];
	for ($j = 0; $j < $n; $j++) {
		$arr[$i][$j] = random_int(-10, 10);
	}
}
echo "<br>";
for ($i = 0; $i < $m; $i++) {
	for ($j = 0; $j < $n; $j++) {
		echo str_pad($arr[$i][$j], 4, " ");
	}
	echo "<br>";
}
echo "<br><br>";

//	18.
echo "Задание 18 <br>";
$N = 20;
for ($i = 1; $i <= $N; $i++) {
	$arr[$i - 1] = $i;
}

//1
echo "1)<br>";
for ($i = 0, $j = 0, $k = 1; $i < $N; $i++) {
	echo $arr[$i], " ";
	if (++$j >= $k) {
		echo "<br>";
		$j = 0;
		$k++;
	}
}

//	2)
echo "<br>2)<br>";
for ($i = 1, $j = 0, $k = 1; $i <= $N; $i++) {
	echo $i, " ";
	if (++$j >= $k) {
		echo "<br>";
		$j = 0;
		$k++;
	}
}
echo "<br><br>";

//	19.
echo "Задание 19 <br>";
echo max($arr);
echo "<br><br>";

//	20.
echo "Задание 20 <br>";
echo min($arr);
echo "<br><br>";

//	21.
echo "Задание 21 <br>";
$arr1 = [];
$arr2 = [];

for ($i = 0; $i < 20; $i++) {
	$arr1[$i] = $arr2[$i] = random_int(-10, 10);
}
for ($i = 2, $j = 1; $i < 20; $i += 3, $j += 2) {
	if ($arr1[$i] > $arr2[$j])
		echo "$arr1[$i] больше $arr2[$j] <br>";
	else if ($arr1[$i] < $arr2[$j])
		echo "$arr1[$i] меньше $arr2[$j] <br>";
	else
		echo "$arr1[$i] и $arr2[$j] равны <br>";
}
echo "<br><br>";

//	22.
echo "Задание 22 <br>";
function func($arr)
{
	foreach ($arr as $num) {
		switch ($num) {
			case 5:
				$res = "пять";
				break;
			case 6:
				$res = "шесть";
				break;
			case 7:
				$res = 7;
				break;
			default:
				$res = "какое-то другое число";
				break;
		}

		echo $res;
		echo "<br>";
	}
}
echo func([4,5,6,7,8]);
echo "<br><br>";

// 23.
echo "Задание 23 <br>";
$a = [];
for ($i = 0; $i < 10; $i++) {
	$a[$i] = random_int(1, 20);
}
$b = [12, 5, 17, 6, 4];

//	1)
echo "1)<br>";
$counter = [];
for ($i = 0; $i < count($b); $i++) {
	$counter[$b[$i]] = 1;
}
for ($i = 0; $i < 10; $i++) {
	if (empty($counter[$a[$i]])) echo $a[$i], " ";
}
//	2)
echo "<br>2)<br>";
for ($i = 0; $i < 10; $i++) {
	if (!in_array($a[$i], $b)) echo $a[$i], " ";
}
```
# <p align = "center">Вывод</p>

Выполнил *лабораторную работу №8*, восстанавливая навыки работы с языком **PHP**.
