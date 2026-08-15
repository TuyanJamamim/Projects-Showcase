// this needs to ve connected with app.jsx file
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
    {
      "student_id": 1,
      "name": "Alice",
      "physics": 85,
      "chemistry": 90,
      "math": 88
    },
    {
      "student_id": 2,
      "name": "Bob",
      "physics": 92,
      "chemistry": 85,
      "math": 91
    },
    {
      "student_id": 3,
      "name": "Charlie",
      "physics": 78,
      "chemistry": 82,
      "math": 80
    },
    {
      "student_id": 4,
      "name": "David",
      "physics": 88,
      "chemistry": 86,
      "math": 92
    },
    {
      "student_id": 5,
      "name": "Eva",
      "physics": 95,
      "chemistry": 91,
      "math": 93
    },
    {
      "student_id": 6,
      "name": "Frank",
      "physics": 80,
      "chemistry": 78,
      "math": 85
    },
    {
      "student_id": 7,
      "name": "Grace",
      "physics": 91,
      "chemistry": 94,
      "math": 90
    },
    {
      "student_id": 8,
      "name": "Hank",
      "physics": 70,
      "chemistry": 72,
      "math": 75
    },
    {
      "student_id": 9,
      "name": "Ivy",
      "physics": 77,
      "chemistry": 80,
      "math": 78
    },
    {
      "student_id": 10,
      "name": "Jack",
      "physics": 89,
      "chemistry": 87,
      "math": 90
    }
  ]
  
const ResultCahrt = () => {
    return (
        <div>
            <LineChart width={700} height={500} data={resultData}>
                {/* here height,width,data(from which variavle we want to get data) are vy default LineChart properties means to use lineChart component these properties need to ve set */}

                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>

               <Line dataKey="math"></Line>
               <Line dataKey="chemistry" stroke='red'></Line>
               {/* datakey is on which property we want to get the graph..stroke means in which color we want the graph  */}
            </LineChart>
            {/* this LineCahrt,Line(inside LineCahrt), xAxis(gives x-axis) are a rechart component */}
        </div>
    );
};

export default ResultCahrt;