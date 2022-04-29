const ExplorerController = require("./../../lib/controllers/ExplorerController");
// const Reader = require("./../../lib/utils/Reader");

describe("Unit test for ExplorerController, getExplorersByMission", () =>{
    test("Test for requirement 1", () =>{
        // const explorers = Reader.ReadJsonFile("data/explorers.json");

        const explorersInNode = ExplorerController.getExplorersByMission("node");

        expect(explorersInNode.length).toEqual(10);
    });
});