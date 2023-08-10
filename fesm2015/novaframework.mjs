import * as i0 from '@angular/core';
import { Injectable, Component, Input, ContentChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { faCheck, faXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import * as i2 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

class NovaframeworkService {
    constructor() { }
}
NovaframeworkService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NovaframeworkService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NovaframeworkComponent {
}
NovaframeworkComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NovaframeworkComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NovaframeworkComponent, selector: "lib-novaframework", ngImport: i0, template: `
    <p>
      novaframework works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-novaframework', template: `
    <p>
      novaframework works!
    </p>
  ` }]
        }] });

class CardComponent {
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: CardComponent, selector: "lib-card", inputs: { header: "header" }, queries: [{ propertyName: "bodyTemplateRef", first: true, predicate: ["body"], descendants: true }, { propertyName: "optionsTemplateRef", first: true, predicate: ["options"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\r\n  <div class=\"card__options\">\r\n    <ng-container *ngIf=\"optionsTemplateRef\" [ngTemplateOutlet]=\"optionsTemplateRef\"></ng-container>\r\n  </div>\r\n  <h1 class=\"card__header\">{{ header }}</h1>\r\n  <div class=\"card__body\">\r\n    <ng-container *ngIf=\"bodyTemplateRef\" [ngTemplateOutlet]=\"bodyTemplateRef\"></ng-container>\r\n  </div>\r\n</div>", styles: [".card{background-color:#fff;border-radius:8px;box-shadow:0 0 20px -5px #0003;position:relative}.card .card__options{position:absolute;top:0;right:0;margin-top:1rem;margin-right:1rem}.card .card__header{margin:0;padding:10px 10px 5px;font-size:1.3rem}.card .card__body{max-height:100%;padding:0 10px 10px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-card', template: "<div class=\"card\">\r\n  <div class=\"card__options\">\r\n    <ng-container *ngIf=\"optionsTemplateRef\" [ngTemplateOutlet]=\"optionsTemplateRef\"></ng-container>\r\n  </div>\r\n  <h1 class=\"card__header\">{{ header }}</h1>\r\n  <div class=\"card__body\">\r\n    <ng-container *ngIf=\"bodyTemplateRef\" [ngTemplateOutlet]=\"bodyTemplateRef\"></ng-container>\r\n  </div>\r\n</div>", styles: [".card{background-color:#fff;border-radius:8px;box-shadow:0 0 20px -5px #0003;position:relative}.card .card__options{position:absolute;top:0;right:0;margin-top:1rem;margin-right:1rem}.card .card__header{margin:0;padding:10px 10px 5px;font-size:1.3rem}.card .card__body{max-height:100%;padding:0 10px 10px}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], bodyTemplateRef: [{
                type: ContentChild,
                args: ['body', { static: false }]
            }], optionsTemplateRef: [{
                type: ContentChild,
                args: ['options', { static: false }]
            }] } });

class LoadingComponent {
}
LoadingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LoadingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: LoadingComponent, selector: "lib-loading", ngImport: i0, template: "<div class=\"loading\">\r\n  <div class=\"wrapper-loading\">\r\n    <div class=\"circle c1\" style=\"--i:1\"></div>\r\n    <div class=\"circle c2\" style=\"--i:-1\"></div>\r\n  </div>\r\n</div>", styles: [".loading{background:rgba(0,0,0,.9);color:#fff;position:fixed;top:0;left:0;height:100vh;width:100vw;transition:all .5s;display:flex;justify-content:center;align-items:center}.wrapper-loading{width:100px;height:100px;position:relative}.circle{position:absolute;left:50%;top:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate(-50%,-50%) rotate(0);border-radius:50%;border:5px solid;border-color:var(--morado-novabase) var(--morado-novabase) transparent transparent;animation:round 1s linear infinite}.c2{border-color:transparent transparent red red;width:calc(100% - 30px);height:calc(100% - 30px)}@keyframes round{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(calc(360deg * var(--i)))}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: LoadingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loading', template: "<div class=\"loading\">\r\n  <div class=\"wrapper-loading\">\r\n    <div class=\"circle c1\" style=\"--i:1\"></div>\r\n    <div class=\"circle c2\" style=\"--i:-1\"></div>\r\n  </div>\r\n</div>", styles: [".loading{background:rgba(0,0,0,.9);color:#fff;position:fixed;top:0;left:0;height:100vh;width:100vw;transition:all .5s;display:flex;justify-content:center;align-items:center}.wrapper-loading{width:100px;height:100px;position:relative}.circle{position:absolute;left:50%;top:50%;width:calc(100% - 10px);height:calc(100% - 10px);transform:translate(-50%,-50%) rotate(0);border-radius:50%;border:5px solid;border-color:var(--morado-novabase) var(--morado-novabase) transparent transparent;animation:round 1s linear infinite}.c2{border-color:transparent transparent red red;width:calc(100% - 30px);height:calc(100% - 30px)}@keyframes round{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(calc(360deg * var(--i)))}}\n"] }]
        }] });

class ModalComponent {
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

class NavComponent {
}
NavComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NavComponent, selector: "lib-nav", ngImport: i0, template: "<p>nav works!</p>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-nav', template: "<p>nav works!</p>\r\n" }]
        }] });

class NotificationComponent {
    constructor() {
        this.message = '';
        this.type = 'error';
        this.rojo = false;
        this.verde = true;
        this.amarillo = false;
    }
    ngOnInit() {
        if (this.type === 'success') {
            this.faIcon = faCheck;
            this.verde = true;
            this.rojo = false;
            this.amarillo = false;
        }
        if (this.type === 'error') {
            this.faIcon = faXmark;
            this.amarillo = false;
            this.verde = false;
            this.rojo = true;
        }
        if (this.type === 'warning') {
            this.faIcon = faTriangleExclamation;
            this.amarillo = true;
            this.verde = false;
            this.rojo = false;
        }
    }
}
NotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NotificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NotificationComponent, selector: "lib-notification", inputs: { message: "message", type: "type" }, ngImport: i0, template: "<div class=\"notification\">\r\n  <div [ngClass]=\"{'icon-notification':true, 'verde': verde, 'rojo': rojo, 'amarillo': amarillo}\">\r\n    <fa-icon [icon]=\"faIcon\"></fa-icon>\r\n  </div>\r\n  <div>{{message}}</div>\r\n</div>", styles: [".notification{width:300px;position:fixed;right:10px;top:10px;height:50px;background-color:#fff;border-radius:10px;border:1px solid #ccc;display:flex;align-items:center;font-weight:700;font-size:100px;color:var(--morado-novabase);z-index:99}.icon-notification{color:#fff;height:50px;border-radius:10px 0 0 10px;margin-right:25px;width:40px;font-size:20px!important;display:flex;justify-content:center;align-items:center}.icon-notification fa-icon{zoom:1.2}.amarillo{background-color:#eed305}.rojo{background-color:red}.verde{background-color:green}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i2.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-notification', template: "<div class=\"notification\">\r\n  <div [ngClass]=\"{'icon-notification':true, 'verde': verde, 'rojo': rojo, 'amarillo': amarillo}\">\r\n    <fa-icon [icon]=\"faIcon\"></fa-icon>\r\n  </div>\r\n  <div>{{message}}</div>\r\n</div>", styles: [".notification{width:300px;position:fixed;right:10px;top:10px;height:50px;background-color:#fff;border-radius:10px;border:1px solid #ccc;display:flex;align-items:center;font-weight:700;font-size:100px;color:var(--morado-novabase);z-index:99}.icon-notification{color:#fff;height:50px;border-radius:10px 0 0 10px;margin-right:25px;width:40px;font-size:20px!important;display:flex;justify-content:center;align-items:center}.icon-notification fa-icon{zoom:1.2}.amarillo{background-color:#eed305}.rojo{background-color:red}.verde{background-color:green}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { message: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class NovaframeworkModule {
}
NovaframeworkModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NovaframeworkModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkModule, declarations: [NovaframeworkComponent,
        CardComponent,
        LoadingComponent,
        ModalComponent,
        NavComponent,
        NotificationComponent], imports: [CommonModule,
        FontAwesomeModule], exports: [NovaframeworkComponent,
        CardComponent,
        LoadingComponent,
        ModalComponent,
        NotificationComponent] });
NovaframeworkModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkModule, imports: [CommonModule,
        FontAwesomeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NovaframeworkModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NovaframeworkComponent,
                        CardComponent,
                        LoadingComponent,
                        ModalComponent,
                        NavComponent,
                        NotificationComponent
                    ],
                    imports: [
                        CommonModule,
                        FontAwesomeModule
                    ],
                    exports: [
                        NovaframeworkComponent,
                        CardComponent,
                        LoadingComponent,
                        ModalComponent,
                        NotificationComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of novaframework
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, LoadingComponent, ModalComponent, NotificationComponent, NovaframeworkComponent, NovaframeworkModule, NovaframeworkService };
//# sourceMappingURL=novaframework.mjs.map
