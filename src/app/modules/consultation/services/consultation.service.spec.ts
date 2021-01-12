import { TestBed } from "@angular/core/testing";
import { ConsultationService } from "./consultation.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../../core/core.module";


const mockData = [
  {
    Id: "1",
    Doctor: { /* not required in this test... */ },
    Patient: { /* not required in this test... */ },
    Date: new Date()
  }
];

const date = new Date();
const mockEntity = {
  Id: "1",
  CreatedAt: date,
  CreatedBy: null,
  Date: date,
  DeletedAt: date,
  DeletedBy: null,
  Doctor: null,
  Patient: null,
  UpdatedAt: date,
  UpdatedBy: null
};


describe("ConsultationService (GenericHttpService)", () => {
  let service: ConsultationService;
  let http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        HttpClient,
        StorageService
      ]
    });

    service = TestBed.inject(ConsultationService);
    http = TestBed.inject(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return correct basePath", () => {
    expect(service.basePath).toBe(`${environment.apiUrl}/consultation`);
  });

  it("should return all consultations", () => {
    service.GetAll().subscribe(consultations => {
      expect(consultations.length).toBeGreaterThanOrEqual(1);
    });

    const request = http.expectOne(req => req.method === "GET" && req.url === `${environment.apiUrl}/consultation`);
    request.flush(mockData);
  });

  it("should create a consultation", () => {

    service.Add(mockEntity).subscribe(result => {
      expect(result).toBeTruthy();
    });

    const request = http.expectOne(req => req.method === "POST" && req.url === `${environment.apiUrl}/consultation`);
    request.flush(true);
  });

  it("should edit consultation with ID 1", () => {
    service.Update(1, mockEntity).subscribe(result => {
      expect(result).toBeGreaterThanOrEqual(1);
    });

    const request = http.expectOne(req => req.method === "PUT" && req.url === `${environment.apiUrl}/consultation/1`);
    request.flush(true);
  });

  it("should return the consultation with ID 1", () => {
    service.Get("1").subscribe(consultation => {
      expect(consultation.Id).toBe("1");
    });

    const request = http.expectOne(req => req.method === "GET" && req.url === `${environment.apiUrl}/consultation/1`);
    request.flush(mockEntity);
  });

  it("should delete the consultation with ID 1", () => {
    service.Delete("1").subscribe(result => {
      expect(result).toBeTruthy();
    });

    const request = http.expectOne(req => req.method === "DELETE" && req.url === `${environment.apiUrl}/consultation/1`);
    request.flush(true);
  });
});
