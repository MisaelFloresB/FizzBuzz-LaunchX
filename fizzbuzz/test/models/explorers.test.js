const explorers = require('./../../app/models/app')

describe('Unit test for app', () =>{

    test('Test for quantity of explorers names in node'), () =>{
        const explorers = [{
            "name": "Woopa15",
            "githubUsername": "ajolonauta15",
            "score": 15,
            "mission": "node",
        }]

        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");

        expect(explorersInNode).toBe(10)
    }

})