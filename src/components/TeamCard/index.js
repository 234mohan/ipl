// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachDetails} = props
  const {id, teamImageUrl, name} = eachDetails

  return (
    <li className="list">
      <Link to={`/team-matches/${id}`}>
        <div className="container">
          <img src={teamImageUrl} alt={name} className="imageu" />
          <h1 className="heading"> {name}</h1>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
