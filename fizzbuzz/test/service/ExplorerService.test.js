const ExplorerService = require('./../../lib/services/ExplorerService');

describe("Unit test for ExplorerService", () =>{
    test("Test for requirement 1", () =>{
        const explorers = [{
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
        }];

        const explorersInNode = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNode.length).toBe(1);
    });

});