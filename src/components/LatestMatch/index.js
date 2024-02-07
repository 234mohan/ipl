// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    id,
    manOfTheMatch,
    manStatus,
    result,
    umpires,
    venue,
  } = latestMatch

  return (
    <div>
      <h1> {competingTeam} </h1>
    </div>
  )
}

export default LatestMatch
