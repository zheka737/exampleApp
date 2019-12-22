import { TestBed, ComponentFixture, async, fakeAsync, tick } from "@angular/core/testing"
import { FirstComponent } from "src/app/ondemand/first.component"
import { Product } from "src/app/model/product.model";
import { Model } from "src/app/model/repository.model";
import { DebugElement, Component, ViewChild, Injectable } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { RestDataSource } from "src/app/model/rest.datasourse";
import { PaAttrDirective } from "src/app/ondemand/attr.directive";

@Component({
    template: `<div><span [pa-attr]="className">Test Content</span></div>`
})
class TestComponent {
    className = "initialClass"

    @ViewChild(PaAttrDirective)
    attrDirective: PaAttrDirective;
}

describe("PaAttrDirective", () => {
    let fixture: ComponentFixture<TestComponent>;
    let directive: PaAttrDirective;
    let spanElement: HTMLSpanElement;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, PaAttrDirective],
        });
        fixture = TestBed.createComponent(TestComponent);
        directive = fixture.componentInstance.attrDirective;
        spanElement = fixture.debugElement.query(By.css("span")).nativeElement;
    });

    it("generates the correct number of elements", () => {
        fixture.detectChanges();
        expect(directive.bgClass).toBe("initialClass");
        expect(spanElement.className).toBe("initialClass");
        fixture.componentInstance.className = "nextClass";
        fixture.detectChanges();
        expect(directive.bgClass).toBe("nextClass");
        expect(spanElement.className).toBe("nextClass");
    });
});
