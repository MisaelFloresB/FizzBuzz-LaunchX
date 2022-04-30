const Reader = require("./../utils/Reader");

class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMision = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMision;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return amountOfExplorersByMission.length;


    }

    static getExplorersUsernamesByMission(explores, mission){
        const explorersUsernameByMission = explores.filter((explorer) => explorer.mission === mission);
        const explorersUsername = explorersUsernameByMission.map((explorer) => explorer.githubUsername);

        return explorersUsername;
    }

    static getExplorersByStack(explorers, stack){
        const explorersByStack = explorers.filter((explorer) => explorer.stacks[0] === stack);
        return explorersByStack;
    

    }
}

module.exports = ExplorerService;