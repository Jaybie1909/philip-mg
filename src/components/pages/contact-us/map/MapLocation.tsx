import React from "react";

const MyLocation = () => {
  return (
    <div className="h-[500px] max-w-full bg-blue-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2024621741944!2d100.301864174855!3d13.706184286680976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29570d8b954a5%3A0xb5c9854b4dde6bda!2sBOY%20Bigbike!5e0!3m2!1sen!2sth!4v1704545931709!5m2!1sen!2sth"
        className="w-full h-full"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MyLocation;
