import React from 'react';
import '../../App.css';
import SecondaryHero from '../SecondaryHero';

function Om () {
    return(
        <>
        <SecondaryHero title="Om Bringle"/>
        <div className="page-text-box">
        <h2>Strävan mot ordning och reda</h2>
        <p>CC-kärror är en viktig del av blombranschen. Odlare kan smidigt transportera sina produkter på kärrorna och samtidigt är de funktionella för återförsäljare vid försäljningstillfällen.</p>
        <p>Däremot så uppstår det nu som då oklarheter mellan avsändare och mottagare gällande antal levererade kärror. Det system som idag existerar för att hålla koll på CC-kärrorna har med andra ord sina brister. Omständigheterna kring CC-kärrorna är ett faktum och därför vill vi på Bringle erbjuda ett komplett verktyg för att underlätta hanteringen av CC-kärror.</p>
        <p>Med hjälp av digitala kundsaldon, digitalt signerade leveranser och detaljrika rapporter så utgör Bringle en möjlighet att underlätta vardagen för såväl odlare som återförsäljare.</p>
        </div>
        </>
    );
}

export default Om;