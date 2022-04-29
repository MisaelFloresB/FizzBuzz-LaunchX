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
});