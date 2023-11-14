"use client";
import React, { useRef, useState } from "react";
import "../assets/css/styles.css";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
const Contact = () => {
  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const public_id = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const [isMsgVisible, setMsgVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
      message: Yup.string()
        .required("You Must Write a Message")
        .min(5, "The message must need atleast 5 words "),
    }),
    onSubmit: (values) => {
    
      const templateParams = {
        from_name:values.name,
        from_email:values.email,
        message:values.message
    
      }

      emailjs
        .send(
          service_id,
          template_id,
          templateParams,
          public_id
        )
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      formik.resetForm();
      setTimeout(()=>{
        setMsgVisible(true)
      },1000)
    },
    
  });

  
  return (
    <div>
   
{  isMsgVisible && <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/2 shadow-2xl z-10 rounded-xl">
    <h2 className=" text-center mt-4 text-3xl">
      Message Sent Successfully
    </h2>
    <div className="w-full h-1/2 translate-y-16  relative flex items-center justify-center">
      <button onClick={()=>setMsgVisible(false)} className="absolute bg-blue-500 text-white px-24 py-2 rounded-3xl ">OK</button>
    </div>
  </div>}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form onSubmit={formik.handleSubmit} className="contact__form">
            <div className="relative">
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                className={`contact__input ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 bg-red-100 border-2"
                    : "border-[1.5px] border-blue-950"
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-500 absolute bottom-2">
                {formik.touched.name &&
                  formik.errors.name &&
                  formik.errors.name}
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`contact__input ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 bg-red-100 border-2"
                    : "border-[1.5px] border-blue-950"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-500 absolute bottom-2">
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
              </p>
            </div>

            <div className="relative">
              <textarea
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="message"
                id="message"
                cols="0"
                rows="10"
                className={`contact__input ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500 bg-red-100 border-2"
                    : "border-[1.5px] border-blue-950"
                }`}
              ></textarea>
              <p className="text-red-500 absolute bottom-2">
                {formik.touched.message &&
                  formik.errors.message &&
                  formik.errors.message}
              </p>
            </div>

            <input
            disabled= {formik.isSubmitting}
              type="submit"
              value="Submit"
              className="contact__button button"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
