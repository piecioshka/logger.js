// Copyright (c) 2012 Piotr Kowalski
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is furnished
// to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
//
// Celem projektu jest wyświetlanie obiektów JavaScript'owych
// w konsoli plain-tekstowej.
//
// Powodem dla którego realizuję ten projekt jest potrzeba
// wyświetlania, w sposób czytelny dla developera, obiektów
// których chcemy zobaczyć budowę w środowisku urzadzeń TV.
// Jako przykład niech posłużą urządzenia TV Samsung oraz BluRay
// Producent udostępnia swoje SDK, ale sposób debugowania
// opiera się jeszcze o konsole w trybie tylko tekstowym
// czy nie tak jak ma to miejsce w Firebug'u - najlepszym narzędziu
// dla developerów w przeglądarce Mozilla Firefox.
// W najpopularniejszej przeglądarce Chrome istnieje wbudowane
// narzędzie dla developerów o nazwie DevTools.
// Dzięki temu narzędziu mamy zdecydowanie więcej możliwości
// związanych z debudowanie aplikacji na WWW.
//
// Telewizory oraz BluRay'e nie są (jeszcze) tak popularne aby
// istniały natywne rozwiązania które ulepszą pracę developerom.
// Dlatego ten projekt ma w swoich celach przyjść z pomocą
// gdy zainstnieje potrzeba wyprintować jakiś obiekt który
// zostanie stowrzony w środowisku silnika WebKit (np. TV Samsung 2012)

function logger(data) {
    var parse_response;

    if (this instanceof logger) {
        return logger;
    }

    parse_response = logger.parse(data);

    // run concrete logger
    logger[parse_response.parse_type](parse_response.parse_data);
};

module.exports = logger;
