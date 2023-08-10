import { Component, Input } from '@angular/core';
import { faTriangleExclamation, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@fortawesome/angular-fontawesome";
export class NotificationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdmFmcmFtZXdvcmsvc3JjL2xpYi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFPNUYsTUFBTSxPQUFPLHFCQUFxQjtJQVFoQztRQU5TLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUNoQyxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFVBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQUVWLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFxQixDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7a0hBN0JVLHFCQUFxQjtzR0FBckIscUJBQXFCLHNHQ1JsQyxxT0FLTTsyRkRHTyxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0Usa0JBQWtCOzBFQU1uQixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZhVHJpYW5nbGVFeGNsYW1hdGlvbiwgZmFYbWFyaywgZmFDaGVjayB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ub3RpZmljYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZhSWNvbjogYW55O1xyXG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdlcnJvcic7XHJcbiAgcm9qbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHZlcmRlOiBib29sZWFuID0gdHJ1ZTtcclxuICBhbWFyaWxsbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICB0aGlzLmZhSWNvbiA9IGZhQ2hlY2s7XHJcbiAgICAgIHRoaXMudmVyZGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJvam8gPSBmYWxzZTtcclxuICAgICAgdGhpcy5hbWFyaWxsbyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICB0aGlzLmZhSWNvbiA9IGZhWG1hcms7XHJcbiAgICAgIHRoaXMuYW1hcmlsbG8gPSBmYWxzZTtcclxuICAgICAgdGhpcy52ZXJkZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvam8gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHRoaXMuZmFJY29uID0gZmFUcmlhbmdsZUV4Y2xhbWF0aW9uO1xyXG4gICAgICB0aGlzLmFtYXJpbGxvID0gdHJ1ZTtcclxuICAgICAgdGhpcy52ZXJkZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJvam8gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cInsnaWNvbi1ub3RpZmljYXRpb24nOnRydWUsICd2ZXJkZSc6IHZlcmRlLCAncm9qbyc6IHJvam8sICdhbWFyaWxsbyc6IGFtYXJpbGxvfVwiPlxyXG4gICAgPGZhLWljb24gW2ljb25dPVwiZmFJY29uXCI+PC9mYS1pY29uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+e3ttZXNzYWdlfX08L2Rpdj5cclxuPC9kaXY+Il19