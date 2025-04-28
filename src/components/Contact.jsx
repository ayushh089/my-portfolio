import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_PRIVATE_KEY);

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
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-5 flex flex-col items-center justify-center py-10">
        
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="animated-bg-circle absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
          <div className="animated-bg-circle absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/10"></div>
          <div className="animated-bg-circle absolute top-[40%] right-[20%] w-[200px] h-[200px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
          <div className="animated-bg-circle absolute bottom-[30%] left-[5%] w-[250px] h-[250px] rounded-full bg-cyan-600/5 dark:bg-cyan-600/10"></div>
        </div>

        <div className="absolute inset-0 bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tighter mt-10">
            CONTACT
          </h2>
          <div className="w-8 h-1.5 bg-cyan-500 mb-8 rounded-xl"></div>
          <p className="text-center text-white max-w-3xl text-lg">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
          <div className="w-full max-w-lg mx-auto h-auto bg-white/90 shadow-lg mt-8 mb-5 rounded-xl">
            <form className="py-10 px-10" onSubmit={onSubmit}>
              <h2 className="font-medium text-gray-800">Name</h2>
              <input
                placeholder="Enter your Name"
                name="name"
                type="text"
                required
                className="bg-slate-100 w-full h-16 text-black px-5 mt-4 rounded"
              />
              <h2 className="mt-5 font-medium text-gray-800">E-mail</h2>
              <input
                placeholder="Enter your E-mail"
                type="text"
                name="email"
                required
                className="bg-slate-100 w-full h-16 text-black px-5 mt-4 rounded"
              />
              <h2 className="mt-5 font-medium text-gray-800">Message</h2>
              <textarea
                placeholder="Enter your Message"
                name="message"
                required
                className="bg-slate-100 w-full h-52 text-black px-5 mt-4 pt-3 resize-none rounded"
              ></textarea>
              <button
                type="submit"
                className="mt-8 w-full bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-medium py-3 rounded hover:bg-cyan-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-500/20 rounded-bl-xl"></div>
        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-xl"></div>

      </section>
    </>
  );
}

export default Contact;
