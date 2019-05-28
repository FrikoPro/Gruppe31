# GRUPPE 31 - 2019
#### Members
-
-
-
-
-
___
## Project Description
Kanban'ish WebApp



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

3) før du starter å jobbe er det lurt å lage seg en branch først

```git
git branch <branchname>
```

5) skifte til den branchen du opprettet

```git
git checkout <branchname>
```

6) sjekke hvilken branch du er på. lyser grønt for den gjeldene branchen.

```git
git branch -a
```

7) git status for å sjekke hva som må oppdateres

```git
git status
```

8) sjekke detaljerte endringer i filene

```git
git diff
```

9) git add for å tracke filer

```git
git add <filepath/file.> (optional: ./-A for å adde alle filer som er endret)
```

10) bekrefte endringene. prøve å ha utfyllende meldinger. meldingene vil gjelde for alle de add'a filene. Hvis du skal ha meldinger spesifikt må du adde hver enkelt og commit'e dem. Lønner seg å commit'e etter hver endring for hver fil 
```git
git commit -m "your message"
```

11) pushe filene opp til remote depository i ditt branch
```git
git push -u origin <yourBranchName>
```

## Merge Branch with master

Så for å merge med master så kan man gjøre følgende:

1) skift til master branch

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

5) pushe så master branch'en opp igjen og den vil da ha din branch i seg og er merged opp til remote depository.

```git
git push origin master
```

## Slette branch

1) sletter branchen din lokalt på din PC bare

```git
git branch -d <branchName>
```

2) sletter branchen din på remote depository

```git
git push origin --delete <yourBranchName>
```








