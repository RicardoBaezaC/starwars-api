import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import { useEffect, useState } from "react";

const People = () => {

    const [data, setData] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [previousUrl, setPreviousUrl] = useState(null)
    const [loading, setLoading] = useState(true)


    const getData = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        return data
    }

    useEffect(() => {
        getData('https://swapi.dev/api/people/').then(people => {
            setData(people.results)
            setNextUrl(people.next)
            setPreviousUrl(people.previous)
        })
        .catch(
            err => console.log(err)
        )
        .finally(() => setLoading(false))
    }, [])

    const handleNextClick = () => {
        setData([])
        getData(nextUrl).then(people => {
            setData(people.results)
            setNextUrl(people.next)
            setPreviousUrl(people.previous)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    const handlePreviousClick = () => {
        setData([])
        getData(previousUrl).then(people => {
            setData(people.results)
            setNextUrl(people.next)
            setPreviousUrl(people.previous)
            setLoading(false)
        }).catch(err => console.log(err)).finally(() => setLoading(false))
    }

    return (
        <div className="people">
            <Navbar />
            {loading &&
                <div className="loading-screen-active">
                    <span className="loading-circle"></span>
                    <h1>Loading</h1>
                </div>
            }
            <div className="people-container">
                <h1 className="people-title">Characters</h1>
                <div className="people-controls">
                    <button className={previousUrl === null ? "people-button disabled" : "people-button"} onClick={handlePreviousClick} disabled={previousUrl === null}>{"⬅︎"}</button>
                    <div className="people-card-container">
                        {data.length !== 0 ? data.map((person, index) => (<Card key={index} person={person} />)) : Array(10).fill().map((index) => <CardSkeleton key={index}/>)}
                    </div>
                    <button className={nextUrl === null ? "people-button disabled" : "people-button"} onClick={handleNextClick} disabled={nextUrl === null}>{"➡︎"}</button>
                </div>
            </div>
        </div>
    )
}

export default People