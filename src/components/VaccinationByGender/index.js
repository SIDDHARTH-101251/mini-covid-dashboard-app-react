import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  const data = vaccinationByGenderDetails
  return (
    <div
      style={{
        width: '100%',
        background: '#1c1c2b',
        padding: '20px',
        marginTop: '15px',
      }}
    >
      <h1 className="chart-heading">Vaccination by Gender</h1>
      <PieChart width={1000} height={400}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="middle"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
