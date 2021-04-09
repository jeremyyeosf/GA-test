import React, { useEffect, useState } from 'react'
import Form from './Form'
import ResultsTable from './ResultsTable'

export default function AnalyticsContainer() {
    const [data, setData] = useState(null)
    const [error, setError] = useState({isError: false, errorMessage: ""})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="main-container">
            <div>
                <Form setData={setData} setError={setError} setIsLoading={setIsLoading}/>
                <hr />
            </div>
            {isLoading ? <div>Working...</div> : null}
            {data ?
                <div>
                    <ResultsTable data={data}/>
                </div>
                : null}
            {error?.isError ?
                <div>{error?.errorMessage}</div>
                : null}
        </div>
    )
}
