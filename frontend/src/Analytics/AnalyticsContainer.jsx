import React, { useState } from 'react'
import Form from './Form'
import Output from './Output'

export default function AnalyticsContainer() {
    const [data, setData] = useState(null)
    return (
        <div>
            <Form setData={setData}/>
            <Output data={data}/>
        </div>
    )
}
