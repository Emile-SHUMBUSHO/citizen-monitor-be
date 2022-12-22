
export default (type) => {
  let code;
  switch (type) {
    case 'topup':
        code =  'T' + Date.now().toString(36).toUpperCase()
        break;
    case 'cashout':
        code =  'C' + Date.now().toString(36).toUpperCase()
        break;
    case 'ride':
        code =  'R' + Date.now().toString(36).toUpperCase()
        break;
    default:
        break;
}
  return code;
};
