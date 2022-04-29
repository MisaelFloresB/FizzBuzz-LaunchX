const FizzBuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit test for FizzBuzzService, applyValidationInExplorer", () =>{
    test("Test for requirement FIZZ", () =>{
        const explorer1 = {name: "Woopa1", score: 6};

        const explorersFizzbuzz = FizzBuzzService.applyValidationInExplorer(explorer1);

        expect(explorersFizzbuzz.trick).toEqual("FIZZ");
    });

    test("Test for requirement BUZZ", () =>{
        const explorer2 = {name: "Woopa1", score: 5};
    
        const explorersFizzbuzz = FizzBuzzService.applyValidationInExplorer(explorer2);
    
        expect(explorersFizzbuzz.trick).toEqual("BUZZ");
    });

    test("Test for requirement FIZZBUZZ", () =>{
        const explorer3 = {name: "Woopa1", score: 15};
    
        const explorersFizzbuzz = FizzBuzzService.applyValidationInExplorer(explorer3);
    
        expect(explorersFizzbuzz.trick).toEqual("FIZZBUZZ");
    });

    test("Test for requirement BUZZ, applyValidationInNumber", () =>{
        const number = 15;
    
        const numberSended = FizzBuzzService.applyValidationInNumber(number);
    
        expect(numberSended).toEqual("FIZZBUZZ");
    });

    test("Test for requirement BUZZ, applyValidationInNumber", () =>{
        const number = 5;
    
        const numberSended = FizzBuzzService.applyValidationInNumber(number);
    
        expect(numberSended).toEqual("BUZZ");
    });

    test("Test for requirement FIZZ, applyValidationInNumber", () =>{
        const number = 6;
    
        const numberSended = FizzBuzzService.applyValidationInNumber(number);
    
        expect(numberSended).toEqual("FIZZ");
    });
});