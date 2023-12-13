const allMatches = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    // homeTeam: {
    //   teamName: "São Paulo"
    // },
    // awayTeam: {
    //   teamName: "Grêmio"
    // }
  },
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    // homeTeam: {
    //   teamName: "São Paulo"
    // },
    // awayTeam: {
    //   teamName: "Internacional"
    // }
  }
];

const matchesInProgress = [
  {
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
  }
];

const mockMatchById = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: true,
};

const mockMatchCreate = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
  inProgress: true,
};

const mockMatchCreateError = {
  homeTeamId: 8,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
};

const mockMatchCreateErrorMessage = { message: 'It is not possible to create a match with two equal teams' }


const mockMatchCreateErrorIdMessage = { message: 'There is no team with such id!' }

const mockMatchCreateErrorId = {
  homeTeamId: 568056,
  homeTeamGoals: 1,
  awayTeamId: 8,
  awayTeamGoals: 1,
};

const validToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjk1MzI5NDY5LCJleHAiOjE2OTU5MzQyNjl9.tuJ-RieuClAGxNQPVfrDxjdHIp0Y73JZbYZNUatgOI0';

const payload = {
  id: 1,
  role: "admin",
  email: "validEmail@gmail.com",
  username: "validUsername"
}

export default { allMatches, 
  matchesInProgress,
  mockMatchById, 
  validToken, 
  payload, 
  mockMatchCreate, 
  mockMatchCreateError, 
  mockMatchCreateErrorMessage,
  mockMatchCreateErrorId,
  mockMatchCreateErrorIdMessage
}