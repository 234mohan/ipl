// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchDetails: {},
  }

  componentDidMount() {
    this.getProduct()
  }

  getData = datas => ({
    competingTeam: datas.competing_team,
    competingTeamLogo: datas.competing_team_logo,
    date: datas.date,
    firstInnings: datas.first_innings,
    id: datas.id,
    manOfTheMatch: datas.man_of_the_match,
    matchStatus: datas.match_status,
    result: datas.result,
    secondInnings: datas.second_innings,
    umpires: datas.umpires,
    venue: datas.venue,
  })

  getDataOfMatch = type => ({
    competingTeam: type.competing_team,
    competingTeamLogo: type.competing_team_logo,
    date: type.date,
    firstInnings: type.first_innings,
    id: type.id,
    manOfTheMatch: type.man_of_the_match,
    matchStatus: type.match_status,
    result: type.result,
    secondInnings: type.second_innings,
    umpires: type.umpires,
    venue: type.venue,
  })

  getProduct = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    console.log(response.ok)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getDataOfMatch(eachMatch),
      ),
    }
    this.setState({teamMatchDetails: updatedData})
  }

  render() {
    const {teamMatchDetails} = this.state
    const {latestMatchDetails, teamBannerUrl} = teamMatchDetails
    return (
      <div className="container2">
        <img src={teamBannerUrl} alt="match" className="imageurl" />
        <LatestMatch latestMatch={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
