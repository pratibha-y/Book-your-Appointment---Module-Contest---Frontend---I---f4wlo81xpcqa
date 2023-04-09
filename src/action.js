/*export function addAppointment() {
    return {};
}*/
export function addAppointment(appointment) {
    return {
    type: 'ADD_APPOINTMENT',
    payload: appointment
    };
}
  
