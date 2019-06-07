# PRO101 Webprosjekt
### Eksamensoppgave
### June 6, 19

######Applikasjonen ligger i mappen gruppe31_app

# PROGRAMVARE & PROTOTYPE BESKRIVELSE
#### Utviklet av 
*Jonas Say, Fredrik Holanger, Fredrik Jansen, Sindre Fromeide og Benjamin Opsal*

Gruppe 31 har i forbindelse med eksamen i faget PRO101 utviklet en web-applikasjon (prototype) i henhold til eksamenskriterier. Prosjektet finnes i sin helhet slik det ble levert på: https://github.com/FrikoPro/Gruppe31. Alle endringer som er utført etter 07/06/2019 klokken 15:00 inngår ikke i den leverte eksamensoppgaven. 

Prototypen er et lettvekts prosjektstyringsverktøy. Applikasjonen simulerer en klassisk Kanban tavle der arbeidsoppgaver deles opp og plasseres inn i kolonner. Kolonnene illustrerer visuelt hvor i prosessen en arbeidsoppgave til en hver tid befinner seg. Applikasjonen skal fungere som et prosjekteringsverktøy som gir et helhetlig bilde av fremdrift og arbeidsoppgaver.

## Bruk
Applikasjonen er tiltenkt mindre prosjekter. Applikasjonen er generell, ryddig og fungerer "Out of the box". 

## Funksjonalitet
En bruker logger inn i applikasjonen ved å taste inn brukernavn og passord på innloggingssiden. Etter godkjent innlogging føres brukeren til applikasjonens dashbord. I tillegg til å fungere som en oversikt kan nye prosjekter opprettes, slettes eller legges i historie arkivet. Applikasjonens grensesnitt er delt inn i tre hovedgrupper. På venstre side finner vi en meny med ulik funksjonalitet. Høyre side er forbeholdt en aktivitets-logg som viser hendelser i kronologisk rekkefølge. Mellom disse finner vi et hovedområdet som er tiltenkt de ulike prosjektene som opprettes. Brukeren kan navigere inn i de ulike prosjektene via en knapp på selve prosjekt-kortet etter at det er opprettet. 

Navigerer vi inn i et prosjekt vil vi se at grensesnittet med menyen til venstre, aktivitet til høyre og hovedområdet i sentrum går igjen. Området i sentrum inneholder nå kolonner som brukeren kan opprette, endre eller slette etter eget ønske. Nye oppgaver kan genereres og flyttes mellom de ulike kolonnene etter hvert som oppgavene blir fullført. I tillegg finnes en fremgangs-bar (progress-bar) som viser hvor langt et prosjekt er på vei fra 0% til 100%. Ulike oppgaver kan delegeres til medlemmer i tillegg til dato og tid. Det er også lagt inn en “dark-mode” funksjon som gjør siden mørk. 

# CSS TODO'S
1. Fix ikoner som viser navn til bruker. (dashboard & project)
2. Add min-height til kort på project siden.
3. Redo dashboard-cards to hold percentage bar

BUGS:
###### Collect-users-from-trash-bug: Drag a member to trash. Create project card. Drag card over trash without letting go. Drag project-card back to main area. You should see the member added to the project.

###### A project card can only handle 6 users





## Project Log
##### 27.05.2019
Felles git, research

## GIT Cheats
1) Kloner remote depository til din lokale PC

```git
git clone <URL> .(punktum står at du vil klone til den mappen du er i)
```

2) Git init for å tracke filene i mappen du er i

```git
git init
```

3) Før du starter å jobbe er det lurt å lage seg en branch først

```git
git branch <branchname>
```

5) Skifte til den branchen du opprettet

```git
git checkout <branchname>
```

6) Sjekke hvilken branch du er på. lyser grønt for den gjeldene branchen.

```git
git branch -a
```

7) Git status for å sjekke hva som må oppdateres

```git
git status
```

8) Sjekke detaljerte endringer i filene

```git
git diff
```

9) Git add for å tracke filer

```git
git add <filepath/file.> (optional: ./-A for å adde alle filer som er endret)
```

10) Bekrefte endringene. prøve å ha utfyllende meldinger. meldingene vil gjelde for alle de add'a filene. Hvis du skal ha meldinger spesifikt må du adde hver enkelt og commit'e dem. Lønner seg å commit'e etter hver endring for hver fil
```git
git commit -m "your message"
```

11) pushe filene opp til remote depository i ditt branch
```git
git push -u origin <yourBranchName>
```

## Merge Branch with master

Det er lurt å merge med master når du har fått til en funksjon/idé, og så jobbe videre med ditt branch. For å merge med master så kan man gjøre følgende:

1) Skift til master branch

```git
git checkout master
```

2) (VIKTIG) Så er det viktig å huske å pull'e ned masteren før man merge'r
```git
git pull origin master
```

3) (optional) Sjekk hvilken branches som er merged sammen, hvis det bare står master er den ikke merged med noen enda.

```git
git branch --merged 
```

4) Så får å merge, bruker man denne koden

```git
git merge <branchToBeMerged>
```

5) Pushe så master branch'en opp igjen og den vil da ha din branch i seg og er merged opp til remote depository.

```git
git push origin master
```

## Slette branch

1) Sletter branchen din lokalt på din PC bare

```git
git branch -d <branchName>
```

2) Sletter branchen din på remote depository

```git
git push origin --delete <yourBranchName>
```








