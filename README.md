# React Kanban

Otrzymałeś zlecenie, które polega na implementacji systemu Kanban.

Idealnie się składa ponieważ sam chciałeś poznać tą metodykę działania! Słyszałeś, że często jest ona wykorzystywana w działach IT i nie chciałbyś być "zielonym" jeśli trafisz do zespołu, w którym jest wykorzystywana.

Klient chce rozwiązanie zbliżone do tego: https://kanbanblog.com/explained/

Pamiętaj, że zanim zajmiesz się planowaniem i wdrażaniem powinieneś zgłębić wiedzę na dany temat. Proponuję, abyś zapoznał się z [4 filmami od Atlassian](https://www.youtube.com/watch?v=iVaFVa7HYj4&list=PLaD4FvsFdarR3oF1gp5_NmnlL-BQIE9sW&index=1), które pozwolą lepiej zrozumieć Ci koncepcję Kanban. Warto też zapoznać się z [artykułem w języku polskim](https://productvision.pl/2015/gdzie-scrum-nie-moze-tam-kanban-posle/), aby ograniczyć błędy związane z barierą językową.

Należy również poznać [konkurencję](https://kanbantool.com/pl/), na której będziesz mógł się wzorować.


## Założenia

Na początku zawsze warto określić [MVP](http://www.biznesowerewolucje.com/mvp-minimum-viable-product-praktycznie/). W naszym przypadku może to być:

- tablica z określonymi z góry kolumnami i limitem zadań
- zadania o cechach:
    - nazwa
    - aktualna kolumna
    - użytkownik (osoba odpowiedzialna)
- możliwość przemieszczania zadań

### Przechowywanie danych

Na tym etapie chcemy wykorzystać najszybszą do implementacji możliwość zapisywania ustawień naszej tablic. Dlatego wybór padł na [localStorage](http://kursjs.pl/kurs/storage/storage.php). W ten sposób będzie można testować rozwiązanie nie musząc przejmować się zaawansowanymi rozwiązaniami.

Na pewno ułatwiłby Ci pracę hook, który udostępniałby metody umożliwiające zapis i odczyt danych z localStorage np.:
```
const [getItem, setItem] = useStorage('name');
```

Dodatkowo przy pierwszym uruchomieniu należałoby pobrać dane z localStorage oraz przekazać dane do wnętrza aplikacji za pomocą Context API. Jeśli takich danych nie ma to trzeba ustawić wartości początkowe.

Trzeba się też zastanowić nad strukturą zapisywanych danych. 

Musimy przechowywać informacje o maksymalnej ilości zadań w kolumnach, ich nazwach i pewnie przydałby się jakiś identyfikator np.:
```
[
    {id: 1, name: 'Pending', limit: 4},
    {id: 2, name: 'Analysis - Doing', limit: 3},
    {id: 3, name: 'Analysis - Done', limit: 2},
    // ...
]
``` 

Podobna struktura mogłbaby wyglądać przy zadaniach:
```
[
    {id: 1, name: 'Task1', idColumn: 1, user: 'Anna'},
    {id: 2, name: 'Task2', idColumn: 1, user: 'Anna'},
    {id: 3, name: 'Task3', idColumn: 1, user: 'Anna'},
    // ...
]
```

Ponieważ staramy się maksymalnie wszystko uprosić na początku to uznajemy, że `id` w kolumnach są zawsze kolejnymi numerami i przemieszczenie się zadań między nimi odbywa się przy pomocy dodania lub odjęcia jeden od aktualnej wartości dla `idColumn`.

### Komponenty

Już na tym etapie powinieneś być świadomy jakich komponentów będziesz potrzebować.

Nasza tablica może być komponentem o nazwie `<Board />`. Tablica składa się z kolumn więc będziemy potrzebować komponentu `<Column />`. W każdej kolumnie będą wyświetlane zadania więc `<Task />` też się przyda. Musimy mieć możliwość tworzenia zadań dlatego bez komponentu `<Form />` też się nie obędziemy.

## Od czego zaczać?

Najpierw utwórz strukturę danych wew. Twojej aplikacji i postaraj się wyświetlić wszystkie elementy wkorzystując odpowiednie komponenty. Dane możesz przechowywać w `state` w komponencie `<App />`, które przekazujesz przez Context API. Pamiętaj, że w ten sposób możesz też przekazywać metody, które będą aktualizować dane w `state`.

Następnie zapisz dane w localStorage i sprawdź czy nadal wszystko działa.

Potem dopiero postaraj sie przemieszczać zadania między kolumnami bez zapisywania danych w localStorage. Jak już wspomieliśmy wystarczy ikrementować lub dekrementować pole `idColumn`. Pamiętaj, aby sprawdzić czy limit zadań w kolumnie nie jest osiągnięty i czy kolumna "następna" oraz "poprzednia" istnieje.

Jak już ten element będzie działał to daj możliwość tworzenia dodatkowych zadań przy pomocy formularza.

Dopiero teraz wprowadź aktualizację danych w localStorage. Zwróć uwagę, że każda zmiana `state` aplikacji powinna być zapisywana w localStorage.

Do wykonania zadania możesz użyć konfiguracji wykorzystującej ESLint-a i Prettier-a -> https://github.com/devmentor-pl/react-helloworld-modern