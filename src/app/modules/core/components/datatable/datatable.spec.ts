import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CountryService } from "./testdata/country.service";
import { DatatableComponent } from "./datatable.component";
import { NgbdSortableHeaderDirective } from "../../directives/sortable.directive";
import { DecimalPipe } from "@angular/common";


describe("Datatable", () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NgbdSortableHeaderDirective,
        DatatableComponent
      ],
      providers: [
        DecimalPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;

    component.service = new CountryService();

    component.show = [
      {
        key: "name",
        text: "Naam"
      }
    ];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain sortable class", () => {
    const ourDomTableUnderTest = document.querySelector("table.table");

    const tableHeaders = Array.from(
      ourDomTableUnderTest.getElementsByClassName("sortable")
    );

    tableHeaders.forEach(header => {
      expect(["sortable"].some(item => header.classList.contains(item))).toBeTrue();
    });
  });
});
