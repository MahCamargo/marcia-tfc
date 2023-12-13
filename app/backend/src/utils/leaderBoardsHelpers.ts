export interface Teams {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

class leaderBoardHelpers {
  private name: string;
  private totalPoints: number;
  private totalGames: number;
  private totalVictories: number;
  private totalDraws: number;
  private totalLosses: number;
  private goalsFavor: number;
  private goalsOwn: number;
  private efficiency: number;
  private goalsBalance: number;

  constructor() {
    this.name = '';
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.efficiency = 0;
    this.goalsBalance = 0;
  }

  private leaderBoardPoints(goalsTimeOne: number, goalsTimeTwo:number) {
    this.goalsFavor += goalsTimeOne;
    this.goalsOwn += goalsTimeTwo;
    if (goalsTimeOne > goalsTimeTwo) {
      this.totalVictories += 1;
      this.totalPoints += 3;
    }
    if (goalsTimeOne === goalsTimeTwo) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
    if (goalsTimeOne < goalsTimeTwo) {
      this.totalLosses += 1;
    }
  }

  public leaderBord() {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      efficiency: Number(this.efficiency.toFixed(2)),
      goalsBalance: this.goalsBalance,
    };
  }

  private setEfficiency(): void {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private setGoalBalance(): void {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public leaderBoardReturns(homeAway: string, name: string, times: Teams[]) {
    this.name = name;

    times.forEach((time) => {
      const { homeTeamGoals, awayTeamGoals } = time;

      this.totalGames += 1;
      if (homeAway === 'home') {
        return this.leaderBoardPoints(homeTeamGoals, awayTeamGoals);
      }

      this.leaderBoardPoints(awayTeamGoals, homeTeamGoals);
    });

    this.setEfficiency();
    this.setGoalBalance();
    return this.leaderBord();
  }
}

export default leaderBoardHelpers;
