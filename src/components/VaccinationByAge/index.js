import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div
      style={{
        width: '100%',
        background: '#1c1c2b',
        padding: '20px',
        marginTop: '15px',
      }}
    >
      <h1 className="chart-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={400}>
        <Pie
          data={vaccinationByAgeDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="60%"
          dataKey="count"
          nameKey="age"
        >
          <Cell name="18-40" fill="#2d87bb" />
          <Cell name="40-60" fill="#a3df9f" />
          <Cell name="60-above" fill="#2cc6c6" />
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

export default VaccinationByAge
