import React from 'react';
import '../../App.css';
import SecondaryHero from '../SecondaryHero';

function Funktioner () {
    return(
        <>
        <SecondaryHero title="Funktioner"/>
        <div className="page-text-box" id="saldo">
            <h2>Digitala kundsaldon</h2>
            <p>Nu behöver du inte längre oroa dig för högen av papperslappar som tidigare gjort sitt bästa för att hålla koll på olika kundsaldon.</p>
            <p>Med hjälp av Bringles digitala kundsaldon så kan du enkelt lägga till dina existerande kunder för att automatisk hålla koll på ingående och utgående saldon. All informarion sparas i appen så det enda du behöver göra är att registrera en leverans med några enkla knapptryck.</p>
        </div>
        <div className="page-text-box" id="leverans">
            <h2>Bekräftade leveranser</h2>
            <p>Inga fler oklarheter mellan avsändare och mottagare gällande antal levererade kärror. I och med att alla leveranser som registreras med Bringle signeras av såväl avsändare som transportör och mottagare så kan du vara säker på att antalet stämmer. Skulle det uppstå några oklarheter är du bara några knapptryckningar bort från att få informationen svart på vitt.</p>
            <p>Efter att en leverans registrerats på Bringle så får mottagaren en digital forsedel på mail och SMS där denne kan bekräfta leveransen med en digital signatur. Är det aktuellt med retur så görs detta enkelt på samma forsedel.</p>
        </div>
        <div className="page-text-box" id="rapport">
            <h2>Rapporter</h2>
            <p>Grunden till en god planering är att kunna se på tidigare händelser och ta dessa i beaktande. Med hjälp av Bringles rapporter så kan du ta fram detaljerad information på olika kunder och vilka leveranser som gjorts till dessa. All nödvändig info framgår i dessa rapporter för att göra det så lätt som möjligt för dig att hålla stenkoll på dina kärror.</p>
        </div>
        <div className="page-text-box" id="pass">
            <h2>Digitalt växtpass - kommer snart</h2>
            <p>Lagring av växtpass sker tryggt och enkelt med Bringle. Kravet på att spara växtpasset i 3 år är ingen utmaning längre. Är du betalande kund hos bringle så sparas växtpassen digitalt för dig.</p>
            <p>Denna funktion är fortfarande under utveckling.</p>
        </div>
        </>
    );
}

export default Funktioner;