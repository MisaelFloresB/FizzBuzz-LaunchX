const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test for controller server", () =>{
    test("Unit test for ExplorerController, getExplorersByMission", () =>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");

        expect(explorersInNode.length).toEqual(10);
    });

    test("Unit test for ExplorerController, getExplorersUsernamesByMission", () =>{
        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");

        expect(explorersUsernames).toEqual(expect.arrayContaining(explorersUsernames));
    });

    test("Unit test for ExplorerController, getExplorersAmonutByMission", () =>{
        const explorersUsernames = ExplorerController.getExplorersAmonutByMission("java");

        expect(explorersUsernames).toBe(5);
    });

    test("Unit test for ExplorerController, getClientNumber", () =>{
        const number = "FIZZBUZZ";
        const explorersUsernames = ExplorerController.getClientNumber(number);

        expect(explorersUsernames).toEqual("FIZZBUZZ");
    });
    
    test("Unit test for ExplorerController, getClientNumber", () =>{
        const number = "BUZZ";
        const explorersUsernames = ExplorerController.getClientNumber(number);

        expect(explorersUsernames).toEqual("BUZZ");
    });

    test("Unit test for ExplorerController, getClientNumber", () =>{
        const number = "FIZZ";
        const explorersUsernames = ExplorerController.getClientNumber(number);

        expect(explorersUsernames).toEqual("FIZZ");
    });

    test("Unit test for ExplorerController, getClientNumber", () =>{
        const number = {score:1};
        const explorersUsernames = ExplorerController.getClientNumber(number);

        expect(explorersUsernames.score).toEqual(1);
    });

    test("Unit test for ExplorerController, getExplorerStack", () =>{
        const stack = "elm";
        const explorerStack = ExplorerController.getExplorerStack(stack);
        console.log(explorerStack);

        expect(explorerStack).toEqual(expect.objectContaining(explorerStack));
    });
});