import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-dropdown]'
})
export class dropdownDirective implements OnInit{

    constructor(private elRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(): void {
    
    }

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}