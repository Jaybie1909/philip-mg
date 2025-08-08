
const MyLocation = () => {
  return (
    <div className="h-[500px] max-w-full bg-blue-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.821766156745!2d120.93968869999998!3d14.6660541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5001121b197%3A0x8a9cd263c2e2bbf1!2sPhilip%20Moto%20Garage!5e0!3m2!1sen!2sph!4v1754626997493!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MyLocation;
