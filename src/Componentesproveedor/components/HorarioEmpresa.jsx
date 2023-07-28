import React, { useEffect, useState } from "react";
import '../css/principal.css';

function HorarioEmpresa({horarioEmpresa}){
    
    return (
        <div className='horario-table'>
        <table>
          <thead>
            <tr>
              <th>Día</th>
              <th>0:00</th>
              <th>1:00</th>
              <th>2:00</th>
              <th>3:00</th>
              <th>4:00</th>
              <th>5:00</th>
              <th>6:00</th>
              <th>7:00</th>
              <th>8:00</th>
              <th>9:00</th>
              <th>10:00</th>
              <th>11:00</th>
              <th>12:00</th>
              <th>13:00</th>
              <th>14:00</th>
              <th>15:00</th>
              <th>16:00</th>
              <th>17:00</th>
              <th>18:00</th>
              <th>19:00</th>
              <th>20:00</th>
              <th>21:00</th>
              <th>22:00</th>
              <th>23:00</th>
            </tr>
          </thead>
          <tbody>
            {horarioEmpresa.map((item) => (
              <tr key={item.dia}>
                <td>{item.dia}</td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
                <td className={item.estatus.includes('Ocupado') ? 'ocupado' : ''}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default HorarioEmpresa;