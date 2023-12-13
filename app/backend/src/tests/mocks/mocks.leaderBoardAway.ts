const leaderBoardAwayReturn = [
  {
    "name": "Palmeiras",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 7,
    "goalsOwn": 0,
    "efficiency": 100,
    "goalsBalance": 7
  },
  {
    "name": "Corinthians",
    "totalPoints": 6,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 6,
    "goalsOwn": 2,
    "efficiency": 66.67,
    "goalsBalance": 4
  },
  {
    "name": "Internacional",
    "totalPoints": 6,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 4,
    "goalsOwn": 2,
    "efficiency": 66.67,
    "goalsBalance": 2
  },
  {
    "name": "São José-SP",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 3,
    "goalsOwn": 1,
    "efficiency": 100,
    "goalsBalance": 2
  },
  {
    "name": "São Paulo",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 5,
    "goalsOwn": 5,
    "efficiency": 44.44,
    "goalsBalance": 0
  },
  {
    "name": "Ferroviária",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 4,
    "goalsOwn": 5,
    "efficiency": 44.44,
    "goalsBalance": -1
  },
  {
    "name": "Real Brasília",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 3,
    "goalsOwn": 4,
    "efficiency": 44.44,
    "goalsBalance": -1
  },
  {
    "name": "Grêmio",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 5,
    "goalsOwn": 7,
    "efficiency": 44.44,
    "goalsBalance": -2
  },
  {
    "name": "Flamengo",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 3,
    "efficiency": 44.44,
    "goalsBalance": -2
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 3,
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 1,
    "efficiency": 50,
    "goalsBalance": 0
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 3,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 2,
    "goalsFavor": 6,
    "goalsOwn": 7,
    "efficiency": 33.33,
    "goalsBalance": -1
  },
  {
    "name": "Santos",
    "totalPoints": 2,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 3,
    "goalsOwn": 3,
    "efficiency": 33.33,
    "goalsBalance": 0
  },
  {
    "name": "Bahia",
    "totalPoints": 2,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 2,
    "goalsOwn": 2,
    "efficiency": 33.33,
    "goalsBalance": 0
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 1,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 3,
    "efficiency": 16.67,
    "goalsBalance": -2
  },
  {
    "name": "Botafogo",
    "totalPoints": 0,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 2,
    "goalsFavor": 1,
    "goalsOwn": 4,
    "efficiency": 0,
    "goalsBalance": -3
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 0,
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 1,
    "goalsOwn": 10,
    "efficiency": 0,
    "goalsBalance": -9
  }
]

