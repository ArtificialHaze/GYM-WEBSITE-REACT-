const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src="Logo" alt="Logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel velit
            numquam non accusamus minus.
          </p>
          <p>&copy; DreamDevs. All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor</p>
          <p className="my-5">Lorem, ipsum</p>
          <p className="my-5">Lorem</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Lorem, ipsum</p>
          <p className="my-5">+955 555 55 55 55</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
