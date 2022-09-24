


const ProgressBarVariant =  (amount, max) =>{
    const ratio = amount / max
    if(ratio < 0.5 ) return "primary"
    if(ratio < 0.75) return "warning"
    return "danger"
  
  }
  export default ProgressBarVariant


