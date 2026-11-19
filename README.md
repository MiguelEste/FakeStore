# Fakestore

FakeStoreAPI-opdracht door Michael Ponsioen

## Installatie

### Benodigdheden

[https://nodejs.org/en/download](Node.js 20.9.0 of nieuwer)
pnpm:

```bash
npx get-pnpm
```

### Project downloaden

Navigeer naar de folder waar het project in komt en clone de git repo

```bash
git clone https://github.com/MiguelEste/FakeStore.git
```

Navigeer naar de FakeStore folder

```bash
cd FakeStore
```

### Installeer benodigdheden

```bash
pnpm install
```

### Development server starten

```bash
pnpm dev
```

### Productiebuild

```bash
pnpm build
```

```bash
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) om de fake store te openen. Mogelijk op een andere poort, die terminal voor actuele URL

## Hoe wordt de data opgehaald

De data wordt opgehaald met de fetch functie. Hierbij komt een JSON-response terug van alle producten die beschikbaar zijn.
Dit was in de documentatie van nextjs.org de meest eenvoudige optie die ik tegenkwam om data op te halen. Andere opties in de documentatie gaan over databases en queries, het gebruik van queries is bij het ophalen van json data van fakestoreapi.com niet nodig.
Ook wordt de data gecachet met "use cache" en 'cacheLife("hours")', zodat de FakeStoreAPI server niet onnodig belast wordt, hooguit enkele keren per dag.

## Hoe werkt de filtering

De filtering werkt met radio buttons, waarbij telkens één categorie geselecteerd kan worden, of geen als de "Everything" optie geselecteerd is.
Bij selectie van één van de opties wordt een aangepaste url gepusht naar de router, waardoor er ?category=x achter de url komt te staan, behalve bij "Everything", dan wordt "?category=x" juist verwijderd.
De array met alle producten wordt vervolgens gefilterd op basis van wat er in ?category staat, door de searchParams uit te lezen.

## Styling keuze

Voor de styling is in de basis Tailwind CSS gebruikt.

De styling van de layout is in eerste instantie op basis van flex. De header en footer zijn flex: none en de main body flex: 1.
Hierdoor hebben de header en footer een hoogte op basis van de content en neemt de main altijd minimaal de resterende hoogte in, waardoor de footer altijd onderaan de pagina staat.

In het productoverzicht (de filter en lijst met producten) is ook gekozen voor flex, waarbij op de desktop de twee elementen naast elkaar staan, terwijl bij kleinere schermen de elementen boven elkaar komen te staan, zodat de productelementen niet te smal zijn op telefoons.

Voor het overzicht van de producten is gebruik gemaakt van grid. Door grid te gebruiken is het eenvoudig mogelijk alle producten in elementen van gelijke grootte te stoppen die automatisch naar een nieuwe regel doorschuiven, als er te veel producten op één regel staan.

Naast layouting zijn er ook een aantal classes toegevoegd zodat de website op zowel light als dark mode leesbaar is.

## Extra pagina

Uit enthousiasme heb ik een product pagina gemaakt, deze pagina is erg simpel gebleven. Omdat ik erachter kwam dat het niet in de scope van de opdracht zat. Maar het oefenen met een dynamische route voor producten was alsnog een leuke opdracht.
Ook op deze pagina wordt het product met fetch opgehaald, op basis van het product-ID die in de url staat.
