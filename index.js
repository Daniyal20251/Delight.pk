// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDbYF9Z_b1RA3Ncs3xUEeETpLHtlYiKdwQ",
  authDomain: "otp-form-e1941.firebaseapp.com",
  projectId: "otp-form-e1941",
  storageBucket: "otp-form-e1941.firebasestorage.app",
  messagingSenderId: "239150152217",
  appId: "1:239150152217:web:bcd98b6c919dd767704888",
  measurementId: "G-L67SGNTSE2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reCAPTCHA
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'normal',
  'callback': function(response) {
    console.log("reCAPTCHA solved");
  }
});

function sendOTP() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
      window.confirmationResult = confirmationResult;
      document.getElementById("status").innerText = "OTP sent!";
    })
    .catch(function(error) {
      document.getElementById("status").innerText = error.message;
    });
}

function verifyOTP() {
  const code = document.getElementById("otp").value;
  window.confirmationResult.confirm(code)
    .then(function(result) {
      document.getElementById("status").innerText = "Phone number verified!";
    })
    .catch(function(error) {
      document.getElementById("status").innerText = "Invalid OTP.";
    });
}