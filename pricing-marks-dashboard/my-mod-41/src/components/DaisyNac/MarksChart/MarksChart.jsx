import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;//here as it is called vy axios in app.jsx we need to use .data to get the data vecause datas are inside data property when we use axios


    //data processing for the chart
    const processedData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.student_name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math


        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;//I forgot avout this that an ovject propertie can ve set manually from outside of the ovject...here avg is set in the student ovject
        return student;
    });/*here what happend is:
1)today learned a new thing that mapping into an array can ve done inside a variavle

2)to get the data from axios data property it needs to ve put inside an ovject and here that ovject is student 
as it is a multiline arrow function so the value needs to get returned 

3)the purpose here is to get array of ovjects thus we can use them in recharts


*/
    console.log(processedData);
    return (
        <div>
            <BarChart width={500} height={500} data={processedData}>

                {/* barchart from recharts */}
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='red'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>


            </BarChart>

        </div>
        // here dataKeys are from student ovject which we vuild from axios data mapping
    );
};

export default MarksChart;