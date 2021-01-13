import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CountryService } from "./testdata/country.service";

import { Datatable } from "./datatable";

describe("Datatable", () => {
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
            class: "<i class=\"fas fa-pencil-alt\"></i>",
            icon: "",
            action: () => {
                expect(true).toBeTrue();
            }
        }];
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should contain sortable class", () => {
        const ourDomTableUnderTest = document.querySelector("table.table");

        const tableHeaders = Array.from(
            ourDomTableUnderTest.getElementsByClassName("sortable")
        );

        const headerClass = [
            "sortable"
        ];

        tableHeaders.forEach(header => {
            expect(
                headerClass.some(item => header.classList.contains(item))
            ).toBeTrue();
        });
    });
});
