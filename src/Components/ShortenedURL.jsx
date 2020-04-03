import React from "react";
import { useSelector } from "react-redux";

const ShortenedURL = () => {
  const data = useSelector(state => state.data);
  console.log(data);
  return (
    <div className="shortenedURLContainer">

      <ul>
        {data.map(data => {
          return (
            <li className="links">
              <div className="leftLink">
                <p>{data.url}</p>
              </div>
              <div className="rightLink">
                <a
                  href={`https://rel.ink/${data.hashid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://rel.ink/{data.hashid}
                </a>
                <button>Copy!</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShortenedURL;
