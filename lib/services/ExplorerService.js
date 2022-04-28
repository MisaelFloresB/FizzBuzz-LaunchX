const Reader = require('./../utils/Reader')

class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersByMision = explorers.filter((explorer) => explorer.mission === "node")
        return explorersByMision
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountOfExplorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return amountOfExplorersByMission.length


    }

    static getExplorersUsernamesByMission(explores, mission){
        const explorersUsernameByMission = explores.filter((explorer) => explorer.mission === mission);
        const explorersUsername = explorersUsernameByMission.map((explorer) => explorer.githubUsername);

        return explorersUsername[0]

    }
}

module.exports = ExplorerService