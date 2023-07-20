// helpers.js
export const parseDurationToMinutes = (duration) => {
    const hours = parseFloat(duration.replace(' horas', '').replace(',', '.'));
    return hours * 60;
  };
  