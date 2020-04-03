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
            <li>
              <a
                href={`https://rel.ink/${data.hashid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://rel.ink/{data.hashid}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShortenedURL;