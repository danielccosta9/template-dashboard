const apiUrl = process.env.REACT_APP_API_URL;

export function connectApiToPaciente() {
  return `${apiUrl}/paciente`;
}

export function connectApiToAgenda() {
  return `${apiUrl}/agenda`;
}

export function connectApiToHospital() {
  return `${apiUrl}/hospital`;
}

