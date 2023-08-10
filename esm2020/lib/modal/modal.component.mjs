import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ModalComponent {
    constructor() {
        this.width = '50';
        this.height = '50';
    }
    ngOnInit() {
        if (this.width === '') {
            this.width = '50';
        }
        if (this.height === '') {
            this.height = '50';
        }
    }
    cerrarModal() {
        this.showModal = false;
    }
}
ModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ModalComponent, selector: "lib-modal", inputs: { width: "width", height: "height" }, ngImport: i0, template: "<div *ngIf=\"showModal\" class=\"modal-recuperar\" style=\"z-index: 99;\">\r\n  <div class=\"contenido-modal\" [ngStyle]=\"{'width': width + 'vw', 'height': height + 'vh'}\">\r\n    <div class=\"cierre-modal\" (click)=\"cerrarModal()\"><label>X</label></div>\r\n    <div style=\"height: 100%; width: 100%; display:flex; flex-direction: column;\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".modal-recuperar{position:fixed;font-family:Arial,Helvetica,sans-serif;inset:0;background-color:#000000e6;display:flex;justify-content:center;align-items:center}.contenido-modal{background-color:#fff;border-radius:20px;display:flex;flex-direction:column;padding:20px;position:relative}.cierre-modal{position:absolute;right:-8px;font-weight:700;top:-7px;z-index:999;width:25px;height:25px;border-radius:25px;background-color:var(--morado-novabase);display:flex;align-items:center;justify-content:center;color:#fff}.cierre-modal label:hover{cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-modal', template: "<div *ngIf=\"showModal\" class=\"modal-recuperar\" style=\"z-index: 99;\">\r\n  <div class=\"contenido-modal\" [ngStyle]=\"{'width': width + 'vw', 'height': height + 'vh'}\">\r\n    <div class=\"cierre-modal\" (click)=\"cerrarModal()\"><label>X</label></div>\r\n    <div style=\"height: 100%; width: 100%; display:flex; flex-direction: column;\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".modal-recuperar{position:fixed;font-family:Arial,Helvetica,sans-serif;inset:0;background-color:#000000e6;display:flex;justify-content:center;align-items:center}.contenido-modal{background-color:#fff;border-radius:20px;display:flex;flex-direction:column;padding:20px;position:relative}.cierre-modal{position:absolute;right:-8px;font-weight:700;top:-7px;z-index:999;width:25px;height:25px;border-radius:25px;background-color:var(--morado-novabase);display:flex;align-items:center;justify-content:center;color:#fff}.cierre-modal label:hover{cursor:pointer}\n"] }]
        }], propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm92YWZyYW1ld29yay9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2pELE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBTVcsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixXQUFNLEdBQVcsSUFBSSxDQUFDO0tBZ0JoQztJQWJDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUNuQjtJQUVILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7MkdBakJVLGNBQWM7K0ZBQWQsY0FBYywrRkNQM0IsbWFBT007MkZEQU8sY0FBYztrQkFMMUIsU0FBUzsrQkFDRSxXQUFXOzhCQUtaLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9ICc1MCc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgPSAnNTAnO1xyXG4gIHNob3dNb2RhbDogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gJycpIHtcclxuICAgICAgdGhpcy53aWR0aCA9ICc1MCdcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhlaWdodCA9PT0gJycpIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSAnNTAnXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY2VycmFyTW9kYWwoKSB7XHJcbiAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwic2hvd01vZGFsXCIgY2xhc3M9XCJtb2RhbC1yZWN1cGVyYXJcIiBzdHlsZT1cInotaW5kZXg6IDk5O1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW5pZG8tbW9kYWxcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogd2lkdGggKyAndncnLCAnaGVpZ2h0JzogaGVpZ2h0ICsgJ3ZoJ31cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaWVycmUtbW9kYWxcIiAoY2xpY2spPVwiY2VycmFyTW9kYWwoKVwiPjxsYWJlbD5YPC9sYWJlbD48L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=