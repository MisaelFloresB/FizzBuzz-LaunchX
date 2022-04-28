const ExplorerService = require('./../../lib/services/ExplorerService');

describe("Unit test for ExplorerService, filterByMission", () =>{
    test("Test for requirement 1", () =>{
        const explorers = [{
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
        }];

        const explorersInNode = ExplorerService.filterByMission(explorers, "node");

        expect(explorersInNode).toEqual(explorers);
    });

    test("Unit test for ExplorerService, getAmountOfExplorersByMission", () =>{

        const explorers = [{name: "Woopa14", mission:"node"}]

        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1)

    })

});