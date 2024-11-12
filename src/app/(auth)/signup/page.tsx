"use client";
import { Input } from "@/components/ui/input"; // Adjust the path if necessary
import { Button } from "@/components/ui/button"; // Adjust the path if necessary
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [captchaChecked, setCaptchaChecked] = useState<boolean>(false);

  return (
    <div className="min-h-screen grid grid-cols-12">
      <div
        className="col-span-12 md:col-span-6 to-white"
        style={{
          background: `linear-gradient(90deg, #FFC368 0%, #FF6262 50%, #5956E9 100%),
                      linear-gradient(180deg, #FFF9F9 0%, rgba(255, 255, 255, 0.1) 100%)`,
        }}
      ></div>
      <div className="col-span-12 md:col-span-6 flex-grow flex items-center justify-start p-6 md:pl-20">
        <div>
          <h2 className="text-3xl font-semibold text-left mb-4">
            Create an Account
          </h2>
          <p className="text-left text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#111111] underline">
              Log in
            </Link>
          </p>

          <form className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-[16px] leading-[24px] font-[400] text-[#666666] mb-1">
                User name
              </label>
              <Input
                type="text"
                required
                className="rounded-lg border-gray-300"
                variant="minimal"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[16px] leading-[24px] font-[400] text-[#666666] mb-1">
                Email address
              </label>
              <Input
                type="email"
                required
                className="rounded-lg border-gray-300"
                variant="minimal"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="flex items-center justify-between text-[16px] leading-[24px] font-[400] text-[#666666] mb-1">
                Password
                <button
                  type="button"
                  className="flex items-center text-gray-600 ml-auto"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineEye className="w-5 h-5" aria-hidden="true" />
                  )}
                  <span className="ml-1">{showPassword ? "Hide" : "Show"}</span>
                </button>
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                required
                className="rounded-lg border-gray-300"
                variant="minimal"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>

            {/* Terms and Privacy */}
            <div className="text-[16px]  text-[#666666] leading-[24px]">
              By creating an account, you agree to our <br />
              <a href="/terms" className="text-[#111111] underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#111111] underline">
                Privacy Policy
              </a>
              .
            </div>

            {/* reCAPTCHA Checkbox */}
            <div className="flex items-center justify-between mt-4 bg-white border border-gray-300 p-3 rounded-xl">
              <div className="flex items-center">
                <div
                  className={`relative w-5 h-5 flex items-center justify-center rounded border border-gray-300 cursor-pointer ${
                    captchaChecked
                      ? "bg-green-500 border-green-500"
                      : "bg-white"
                  }`}
                  onClick={() => setCaptchaChecked(!captchaChecked)}
                >
                  {captchaChecked && (
                    <span className="text-white text-xs font-bold">✔</span> // Replace with an icon if needed
                  )}
                </div>

                <label
                  htmlFor="recaptcha"
                  className="ml-2 text-sm text-gray-600"
                >
                  I’m not a robot
                </label>
              </div>
              <img
                src="/images/recaptcha.png"
                alt="reCAPTCHA icon"
                className="w-12 h-12 ml-2"
              />
            </div>

            {/* Submit Button */}
            <Button
              className="w-1/2 mt-4 bg-gray-400  text-white py-6 rounded-[36px] font-semibold opacity-40"
              disabled={!captchaChecked}
            >
              Create an Account
            </Button>
          </form>

          <p className="text-sm text-left text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-[#111111]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
