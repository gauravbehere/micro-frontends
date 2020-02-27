let MFE_MAP = {};
const mfes = {
  Component1: {
    uri: 'http://localhost:6001/main.js'
  },
  Component2: {
    uri: 'http://localhost:6002/main.js'
  },
}
const mfeLoader = () => {
  mfes.forEach((mfe) => {
    let compScript = document.createElement('script');
    compScript.onload = () => {
    
    }
    window[mfe.name] = comp;
    MFE_MAP[comp.name] = comp;
  })
}
mfeLoader();

export default MFE_MAP;
