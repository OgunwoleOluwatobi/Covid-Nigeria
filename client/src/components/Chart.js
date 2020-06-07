import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    state = {
        chartData: this.props.data,
        size: 160
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    height={210}
                    option={{
                        responsive: true,
                        maintainAspectRatio: true,
                        title: {
                            display: true,
                            text: 'Overall Active Cases',
                            fontSize: 30
                        },
                        legend: {
                            display: false,
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;