import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("our-team")
export class OurTeam extends TailwindElement(style) {

    @state()
    activeLogo: string = '';

    render() {
        return html`
            <main>
                
                <h1 class="font-unna-700 text-[20px] md:text-[39px] xl:text-[50px] text-center mb-6">WHO IS WHO</h1>
                <div class="flex flex-row flex-wrap items-center justify-center gap-2 text-center mb-20 text-white mx-auto">
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/glenn.png" alt="Glenn">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">GLENN CEZANNE</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Managing Director</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/sumit.png" alt="Sumit">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">SUMIT AGARWAL</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Counsellor, India</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/pieter.png" alt="Pieter">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">PIETER ALLERS</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Consultant</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/matthias.png" alt="Matthias">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">MATTHIAS BEYER</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Global Sustainability </br> Counselor</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/sebastien.png" alt="Sébastien">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] uppercase">Sébastien Blanchard</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Consultant</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/marine.png" alt="Marine">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">MARINE CORNELIS</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Consultant</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/mariliis.png" alt="Mari">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">MARI LIIS KURG</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Consultant</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/sietske.png" alt="Sietske">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">SIETSKE DE GROOT</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Associate</span>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="our-team-photo-div">
                            <img class="our-team-photo" src="/images/our-team/ilinca.png" alt="Ilinca">
                            <div class="our-team-photo-layer">
                                <span class="font-unna-700 text-[13px] md:text-[19px] xl:text-[23px] leading-[15px] md:leading-[22px] xl:leading-[26px] ">ILINCA DUMITRU</span>
                                <span class="font-jose-400-it text-[11px] md:text-[14px] xl:text-[15px] leading-[11px] md:leading-[17px] xl:leading-[22px] ">Senior Consultant</span>
                            </div>
                        </div>
                    </a>
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