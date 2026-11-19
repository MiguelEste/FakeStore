FakeStoreApi opdracht door Michael Ponsioen

## Getting Started

Installeer dependencies

```bash
pnpm install
```

Start de development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) om de fake store te openen.

## Hoe wordt de data opgehaald

De data wordt opgehaald met de fetch functie. Hierbij krijg je een mooi json pakketje terug van alle producten die beschikbaar zijn.
Dit was in de documentatie van nextjs.org de meest eenvoudige optie die ik tegenkwam om data op te halen. Andere opties in de documentaties gaan over databases en queries, iets wat bij het ophalen van json data van fakestoreapi.com niet nodig is.
Ook is de data gecached, zodat de server niet onnodig belast wordt, aangezien producten niet met grote regelmatig zullen wijzigen.

## Hoe werkt de filtering

De filtering werkt met radio buttons, waarbij telkens één categorie geselecteerd kan worden, of geen als de "Verything" optie geselecteerd is.
Bij selectie van de andere opties wordt een aangepaste url gepushed naar de router, waardoor er ?category=x achter de url komt te staan.
De array met alle producten wordt vervolgens gefiltert op basis van wat er in ?category staat, door de searchParams uit te lezen.

## Styling keuze

Voor de styling is in de basis tailwind gebruikt.

De styling van de layout is in 1e instantie op basis van flex. De header en footer zijn flex: 0 en de main body flex: 1, hierdoor hebben de header en footer een vaste hoogte en neemt de main altijd minimaal de rest hoogte in, waardoor de footer altijd onderaan de pagina staat.

In het product overzicht (de filter en lijst met producten) is ook gekozen voor flex, waarbij op de desktop de 2 naast elkaar staan, maar bij kleinere schermen staan de elementen boven elkaar, zodat de product elementen niet te smal zijn op telefoons.

Voor het overzicht van de producten is gebruik gemaakt van grid. Door grid te gebruiken is het eenvoudig mogelijk alle producten in elementen van gelijke grootte te stoppen die automatisch naar een nieuwe regel verplaatsen als er te veel producten op 1 lijn staan

Naast layouting zijn er ook een aantal classes toegevoegd zodat de website op zowel light als dark mode leesbaar is.

## Extra pagina

In enthousiasme heb ik een product pagina gemaakt, deze pagina is erg simpel gebleven, omdat ik er achter kwam dat het niet in de scope van de opdracht zat. Maar het oefenen met een dynamische route voor producten was alsnog een leuke opdracht.
Ook op deze pagina wordt het product met fetch opgehaald, op basis van de product ID die in de url staat.
