# typescript_sandbox

Globálisan telepíti a TypeScriptet (innentől használható a tsc)

`npm install -g typescript`

TSC verzió lekérése

`tsc -v`

Sima node-os projekt inicializálás

`npm init -y`

A projekthez hozzáadjuk a TS-t mint függőség

`npm install typescript --save-dev`

tsconfig.json létrehozása

`tsc --init`

index.ts létrehozása, majd fordítása (tsc parancs) és a létrejövő JS fájl futtatása (node-al)

`tsc && node index.js`