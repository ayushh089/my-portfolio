import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "904ce710-e16d-4038-8de5-fc2d1a931f1c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        // color:"blue"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-15 px-4 bg-slate-100 ">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tighter mt-10">
          CONTACT
        </h2>
        <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
        <p className="text-center text-gray-600 max-w-3xl text-lg">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="w-full max-w-lg mx-auto h-auto bg-white shadow-lg mt-8 mb-5">
          <form className="py-10 px-10" onSubmit={onSubmit}>
            <h2 className="font-medium">Name</h2>
            <input
              placeholder="Enter your Name"
              name="name"
              type="text"
              required
              className="bg-slate-100 w-full h-16 text-black px-5 mt-4"
            />
            <h2 className="mt-5 font-medium">E-mail</h2>
            <input
              placeholder="Enter your E-mail"
              type="text"
              name="email"
              required
              className="bg-slate-100 w-full h-16 text-black px-5 mt-4"
            />
            <h2 className="mt-5 font-medium">Message</h2>
            <textarea
              placeholder="Enter your Message"
              name="message"
              required
              className="bg-slate-100 w-full h-52 text-black px-5 mt-4 align-top pt-3 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-8 w-full bg-blue-500 text-white font-medium py-3 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
