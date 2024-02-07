// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamList: [],
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getData = datas => ({
    id: datas.id,
    teamImageUrl: datas.team_image_url,
    name: datas.name,
  })

  getMatchDetails = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => this.getData(eachTeam))
    this.setState({
      teamList: updatedData,
    })
  }

  render() {
    const {teamList} = this.state
    return (
      <div className="container-row">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="hea"> IPL Dashbord</h1>
        </div>
        <ul className="lists">
          {teamList.map(eachTeam => (
            <TeamCard eachDetails={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
