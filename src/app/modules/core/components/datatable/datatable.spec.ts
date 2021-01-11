/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryService } from './testdata/country.service';

import { Datatable } from './datatable';

describe('Datatable', () => {
    let component: Datatable;
    let fixture: ComponentFixture<Datatable>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Datatable]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Datatable);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.service = new CountryService();
        component.actions = [{
            id: "editButton",
            name: "edit",
            action: () => {
                expect(true).toBeTrue();
            }
        }];
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test button', () => {

        fixture.debugElement.nativeElement.querySelector("#editButton").click();
    })
});
*/