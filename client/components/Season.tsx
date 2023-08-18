import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { seasonContestantsAndEpisodes } from '../apis/apis'
import { seasonData } from '../../models/seasons'

function Season() {
  const { id } = useParams()

  const [dataList, setDataList] = useState<seasonData>()

  useEffect(() => {
    console.log(id)
    if (id) {
      seasonContestantsAndEpisodes(id as string)
        .then((returnedData) => {
          setDataList(returnedData)
        })
        .catch(() => {
          alert('sorry no data for this season')
        })
    }
  }, [id])

  return (
    <>
      <header className="header">
        <h1 className="title">Season {id}</h1>
      </header>
      <section className="main">
        <h2 className="subtitle">Contestants</h2>
        <div className="columns">
          {dataList ? (
            <>
              {dataList.contestants.map((contestant) => (
                <div className="column" key={contestant.id}>
                  <img src={contestant.image} alt="" />
                  <p>{contestant.name}</p>
                  <p>{contestant.final_score}</p>
                </div>
              ))}
            </>
          ) : (
            <Link to="/">
              Sorry, something is wrong. Click here to go back to goodness.
            </Link>
          )}
        </div>
        <h2 className="subtitle">Episodes</h2>
        <div className="columns is-multiline">
          {dataList ? (
            <>
              {dataList.episodes.map((episode) => (
                <div className="column is-one-third" key={episode.id}>
                  <img
                    src={episode.image}
                    alt="contestant headshot from Season"
                  />
                  <p>{episode.id}</p>
                  <p>{episode.title}</p>
                </div>
              ))}
            </>
          ) : (
            <Link to="/">
              Sorry, something is wrong. Click here to go back to goodness.
            </Link>
          )}
        </div>
      </section>
    </>
  )
}

export default Season
