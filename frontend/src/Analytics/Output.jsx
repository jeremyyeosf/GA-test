import React, { useEffect } from 'react'

export default function Output({ data }) {

    // useEffect(() => {
    //     console.log('data', data)
    // }, [data])

    function dataKey() {
        if (data) {
            return Object.keys(data)
        } else {
            return null
        }
    }

    function dataValue() {
        if (data) {
            return Object.values(data)
        } else {
            return null
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {/* <th>Month/Year</th> */}
                        <th>{dataKey()}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>Jan/2021</td> */}
                        <td>{dataValue()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
