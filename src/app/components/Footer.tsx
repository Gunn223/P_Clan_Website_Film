import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] text-white px-16 py-8">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-red-600 uppercase">Mih& 18</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum animi dicta cum laudantium nihil
            ducimus a molestiae dolore, esse omnis soluta provident optio magni quis corrupti repellat qui consequatur
            explicabo.
          </p>
        </div>
        <div className="flex-1 flex justify-around">
          <div>
            <h3 className="mb-3 font-semibold">Pages</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="">The most watched movies</a>
              </li>
              <li>
                <a href="">Top Rated Movies</a>
              </li>
              <li>
                <a href="">Movies</a>
              </li>
              <li>
                <a href="">Serials</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Our social networks</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="">Telegram</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">For Reference</h3>
            <ul className="list-disc list-inside">
              <li>
                <a href="">Telegram</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Whatsapp</a>
              </li>
              <li>
                <a href="">Skype</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-16 font-semibold text-lg uppercase">@Mihd& 18</h3>
    </div>
  );
};

export default Footer;
