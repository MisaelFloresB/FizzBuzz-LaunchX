const ExplorerService = require("./../../lib/services/ExplorerService");

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

        const explorers = [{name: "Woopa14", mission:"node"}];

        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);

    });

    test("Unit tesr for ExplorerService, getExplorersUsernamesByMission", () =>{

        const explorers = [{
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
        }];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNode[0]).toBe("ajolonauta15");

    });

    test("Unit tesr for ExplorerService, getExplorersByStack", () =>{

        const explorers = [{
            name: "Woopa15",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: ["javascript","groovy","elm"]
        },
        {
            name: "Woopa14",
            githubUsername: "ajolonauta15",
            score: 15,
            mission: "node",
            stacks: ["javascript","groovy","elm"]
        }];
        const explorersInStack= ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersInStack).toEqual(expect.objectContaining(explorers));

    });
    

});