const mocksLeaderBoardAway = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann",
    "awayTeam": [
      {
        "id": 8,
        "homeTeamId": 15,
        "homeTeamGoals": 0,
        "awayTeamId": 1,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 26,
        "homeTeamId": 13,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 42,
        "homeTeamId": 6,
        "homeTeamGoals": 1,
        "awayTeamId": 1,
        "awayTeamGoals": 0,
        "inProgress": true
      }
    ]
  },
  {
    "id": 2,
    "teamName": "Bahia",
    "awayTeam": [
      {
        "id": 4,
        "homeTeamId": 3,
        "homeTeamGoals": 0,
        "awayTeamId": 2,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 19,
        "homeTeamId": 11,
        "homeTeamGoals": 2,
        "awayTeamId": 2,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 48,
        "homeTeamId": 13,
        "homeTeamGoals": 1,
        "awayTeamId": 2,
        "awayTeamGoals": 1,
        "inProgress": true
      }
    ]
  },
  {
    "id": 3,
    "teamName": "Botafogo",
    "awayTeam": [
      {
        "id": 11,
        "homeTeamId": 13,
        "homeTeamGoals": 1,
        "awayTeamId": 3,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 22,
        "homeTeamId": 4,
        "homeTeamGoals": 3,
        "awayTeamId": 3,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 45,
        "homeTeamId": 5,
        "homeTeamGoals": 1,
        "awayTeamId": 3,
        "awayTeamGoals": 1,
        "inProgress": true
      }
    ]
  },
  {
    "id": 4,
    "teamName": "Corinthians",
    "awayTeam": [
      {
        "id": 12,
        "homeTeamId": 6,
        "homeTeamGoals": 0,
        "awayTeamId": 4,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 29,
        "homeTeamId": 9,
        "homeTeamGoals": 0,
        "awayTeamId": 4,
        "awayTeamGoals": 4,
        "inProgress": false
      },
      {
        "id": 38,
        "homeTeamId": 14,
        "homeTeamGoals": 2,
        "awayTeamId": 4,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 5,
    "teamName": "Cruzeiro",
    "awayTeam": [
      {
        "id": 13,
        "homeTeamId": 8,
        "homeTeamGoals": 2,
        "awayTeamId": 5,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 18,
        "homeTeamId": 12,
        "homeTeamGoals": 4,
        "awayTeamId": 5,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 35,
        "homeTeamId": 10,
        "homeTeamGoals": 1,
        "awayTeamId": 5,
        "awayTeamGoals": 3,
        "inProgress": false
      }
    ]
  },
  {
    "id": 6,
    "teamName": "Ferroviária",
    "awayTeam": [
      {
        "id": 7,
        "homeTeamId": 12,
        "homeTeamGoals": 2,
        "awayTeamId": 6,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 25,
        "homeTeamId": 2,
        "homeTeamGoals": 0,
        "awayTeamId": 6,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 34,
        "homeTeamId": 9,
        "homeTeamGoals": 3,
        "awayTeamId": 6,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 7,
    "teamName": "Flamengo",
    "awayTeam": [
      {
        "id": 16,
        "homeTeamId": 11,
        "homeTeamGoals": 0,
        "awayTeamId": 7,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 28,
        "homeTeamId": 16,
        "homeTeamGoals": 3,
        "awayTeamId": 7,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 36,
        "homeTeamId": 2,
        "homeTeamGoals": 0,
        "awayTeamId": 7,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 8,
    "teamName": "Grêmio",
    "awayTeam": [
      {
        "id": 1,
        "homeTeamId": 16,
        "homeTeamGoals": 1,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 17,
        "homeTeamId": 1,
        "homeTeamGoals": 2,
        "awayTeamId": 8,
        "awayTeamGoals": 3,
        "inProgress": false
      },
      {
        "id": 40,
        "homeTeamId": 12,
        "homeTeamGoals": 4,
        "awayTeamId": 8,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 9,
    "teamName": "Internacional",
    "awayTeam": [
      {
        "id": 10,
        "homeTeamId": 2,
        "homeTeamGoals": 0,
        "awayTeamId": 9,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 20,
        "homeTeamId": 7,
        "homeTeamGoals": 0,
        "awayTeamId": 9,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 41,
        "homeTeamId": 16,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 0,
        "inProgress": true
      },
      {
        "id": 49,
        "homeTeamId": 4,
        "homeTeamGoals": 2,
        "awayTeamId": 9,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 10,
    "teamName": "Minas Brasília",
    "awayTeam": [
      {
        "id": 5,
        "homeTeamId": 7,
        "homeTeamGoals": 1,
        "awayTeamId": 10,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 31,
        "homeTeamId": 8,
        "homeTeamGoals": 2,
        "awayTeamId": 10,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 43,
        "homeTeamId": 11,
        "homeTeamGoals": 0,
        "awayTeamId": 10,
        "awayTeamGoals": 0,
        "inProgress": true
      }
    ]
  },
  {
    "id": 11,
    "teamName": "Napoli-SC",
    "awayTeam": [
      {
        "id": 3,
        "homeTeamId": 4,
        "homeTeamGoals": 3,
        "awayTeamId": 11,
        "awayTeamGoals": 0,
        "inProgress": false
      },
      {
        "id": 32,
        "homeTeamId": 14,
        "homeTeamGoals": 5,
        "awayTeamId": 11,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 39,
        "homeTeamId": 3,
        "homeTeamGoals": 2,
        "awayTeamId": 11,
        "awayTeamGoals": 0,
        "inProgress": false
      }
    ]
  },
  {
    "id": 12,
    "teamName": "Palmeiras",
    "awayTeam": [
      {
        "id": 9,
        "homeTeamId": 1,
        "homeTeamGoals": 0,
        "awayTeamId": 12,
        "awayTeamGoals": 3,
        "inProgress": false
      },
      {
        "id": 30,
        "homeTeamId": 3,
        "homeTeamGoals": 0,
        "awayTeamId": 12,
        "awayTeamGoals": 4,
        "inProgress": false
      },
      {
        "id": 46,
        "homeTeamId": 4,
        "homeTeamGoals": 1,
        "awayTeamId": 12,
        "awayTeamGoals": 1,
        "inProgress": true
      }
    ]
  },
  {
    "id": 13,
    "teamName": "Real Brasília",
    "awayTeam": [
      {
        "id": 6,
        "homeTeamId": 5,
        "homeTeamGoals": 1,
        "awayTeamId": 13,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 21,
        "homeTeamId": 6,
        "homeTeamGoals": 3,
        "awayTeamId": 13,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 37,
        "homeTeamId": 15,
        "homeTeamGoals": 0,
        "awayTeamId": 13,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  },
  {
    "id": 14,
    "teamName": "Santos",
    "awayTeam": [
      {
        "id": 2,
        "homeTeamId": 9,
        "homeTeamGoals": 1,
        "awayTeamId": 14,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 24,
        "homeTeamId": 10,
        "homeTeamGoals": 2,
        "awayTeamId": 14,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 47,
        "homeTeamId": 8,
        "homeTeamGoals": 1,
        "awayTeamId": 14,
        "awayTeamGoals": 2,
        "inProgress": true
      }
    ]
  },
  {
    "id": 15,
    "teamName": "São José-SP",
    "awayTeam": [
      {
        "id": 15,
        "homeTeamId": 10,
        "homeTeamGoals": 0,
        "awayTeamId": 15,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 27,
        "homeTeamId": 5,
        "homeTeamGoals": 1,
        "awayTeamId": 15,
        "awayTeamGoals": 2,
        "inProgress": false
      },
      {
        "id": 44,
        "homeTeamId": 7,
        "homeTeamGoals": 2,
        "awayTeamId": 15,
        "awayTeamGoals": 2,
        "inProgress": true
      }
    ]
  },
  {
    "id": 16,
    "teamName": "São Paulo",
    "awayTeam": [
      {
        "id": 14,
        "homeTeamId": 14,
        "homeTeamGoals": 2,
        "awayTeamId": 16,
        "awayTeamGoals": 1,
        "inProgress": false
      },
      {
        "id": 23,
        "homeTeamId": 15,
        "homeTeamGoals": 2,
        "awayTeamId": 16,
        "awayTeamGoals": 3,
        "inProgress": false
      },
      {
        "id": 33,
        "homeTeamId": 1,
        "homeTeamGoals": 1,
        "awayTeamId": 16,
        "awayTeamGoals": 1,
        "inProgress": false
      }
    ]
  }
]

export default { mocksLeaderBoardAway, leaderBoardAwayReturn};