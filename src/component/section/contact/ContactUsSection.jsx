import React, { useState } from 'react';
import ButtonComponent from '../../button/common/Button.component.jsx';

const ContactUsSection = ({
  buttonText = 'Submit',
  onSubmit = () => { alert('Submitted!'); },
}) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
  };

  return (
    <section id='contact' className="w-full py-12 px-4 flex flex-col lg:flex-row items-center justify-center bg-white gap-8 lg:gap-16">
      {/* Left: Single image with speech bubbles */}
      <div className="relative flex-1 w-full max-w-lg flex items-end justify-center min-h-[350px] lg:min-h-[500px]">
        <img
          src={('/src/assets/images/services/contact-us/manandwoman.png')}
          alt="Support agents"
          className="w-full max-w-[420px] h-auto object-contain z-10"
          style={{ minHeight: 280 }}
        />
        {/* Left bubble (man) */}
        <div className="absolute left-4 top-4 sm:left-8 sm:top-8 z-20 flex flex-col items-center">
          <div className="bg-white shadow px-4 py-2 rounded-xl text-gray-800 text-base font-medium whitespace-nowrap relative">
            We are always here to help
            <span className="block w-4 h-4 bg-white absolute left-1/2 -bottom-2 -translate-x-1/2 rotate-45 shadow" style={{ zIndex: 0 }}></span>
          </div>
        </div>
        {/* Right bubble (woman) */}
        <div className="absolute right-4 top-12 sm:right-8 sm:top-20 z-20 flex flex-col items-center">
          <div className="bg-white shadow px-4 py-2 rounded-xl text-gray-800 text-base font-medium whitespace-nowrap relative">
            Hello There !
            <span className="block w-4 h-4 bg-white absolute left-1/2 -bottom-2 -translate-x-1/2 rotate-45 shadow" style={{ zIndex: 0 }}></span>
          </div>
        </div>
      </div>
      {/* Right: Contact form */}
      <form
        className="flex-1 w-full max-w-xl bg-white rounded-2xl p-6 sm:p-10 shadow-md flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#18181b]">Contact Us</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="firstName" className="font-medium">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              required
              className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA14B5]"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="lastName" className="font-medium">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              required
              className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA14B5]"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ex JohnDoe214@gmail.com"
            required
            className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA14B5]"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-medium">What can we help you with ?</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type here your message"
            required
            rows={4}
            className="bg-gray-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA14B5] resize-none"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <ButtonComponent
          type="submit"
          size="large"
          fullWidth
          loading={loading}
          className="!bg-[#AA14B5] !text-primary  font-extrabold !hover:bg-[#8a1191] !hover:text-black !border-[#AA14B5] mt-4 shadow-lg"
        >
          {buttonText}
        </ButtonComponent>
      </form>
    </section>
  );
};

export default ContactUsSection; 