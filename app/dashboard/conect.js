const apiUrl = "https://api-paciente.cyclic.app";

export function connectApiToPaciente() {
  return `${apiUrl}/paciente`;
}

export function connectApiToAgenda() {
  return `${apiUrl}/agenda`;
}

export function connectApiToHospital() {
  return `${apiUrl}/hospital`;
}

