import image from "../assets/living_room_category.jpg";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useInput from "../hooks/use-input";
import { useRef, useState } from "react";

// REGEX SYNTAX TO VALIDATE THE INPUTS
const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const isEmail = (value) => emailRegex.test(value);
const isNotEmpty = (value) => value.length > 0;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState();

  const formRef = useRef();

  // MAKING USE OF THE USEINPUT HOOK
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  // MAKING USE OF THE USEINPUT HOOK
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const details = {
    email: enteredEmail,
    message: enteredMessage,
  };

  let formIsValid = false;

  const validateInput = enteredEmailIsValid && enteredMessageIsValid;

  if (validateInput) {
    formIsValid = true;
  }

  // PASSING data into firebase
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!validateInput) {
      return;
    }

    setIsSubmitting(true);

    const res = fetch(
      "https://oakin-contact-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify({ details }),
      },
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    // alert("Submitted successfully");
    console.log(enteredEmail);
    console.log(enteredMessage);

    resetEmailInput();
    resetMessageInput();
  };

  const isSubmittingStatus = <p>Loading...</p>;
  const didSubmitStatus = <p>Done ✔✅</p>;

  return (
    <main className="flex flex-col bg-[#f8f4f4] md:h-[90vh] md:flex-row">
      <section className="group relative w-[100%] object-cover">
        <img
          src={image}
          alt="Contact Us"
          className="h-full w-full object-cover"
        />
        <span className="bg-black-100 absolute bottom-0 flex h-full w-full items-center justify-center opacity-100 backdrop-blur-sm">
          <h2 className="font-[Afterglow] text-8xl font-semibold text-white">
            Oakin
          </h2>

          <div className="absolute bottom-5 hidden flex-col gap-5 text-white md:flex">
            <p className="text-4xl">Follow Us</p>

            <span className="flex items-center gap-8">
              <BsInstagram size={25} />
              <FaXTwitter size={25} />
              <FiFacebook size={25} />
            </span>

            <div className="flex gap-6">
              <span className="flex items-center justify-center gap-2">
                <AiOutlineMail size={18} />
                <p className="text-xl font-medium">oakin@gmail.com</p>
              </span>

              <span className="flex items-center gap-2">
                <BsTelephone size={18} />
                <p className="text-xl font-medium">+234(0) 807 258 9256</p>
              </span>

              <span className="flex items-center gap-2">
                <HiOutlineLocationMarker size={18} />
                <p className="text-xl font-medium">
                  No 10, Oakin house, Lagos, Nigeria.
                </p>
              </span>
            </div>
          </div>
        </span>
      </section>

      <section className="w-full px-[3rem] py-[8rem] md:px-[8rem]">
        <h2 className="text-5xl font-medium">Leave Us a Message</h2>
        <form
          ref={formRef}
          onSubmit={formSubmissionHandler}
          className="mt-8 flex flex-col gap-8 text-[#333]"
        >
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={emailChangedHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              className="w-full rounded-sm bg-[#fff] p-8 text-2xl font-medium outline-none drop-shadow-md"
            />
            {emailInputHasError && (
              <p className="mt-1 font-mono text-xl text-[#ee0000]">
                Please provide a valid email address.
              </p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              className="w-full resize-none rounded-sm p-8 text-2xl font-medium outline-none drop-shadow-md"
              onChange={messageChangedHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
            />
            {messageInputHasError && (
              <p className="mt-1 font-mono text-xl text-[#ee0000]">
                Please enter a valid text.
              </p>
            )}
          </div>

          <div>
            <button
              disabled={!formIsValid}
              className={`cursor-${!isSubmitting ? "pointer" : !didSubmit ? "not-allowed" : "progress"} w-full rounded-sm bg-[#333] py-8 text-3xl font-medium tracking-wide text-white`}
            >
              {isSubmitting
                ? isSubmittingStatus
                : didSubmit
                  ? didSubmitStatus
                  : "Submit"}
            </button>
          </div>
        </form>
      </section>

      {!isSubmitting && didSubmit && window.alert("Message sent successfully!")}
    </main>
  );
};

export default Contact;
