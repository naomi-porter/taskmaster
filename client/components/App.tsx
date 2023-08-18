import { fetchSeasons } from '../apis/apis'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { seasonsObjectsInterface } from '../../models/seasons'

function App() {
  const [seasonsList, setSeasonsList] = useState<seasonsObjectsInterface[]>([])

  // on page load, grab seasons list
  useEffect(() => {
    fetchSeasons()
      .then((returnedSeasons) => {
        setSeasonsList(returnedSeasons)
      })
      .catch(() => {
        alert('sorry no seasons data')
      })
  }, [])

  return (
    <>
      <header className="header">
        <h1 className="title">Taskmaster</h1>
      </header>

      <section className="main">
        <h2 className="subtitle">Seasons</h2>
        <div className="columns">
          {seasonsList.map((season) => (
            <div className="column" key={season.id}>
              <Link to={`/seasons/${season.id}`}>Season {season.id}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
