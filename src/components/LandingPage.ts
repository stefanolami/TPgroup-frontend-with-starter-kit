import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("landing-page")
export class LandingPage extends TailwindElement(style) {

    render() {
        return html`
            <main>
                <div class="hidden xl:block mx-auto text-center mt-20 mb-14">
                    <h3 class="font-unna-700-it text-2xl mb-6">Welcome to our Group!</h3>
                    <p class="font-jose-400 text-base">Our network is here to help you get your projects to bloom </br>through our combined expertise!</p>
                </div>
                <ul class="flex flex-col justify-center md:flex-row md:flex-wrap items-center mx-auto w-2/5 md:w-2/3 xl:w-[70%] md:mb-24">
                    <img class="w-full md:hidden" src="/images/landing-page/T&Pgroup-logo-big.svg" alt="T&P Group logo">
                    <a class="block w-full md:w-1/3 xl:w-1/5" href="" target="blank">
                        <img class="w-full" src="/images/landing-page/T&Pconsulting-logo.svg" alt="T&P Consulting logo">
                    </a>
                    <a class="block w-full md:w-1/3 xl:w-1/5" href="" target="blank">
                        <img class="w-full" src="/images/landing-page/T&Pmedia-logo.svg" alt="T&P Media logo">
                    </a>
                    <a class="block w-full md:w-1/3 xl:w-1/5" href="" target="blank">
                        <img class="w-full" src="/images/landing-page/T&Pfunding-logo.svg" alt="T&P Funding logo">
                    </a>
                    <a class="block w-full md:w-1/3 xl:w-1/5" href="" target="blank">
                        <img class="w-full" src="/images/landing-page/T&Passociations-logo.svg" alt="T&P Associations logo">
                    </a>
                    <a class="block w-full md:w-1/3 xl:w-1/5 mb-28 mt-6 md:mt-0 md:mb-3" href="" target="blank">
                        <img class="mx-auto w-3/5" src="/images/landing-page/T&Pinstitute-logo.svg" alt="T&P Institute logo">
                    </a>
                </ul>    
            </main>           
        `;
    }
}