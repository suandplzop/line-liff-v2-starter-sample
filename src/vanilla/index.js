import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
    
        if (liff.isLoggedIn()) {
          const idToken = liff.getDecodedIDToken();
          console.log(idToken); 
        }
    })
    .catch((error) => {
        console.log(error)
    })
});
