import styles from "@/styles/blogEnquiryForm.module.css";

import React, { useState, useEffect, useRef } from "react";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dropdown: "",
    city: "",
    resume: null,
  });
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Validate each field on blur
    if (!value.trim()) {
      newErrors = {
        ...newErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      };
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      newErrors = { ...newErrors, [name]: "Invalid email format" };
    } else if (name === "phone" && !/^\d{10}$/.test(value)) {
      newErrors = { ...newErrors, [name]: "Invalid phone number format" };
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) {
      newErrors = { ...newErrors, name: "Name is required" };
    }
    if (!formData.email.trim()) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors = { ...newErrors, email: "Invalid email format" };
    }
    if (!formData.phone.trim()) {
      newErrors = { ...newErrors, phone: "Phone number is required" };
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors = { ...newErrors, phone: "Invalid phone number format" };
    }
    if (!formData.dropdown.trim()) {
      newErrors = { ...newErrors, dropdown: "Please select an option" };
    }
    if (!formData.resume) {
      newErrors = { ...newErrors, resume: "Resume is required" };
    }
    setErrors(newErrors);
  };

  return (
    <>
      <h1 className={styles.enquiryHeading}>Apply Now</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={nameRef}
              placeholder="Full Name"
              className={styles.formElement}
            />
            {errors.name && <p className={styles.feedback}>{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={emailRef}
              placeholder="Email"
              className={styles.formElement}
            />
            {errors.email && <p className={styles.feedback}>{errors.email}</p>}
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={phoneRef}
              placeholder="Mobile No"
              className={styles.formElement}
            />
            {errors.phone && <p className={styles.feedback}>{errors.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={nameRef}
              placeholder="City"
              className={styles.formElement}
            />
            {errors.city && <p className={styles.feedback}>{errors.city}</p>}
          </div>

          <div className={styles.fileUpload}>
            <label className={styles.uploadButton} htmlFor="resume">
              Upload your CV
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={(e) =>
                setFormData({ ...formData, resume: e.target.files[0] })
              }
              onBlur={handleBlur}
              //   className={styles.formElement}
              className={styles.fileInput}
              required
            />
            {errors.resume && (
              <p className={styles.feedback}>{errors.resume}</p>
            )}
          </div>
          <br />
          <button type="submit" className={styles.formBtn}>
            Submit
          </button>
        </form>
        <br />
      </div>
    </>
  );
}

export default CareerForm;
