import { html } from "lit";
import { customElement} from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-footer")
export class Footer extends TailwindElement(style) {

  render() {
    return html`
    <footer>
        <!-- footer needs body with position relative and min-height 100vh (relative min-h-screen)
        and main with padding-bottom equal to footer height (pb-[164px]) -->


        <!-- MOBILE FOOTER -->
        <div class="absolute bottom-0 left-0 flex md:hidden flex-col justify-evenly items-center w-full h-[200px] bg-primary text-white">
            <a class="mobile-footer-btns font-unna-700-it" href="./contact.html">Contact</a>

            <div class="font-jose-400 text-[11px] text-center leading-[13px] mt-2">
                <p>©2023 Time&Place Group. <br/>Part of Time&Place Consulting. <br/>All rights reserved</p>
            </div>

            <ul class="w-full px-9 flex flex-row justify-around font-jose-700 text-[11px]">
                <li><a href="./terms-conditions.html">Terms & Conditions</a></li>
                <li>-</li>
                <li><a href="./cookie-use.html">Cookie Use</a></li>
                <li>-</li>
                <li><a href="./privacy-policy.html">Privacy Policy</a></li>
            </ul>
            <div class="flex flex-row justify-center mx-auto my-3 gap-3">
                <a href="" target="blank">
                    <img class="w-[22px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                </a>
                <a href="" target="blank">
                    <img class="w-[22px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                </a>
            </div>
        </div>
        

        <!-- END MOBILE FOOTER -->

        


        <!-- TABLET FOOTER -->
        <div  class="absolute bottom-0 left-0 hidden md:flex xl:hidden flex-col justify-evenly items-center w-full h-[349px] bg-primary text-white">
            <div class="flex flex-row justify-around w-full h-[40%]">
                <div class="flex flex-col">
                    <div class="w-[201px] mt-6">
                        <a class="inline-block w-full h-full border-[1px] border-white rounded-full font-unna-700-it text-center text-[26px] hover:bg-white hover:text-primary" href="./contact.html">Contact</a>
                    </div>
                    <div class="flex flex-row justify-center mx-auto mt-7 gap-5">
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                        </a>
                    </div>
                </div>
            </div>
            <nav class="flex flex-row justify-between items-center w-[90%] h-16 px-2 py-1 border-y font-jose-400-it text-xl">
                <a href="./welcome.html">Welcome</a>
                <a href="./our-pillars.html">Our Pillars</a>
                <a href="./our-team.html">Our Team</a>
                <a href="./terms-conditions.html">Terms & Conditions</a>
                <a href="./cookie-use.html">Cookie Use</a>
                <a href="./privacy-policy.html">Privacy Policy</a>
            </nav>
            <div class="font-jose-200 text-[20px] leading-[23px] text-center">
                <p>©2023 Time&Place Group. All rights reserved. <br/>Time&Place Group is part of Time&Place Consulting.</p>
            </div>
        </div>
            
        

        <!-- END TABLET FOOTER -->



        <!-- DESKTOP FOOTER -->
        <div class="absolute bottom-0 left-0 hidden xl:flex flex-col w-full h-[260px] bg-primary text-white pt-10">
            <div class="flex flex-row justify-evenly items-center w-full h-full">
                <div class="grid grid-cols-3 w-[60%] h-full">
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Overview</div>
                        <a class="desktop-footer-items" href="./welcome.html">Welcome</a>
                        <a class="desktop-footer-items" href="./our-pillars.html">Our Pillars</a>
                        <a class="desktop-footer-items" href="./our-team.html">Our Team</a>
                        <a class="desktop-footer-items" href="./contact.html">Contact</a>
                    </nav>
                    <nav class="desktop-footer-navs">
                        <div class="desktop-footer-headings">Privacy</div>
                        <a class="desktop-footer-items" href="./terms-conditions.html">Terms & Conditions</a>
                        <a class="desktop-footer-items" href="./cookie-use.html">Cookie Use</a>
                        <a class="desktop-footer-items" href="./privacy-policy.html">Privacy Policy</a>
                    </nav>
                    <ul class="desktop-footer-navs">
                        <li class="desktop-footer-headings">Contact us</li>
                        <li class="desktop-footer-items">info@timeandplaceconsulting.com</li>
                        <li class="desktop-footer-items">+32 (0) 485 38 22 21</li>
                        <li class="desktop-footer-items">Rue de la Loi 81 A <br/>1040 Brussels <br/>Belgium</li>
                    </ul>
                </div>
                <div class="w-[40%] flex flex-col justify-start items-center h-full">
                    <p class="font-unna-400-it text-[27px]">Follow us on social media!</p>
                    <div class="flex flex-row justify-center items-center gap-5 mt-11">
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/facebook-footer.svg" alt="Facebook icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/twitter-footer.svg" alt="Twitter icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/youtube-footer.svg" alt="Youtube icon">
                        </a>
                        <a href="" target="blank">
                            <img class="w-[35px]" src="../../images/icons/linkedln-footer.svg" alt="LinkedIn icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        

        <!-- END DESKTOP FOOTER -->



    </footer>
    `;
  }
}