import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("our-pillars")
export class OurPillars extends TailwindElement(style) {

    @state()
    activeLogo: string = '';

    render() {
        return html`
            <main>
                <h1 class="md:hidden font-unna-700 text-[20px] text-center mb-8">OUR PILLARS</h1>
                <div class="mx-auto grid grid-rows-5 grid-cols-1 h-[1095px] md:h-[1350px] w-[350px] mb-6 select-none">
                    <div @click="${() => this.activateLogo('consulting')}" class="flex flex-col items-center justify-center">
                        <img class="${classMap({'hidden': this.activeLogo == 'consulting', 'block': this.activeLogo !== 'consulting'})} cursor-pointer md:w-[167px] md:h-[152px] " src="/images/our-pillars/consulting.svg" alt="T&P consulting logo">
                        <div class="${classMap({'hidden': this.activeLogo !== 'consulting', 'flex': this.activeLogo == 'consulting'})} flex-col items-center justify-center">
                            <img class="-mb-8 md:w-[196px] md:h-[156px] " src="/images/landing-page/T&Pconsulting-logo.svg" alt="T&P consulting logo">
                            <p class="mb-4 text-center font-jose-400 text-[15px] leading-[17px] md:text-[17px] md:leading-[21px]" >Looking for premium consulting </br>with connections all over the world </br>and communication as the key factor?</p>
                            <a href="" target="blank" class="flex items-center justify-center pt-1 w-[112px] md:w-[170px] h-[34px] md:h-[52px] border-2 rounded-3xl border-[#2E356F] text-[#2E356F] hover:text-white hover:bg-[#2E356F] font-jose-600 text-[12px] md:text-[16px] leading-[15px] md:leading-[21px]">VISIT WEBSITE</a>
                        </div>
                    </div>
                    <div @click="${() => this.activateLogo('media')}" class="flex flex-col items-center justify-center">
                        <img class="${classMap({'hidden': this.activeLogo == 'media', 'block': this.activeLogo !== 'media'})} cursor-pointer md:w-[167px] md:h-[152px] " src="/images/our-pillars/media-productions.svg" alt="T&P media logo">
                        <div class="${classMap({'hidden': this.activeLogo !== 'media', 'flex': this.activeLogo == 'media'})} flex-col items-center justify-center">
                            <img class="-mb-2 md:mb-0 md:-mt-5 md:w-[196px] md:h-[156px]" src="/images/landing-page/T&Pmedia-logo.svg" alt="T&P media logo">
                            <p class="mb-4 text-center font-jose-400 text-[15px] leading-[17px] md:text-[17px] md:leading-[21px]" >Our in-house media production branch </br>can be put at your service to create movies, </br>concerts and other cultural productions.
                            </p>
                            <a href="" target="blank" class="flex items-center justify-center pt-1 w-[112px] md:w-[170px] h-[34px] md:h-[52px] border-2 rounded-3xl border-[#73241C] text-[#73241C] hover:text-white hover:bg-[#73241C] font-jose-600 text-[12px] md:text-[16px] leading-[15px] md:leading-[21px]">VISIT WEBSITE</a>
                        </div>
                    </div>
                    <div @click="${() => this.activateLogo('funding')}" class="flex flex-col items-center justify-center">
                        <img class="${classMap({'hidden': this.activeLogo == 'funding', 'block': this.activeLogo !== 'funding'})} cursor-pointer md:w-[167px] md:h-[152px] " src="/images/our-pillars/funding.svg" alt="T&P funding logo">
                        <div class="${classMap({'hidden': this.activeLogo !== 'funding', 'flex': this.activeLogo == 'funding'})} flex-col items-center justify-center">
                            <img class="-mb-6 md:mb-0 md:-mt-12 md:w-[196px] md:h-[156px]" src="/images/landing-page/T&Pfunding-logo.svg" alt="T&P funding logo">
                            <p class="mb-4 text-center font-jose-400 text-[15px] leading-[17px] md:text-[17px] md:leading-[21px]" >Do you need help finding funds to start your </br>business? Our exclusive national and local </br>expertise can help you locate unsuspected </br>funds!</p>
                            <a href="" target="blank" class="flex items-center justify-center pt-1 w-[112px] md:w-[170px] h-[34px] md:h-[52px] border-2 rounded-3xl border-[#399AC2] text-[#399AC2] hover:text-white hover:bg-[#399AC2] font-jose-600 text-[12px] md:text-[16px] leading-[15px] md:leading-[21px]">VISIT WEBSITE</a>
                        </div>
                    </div>
                    <div @click="${() => this.activateLogo('associations')}" class="flex flex-col items-center justify-center">
                        <img class="${classMap({'hidden': this.activeLogo == 'associations', 'block': this.activeLogo !== 'associations'})} cursor-pointer md:w-[167px] md:h-[152px] " src="/images/our-pillars/associations.svg" alt="T&P associations logo">
                        <div class="${classMap({'hidden': this.activeLogo !== 'associations', 'flex': this.activeLogo == 'associations'})} flex-col items-center justify-center">
                            <img class="-mb-6 md:w-[196px] md:h-[156px]" src="/images/landing-page/T&Passociations-logo.svg" alt="T&P associations logo">
                            <p class="mb-4 text-center font-jose-400 text-[15px] leading-[17px] md:text-[17px] md:leading-[21px]" >Our in-house media production branch </br>can be put at your service to create movies, </br>concerts and other cultural productions.
                            </p>
                            <a href="" target="blank" class="flex items-center justify-center pt-1 w-[112px] md:w-[170px] h-[34px] md:h-[52px] border-2 rounded-3xl border-[#AB7D4C] text-[#AB7D4C] hover:text-white hover:bg-[#AB7D4C] font-jose-600 text-[12px] md:text-[16px] leading-[15px] md:leading-[21px]">VISIT WEBSITE</a>
                        </div>
                    </div>
                    <div @click="${() => this.activateLogo('institute')}" class="flex flex-col items-center justify-center">
                        <img class="${classMap({'hidden': this.activeLogo == 'institute', 'block': this.activeLogo !== 'institute'})} cursor-pointer md:w-[145px] md:h-[132px] " src="/images/our-pillars/institute.svg" alt="T&P institute logo">
                        <div class="${classMap({'hidden': this.activeLogo !== 'institute', 'flex': this.activeLogo == 'institute'})} flex-col items-center justify-center">
                            <img class="mb-2 md:w-[196px] md:h-[156px]" src="/images/landing-page/T&Pinstitute-logo.svg" alt="T&P institute logo">
                            <p class="mb-4 text-center font-jose-400 text-[15px] leading-[17px] md:text-[17px] md:leading-[21px]" >Our in-house media production branch </br>can be put at your service to create movies, </br>concerts and other cultural productions.
                            </p>
                            <a href="" target="blank" class="flex items-center justify-center pt-1 w-[112px] md:w-[170px] h-[34px] md:h-[52px] border-2 rounded-3xl border-[#2F4C34] text-[#2F4C34] hover:text-white hover:bg-[#2F4C34] font-jose-600 text-[12px] md:text-[16px] leading-[15px] md:leading-[21px]">VISIT WEBSITE</a>
                        </div>
                    </div>
                </div>

            </main>           
        `;
    }

    activateLogo(str: string) {
        this.activeLogo = str
        console.log('activating')
    }

    resetLogo() {
        this.activeLogo = ''
        console.log('resetting')
    }
}