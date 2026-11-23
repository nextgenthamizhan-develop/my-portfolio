import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(mywork_data.length);
    };

    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.slice(0, visibleCount).map((work, index) => {
                    return (
                        <a
                            key={index}
                            href={work.w_img}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={work.w_img}
                                alt={work.w_name || "work"}
                                style={{ cursor: "pointer" }}
                            />
                        </a>
                    );
                })}
            </div>

            {visibleCount < mywork_data.length && (
                <div className="mywork-showmore" onClick={handleShowMore}>
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            )}
        </div>
    );
};

export default MyWork;