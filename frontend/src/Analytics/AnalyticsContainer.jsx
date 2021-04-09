import React, { useEffect, useState } from 'react'
import Form from './Form'
import ResultsTable from './ResultsTable'
import LineGraph from './LineGraph'
import TabMenu from './TabMenu'

export default function AnalyticsContainer() {
    const [data, setData] = useState(null)
    const [error, setError] = useState({ isError: false, errorMessage: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [currTab, setCurrTab] = useState("table");

    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="main-container">
            <div>
                <Form setData={setData} setError={setError} setIsLoading={setIsLoading} />
                <hr />
            </div>
            {isLoading ? <div>Working...</div> : null}

            {data ?
                <div>
                    <TabMenu setCurrTab={setCurrTab}/>
                    <br/>
                    {currTab === "table" ? <ResultsTable data={data} /> : null}
                    {currTab === "line" ? <LineGraph data={data} /> : null}
                </div>
                : null}
            {error?.isError ?
                <div>{error?.errorMessage}</div>
                : null}
        </div>
    )
}
