# node-text-plain-logger

## PURPOSE

Celem projektu jest wyświetlanie obiektów JavaScript'owych w konsoli
plain-tekstowej.

Powodem dla którego realizuję ten projekt jest potrzeba wyświetlania, w sposób
czytelny dla developera, obiektó których chcemy zobaczyć budowę w środowisku
urzadzeń TV.

Jako przykład niech posłużą urządzenia TV Samsung oraz BluRay.
Producent udostępnia swoje SDK, ale sposób debugowania opiera się jeszcze
o konsole w trybie tylko tekstowym czy nie tak jak ma to miejsce w Firebug'u
- najlepszym narzędziu dla developerów w przeglądarce Mozilla Firefox.
W najpopularniejszej przeglądarce Chrome istnieje wbudowane narzędzie
dla developerów o nazwie DevTools. Dzięki temu narzędziu mamy zdecydowanie
więcej możliwości związanych z debudowanie aplikacji na WWW.

Telewizory oraz BluRay'e nie są (jeszcze) tak popularne aby istniały natywne
rozwiązania które ulepszą pracę developerom. Dlatego ten projekt ma w swoich
celach przyjść z pomocą gdy zainstnieje potrzeba wyprintować jakiś obiekt który
zostanie stowrzony w środowisku silnika WebKit (np. TV Samsung 2012)

## LICENSE

MIT License