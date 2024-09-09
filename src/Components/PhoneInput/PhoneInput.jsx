import React, { useEffect, useState } from "react";
//  first install -- npm i react-phone-input-2
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import OtpInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
// import { toast, Toaster } from "react-hot-toast";
// import { auth } from "./firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const PhoneInputs = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  console.log("phone number: ", ph);
  const handleChange = (value, country) => {
    const numericValue = value.replace(/\D/g, "");

    // Check if the country code is +880 and limit the total length to 13 digits
    if (country.dialCode === "880" && numericValue.length <= 13) {
      setPh(value);
    }
  };

  const isValid = (value, country) => {
    const phoneNumber = value.replace(/\D/g, "");
    // value.length == 13

    // Ensure the phone number (excluding country code) is 10 digits
    if (country.dialCode === "880") {
      return phoneNumber.length <= 13;
    }

    return false;
  };
  console.log(isValid);
  return (
    <>
      {/* <div className="mt-[200px]">
        <PhoneInput
          country={"bd"}
          value={ph}
          onChange={(value, country) => handleChange(value, country)}
          isValid={isValid}
          countryCodeEditable={false}
          placeholder="Enter phone number"
        />
      </div> */}
      <section className="bg-emerald-500 flex items-center justify-center h-screen">
        <div>
          {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
          <div id="recaptcha-container"></div>
          {user ? (
            <h2 className="text-center text-white font-medium text-2xl">
              👍Login Success
            </h2>
          ) : (
            <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
              <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                Welcome to <br /> CODE A PROGRAM
              </h1>
              {showOTP ? (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    <BsFillShieldLockFill size={30} />
                  </div>
                  <label
                    htmlFor="otp"
                    className="font-bold text-xl text-white text-center"
                  >
                    Enter your OTP
                  </label>
                  {/* <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                  ></OtpInput>
                  <button
                    onClick={onOTPVerify}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Verify OTP</span>
                  </button> */}
                </>
              ) : (
                <>
                  <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    <BsTelephoneFill size={30} />
                  </div>
                  <label
                    htmlFor=""
                    className="font-bold text-xl text-white text-center"
                  >
                    Verify your phone number
                  </label>
                  <PhoneInput
                    country={"bd"}
                    value={ph}
                    onChange={(value, country) => handleChange(value, country)}
                    isValid={isValid}
                    countryCodeEditable={false}
                    placeholder="Enter phone number"
                  />
                  <button
                    // onClick={onSignup}
                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    <span>Send code via SMS</span>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhoneInputs;
