import React from "react";


export default function Cookies() {
    return(
        <>
        <main className="h-[55%] flex flex-col items-center  p-12">
            <article className="flex flex-col gap-8">
                <h1 className="text-4xl font-semibold">Informasjonskapsler</h1>
                <p>Vi vil gjøre det enkelt: vi sporer deg ikke.
                Nettsiden bruker kun <b>Plausible Analytics</b>, som gir oss anonym statistikk – helt uten informasjonskapsler.</p>
                <p>Hvis du velger å svare på spørreskjemaet vårt, spør vi først om samtykke.</p>
                <p>Det betyr at du kan bruke hele nettsiden uten å bekymre deg for informasjonskapsler.</p>
            </article>
        </main>
        </>
    )
}