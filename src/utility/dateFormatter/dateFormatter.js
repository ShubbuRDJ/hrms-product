export default function convertToMMDDYYYY(dateTimeStr) {
    const date = new Date(dateTimeStr);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(date.getUTCDate()).padStart(2, '0');
    const yyyy = date.getUTCFullYear();
  
    return mm + '/' + dd + '/' + yyyy;
  }