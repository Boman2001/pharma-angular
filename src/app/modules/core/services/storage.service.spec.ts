import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";


describe("StorageService", () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should set an item", () => {
    service.SetItem("test", "12345");
    expect(true).toBeTrue(); // If the method throws an exception, the test will fail.
    // expect(service.SetItem("test", "12345")).not.toThrow();
  });

  it("should get an item", () => {
    // @TODO test sequential?
    service.SetItem("test", "12345");
    //
    expect(service.GetItem("test")).toBe("12345");
  });

  it("should remove item", () => {
    service.RemoveItem("test");
    expect(true).toBeTrue(); // If the method throws an exception, the test will fail.
    // expect(service.RemoveItem("test")).not.toThrow();
  });

  it("should set multiple items", () => {
    service.SetItems([
      { key: "test1", value: "12345" },
      { key: "test2", value: "12345" },
      { key: "test3", value: "12345" },
      { key: "test4", value: "12345" },
      { key: "test5", value: "12345" },
      { key: "test6", value: "12345" }
    ]);

    expect(true).toBeTrue(); // If the method throws an exception, the test will fail.
    // expect(
    //   service.SetItems([
    //     { key: "test1", value: "12345" },
    //     { key: "test2", value: "12345" },
    //     { key: "test3", value: "12345" },
    //     { key: "test4", value: "12345" },
    //     { key: "test5", value: "12345" },
    //     { key: "test6", value: "12345" }
    //   ])
    // )
    // .not.toThrow();
  });

  it("should get multiple items", () => {

    // @TODO test sequential?
    service.SetItems([
      { key: "test1", value: "12345" },
      { key: "test2", value: "12345" },
      { key: "test3", value: "12345" },
      { key: "test4", value: "12345" },
      { key: "test5", value: "12345" },
      { key: "test6", value: "12345" }
    ]);
    //

    expect(
      service.GetItems([
        "test1", "test2",
        "test3", "test4",
        "test5", "test6"
      ])
      .length
    )
    .toBe(6);
  });

  it("should clear", () => {
    // @TODO test sequential?
    service.SetItems([
      { key: "test1", value: "12345" },
      { key: "test2", value: "12345" },
      { key: "test3", value: "12345" },
      { key: "test4", value: "12345" },
      { key: "test5", value: "12345" },
      { key: "test6", value: "12345" }
    ]);
    //

    service.Clear();
    expect(localStorage.length).toBe(0);
  });
});
