import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const initialState = {
    labels: [],
    datasets: [
        {
            label: 'PageViews',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: []
        }
    ]
}

export default function LineGraph({ data }) {
    const [lineData, setLineData] = useState(initialState)

    useEffect(() => {
        if (data) {
            function getLabelsArr(data) {
                const labels = []
                for (let i = 0; i < data.resultRows.length; i++) {
                    labels.push(data.resultRows[i].startDate)
                }
                return labels
            }

            function getDataArr(data) {
                const info = []
                for (let i = 0; i < data.resultRows.length; i++) {
                    info.push(data.resultRows[i].pageViews)
                }
                return info
            }

            setLineData({
                labels: getLabelsArr(data),
                datasets: [
                    {
                        label: 'PageViews',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: getDataArr(data)
                    }
                ]
            })
        }
    }, [data])

    return (
        <div>
            <Line
                data={lineData}
                options={{
                    title: {
                        display: true,
                        text: 'Daily Unique PageViews',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );

}