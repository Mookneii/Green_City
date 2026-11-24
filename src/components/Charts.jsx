import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export function WeeklyAreaChart({ data }) {
  return <ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{top:8,right:6,left:-28,bottom:0}}><defs><linearGradient id="chartGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#54a878" stopOpacity={.22}/><stop offset="96%" stopColor="#54a878" stopOpacity={0}/></linearGradient></defs><CartesianGrid vertical={false} stroke="#edf0ec"/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#9aa49e',fontSize:11}}/><YAxis hide/><Tooltip formatter={v=>[`${v} kg`,'Recycled']} contentStyle={{border:'1px solid #e7ebe6',borderRadius:8,fontSize:12}}/><Area type="monotone" dataKey="kg" stroke="#24834f" strokeWidth={2.4} fill="url(#chartGreen)"/></AreaChart></ResponsiveContainer>
}

export function AdminAreaChart({ data }) {
  return <ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{top:10,right:10,left:-28,bottom:0}}><defs><linearGradient id="adminGreen" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9567" stopOpacity={.18}/><stop offset="95%" stopColor="#4a9567" stopOpacity={0}/></linearGradient></defs><CartesianGrid vertical={false} stroke="#edf0ec"/><XAxis dataKey="d" axisLine={false} tickLine={false} tick={{fill:'#89958d',fontSize:11}}/><YAxis hide/><Tooltip/><Area dataKey="v" type="monotone" stroke="#287b4b" fill="url(#adminGreen)" strokeWidth={2.5}/></AreaChart></ResponsiveContainer>
}

export function ImpactBarChart({ data }) {
  return <ResponsiveContainer width="100%" height="100%"><BarChart data={data} margin={{top:16,right:8,left:-25,bottom:0}}><CartesianGrid vertical={false} stroke="#edf0ec"/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#919b94',fontSize:11}}/><YAxis hide/><Tooltip formatter={v=>[`${v} kg`,'Plastic recycled']} contentStyle={{border:'1px solid #e7ebe6',borderRadius:8,fontSize:12}}/><Bar dataKey="kg" fill="#52956b" radius={[5,5,0,0]} maxBarSize={36}/></BarChart></ResponsiveContainer>
}
