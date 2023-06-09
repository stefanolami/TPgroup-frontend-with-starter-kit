import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-header")
export class Header extends TailwindElement(style) {

    @state()
    showMenu: boolean = false

    @property({type: Boolean, attribute: 'with-img'})
    withImg: boolean = false

    @property({type: Boolean, attribute: 'with-doors'})
    withDoors: boolean = false

    @property({type: String})
    title: string = 'TIME&PLACE FUNDING'

    render() {
        return html`
        <header>

            <!-- TABLET / DESKTOP HEADER -->

            <div class="hidden ${classMap({'md:hidden': this.withImg == true, 'md:flex': this.withImg == false})} justify-between items-center select-none md:bg-transparent pb-2 md:pt-3 md:pb-4 xl:pt-5 xl:pb-7">
                <a class="xl:hidden ml-7" href="./home.html">
                    <img class="w-[170px] xl:hidden" src="/images/icons/T&Pgroup-logo.svg" alt="T&P Group logo">
                </a>
                <a class="hidden xl:block ml-[4%]" href="./home.html">
                    <img class="w-[126px]" src="/images/icons/T&Pgroup-logo-desktop.svg" alt="T&P Group logo">             
                </a>
                <nav id="header-nav" class="flex flex-row justify-around xl:justify-center items-center w-[60%] xl:w-2/4 mr-4 h-full font-jose-400-it text-base text-center">    
                    <a class="xl:border-r border-black xl:w-1/4" href="./welcome.html">Welcome</a>
                    <a class="xl:border-r border-black xl:w-1/4" href="./our-pillars.html">Our Pillars</a>
                    <a class="xl:border-r border-black xl:w-1/4" href="./our-team.html">Our team</a>
                    <a class="xl:w-1/4" href="./contact.html">Contact</a>
                </nav>
            </div>


            <!-- TABLET / DESKTOP HEADER WITH PICTURE -->

            <div class="hidden ${classMap({'md:hidden': this.withImg == false, 'md:flex': this.withImg == true})} select-none">
                <div class="w-full">
                    <a class="block w-[140px] xl:w-[212px] mx-auto mt-12" href="./home.html">
                        <img class="w-full" src="/images/icons/T&Pgroup-logo-desktop.svg" alt="T&P Group logo">
                    </a>
                    <nav id="header-nav" class="flex flex-row justify-center items-center font-jose-400-it text-base text-center text-black mt-10 xl:mt-24">    
                        <a class="px-4 xl:px-9 border-r border-r-black" href="./welcome.html">Welcome</a>
                        <a class="px-4 xl:px-9 border-r border-black" href="./our-pillars.html">Our Pillars</a>
                        <a class="px-4 xl:px-9 border-r border-black" href="./our-team.html">Our Team</a>
                        <a class="px-4 xl:px-9" href="./contact.html">Contact</a>
                    </nav>
                </div>
            </div>


            <!-- MOBILE HEADER -->

            <div class="flex md:hidden justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
                <a href="./home.html">
                    <img class="w-[138px] h-[43px] ml-4" src="../../images/icons/T&Pgroup-logo.svg" alt="">
                </a>                
                <div id="mobile-menu-div" class="relative mr-3">
                    <div  @click=${this.toggleMenu} id="mobile-menu" class="select-none md:hidden">
                        <object data="../../images/mobile-menu-circle.jpg" width="48" height="35"></object>
                        <div class="absolute top-0 flex flex-col w-full h-[35px] justify-center items-center">
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                        </div>
                    </div>
                    <nav id="mobile-menu-nav" class="${classMap({'hidden': this.showMenu == false, 'block': this.showMenu == true})} absolute z-20 w-[148px] md:h-full top-[-4px] right-0 flex-col justify-between border-primary border-[3px] rounded-lg rounded-tr-none md:border-none bg-white md:bg-transparent">    
                        <div @click=${this.toggleMenu} id="mobile-menu-close" class="ml-[85%] mt-0 font-nunito-400  text-primary text-lg md:hidden">x</div>
                        <ul class="flex flex-col md:flex-row justify-evenly h-[90%] ml-6 mb-3 font-jose-400-it text-primary-dark text-base">
                            <li class="mt-6"><a href="./welcome.html">Welcome</a></li>
                            <li class="mt-6"><a href="./our-pillars.html">Our Pillars</a></li>
                            <li class="mt-6"><a href="./our-team.html">Our Team</a></li>
                            <li class="mt-6 mb-5"><a href="./Contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }


    toggleMenu() {
        this.showMenu = !this.showMenu
    }

}