import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    // ஒவ்வொரு Service எண்ணிற்கும் உரிய Project படத்தைத் தேர்ந்தெடுக்கும் function
    const getServiceBgImage = (serviceNo) => {
        // service.s_no "01" அல்லது "1" என இருந்தாலும் சரியாக வேலை செய்ய parseInt பயன்படுத்துகிறோம்
        const num = parseInt(serviceNo, 10);

        const projectMapping = {
            1: mywork_data[5]?.w_img, // Service 01 -> project_6
            2: mywork_data[2]?.w_img, // Service 02 -> project_3
            3: mywork_data[1]?.w_img, // Service 03 -> project_2
            4: mywork_data[0]?.w_img, // Service 04 -> project_1
            5: mywork_data[2]?.w_img, // Service 05 -> project_3
        };

        // குறிப்பிட்ட படம் இருந்தால் அதைத் தரும், இல்லையென்றால் default-ஆக project_1 தரும்
        const selectedImg = projectMapping[num] || mywork_data[0]?.w_img;

        // புதிய Tab-இல் படம் உடையாமல் தெரிய முழு URL-ஆக மாற்றுதல்
        if (selectedImg && !selectedImg.startsWith("http") && !selectedImg.startsWith("data:")) {
            return new URL(selectedImg, window.location.origin).href;
        }
        return selectedImg;
    };

    const handleReadMore = (service) => {
        const bgImage = getServiceBgImage(service.s_no);
        const newWindow = window.open("", "_blank");

        if (newWindow) {
            newWindow.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>${service.s_name} - Service Details</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 40px 20px;
                            font-family: 'Outfit', Arial, sans-serif;
                            background-color: #161513;
                            color: #ffffff;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            box-sizing: border-box;
                            position: relative;
                            overflow: hidden;
                        }

                        /* பின்னணியில் குறிப்பிட்ட Project Image முழுத் திரையிலும் தெரிய */
                        .bg-project-image {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 100vh;
                            background-image: url('${bgImage}');
                            background-size: cover;
                            background-position: center;
                            background-repeat: no-repeat;
                            z-index: 0;
                            opacity: 0.35;
                        }

                        /* எழுத்துக்கள் தெளிவாகத் தெரிய கருப்பு நிழல் (Dark Overlay) */
                        .bg-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100vw;
                            height: 100vh;
                            background: radial-gradient(circle, rgba(22,21,19,0.55) 0%, rgba(22,21,19,0.92) 100%);
                            z-index: 1;
                        }

                        /* முன்னால் தெரியும் Service Card */
                        .service-detail-card {
                            position: relative;
                            z-index: 2;
                            max-width: 800px;
                            width: 100%;
                            padding: 50px;
                            border-radius: 15px;
                            border: 2px solid #ff00ff;
                            background: rgba(25, 10, 22, 0.82);
                            backdrop-filter: blur(8px);
                            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8);
                        }

                        .service-no {
                            font-size: 24px;
                            font-weight: 600;
                            color: #d4d4d4;
                            margin-bottom: 10px;
                        }

                        .service-title {
                            font-size: 42px;
                            font-weight: 800;
                            margin: 0 0 25px 0;
                            background: linear-gradient(270deg, #DF8908 10%, #B415FF 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }

                        .service-desc {
                            font-size: 20px;
                            line-height: 1.8;
                            color: #f0f0f0;
                            margin-bottom: 35px;
                        }

                        .close-btn {
                            padding: 14px 32px;
                            font-size: 18px;
                            font-weight: 600;
                            color: #ffffff;
                            background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
                            border: none;
                            border-radius: 50px;
                            cursor: pointer;
                            transition: transform 0.2s;
                        }

                        .close-btn:hover {
                            transform: scale(1.05);
                        }
                    </style>
                </head>
                <body>
                    <!-- பின்னணி Project படம் -->
                    <div class="bg-project-image"></div>
                    <div class="bg-overlay"></div>

                    <!-- Service விபரங்கள் -->
                    <div class="service-detail-card">
                        <div class="service-no">Service #${service.s_no}</div>
                        <h1 class="service-title">${service.s_name}</h1>
                        <p class="service-desc">${service.s_full_desc || service.s_desc}</p>
                        <button class="close-btn" onclick="window.close()">Close Page</button>
                    </div>
                </body>
                </html>
            `);
            newWindow.document.close();
        }
    };

    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="service-container">
                {Services_Data.slice(0, visibleCount).map((service, index) => {
                    return (
                        <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>

                            <div
                                className="services-readmore"
                                onClick={() => handleReadMore(service)}
                                style={{ cursor: "pointer" }}
                            >
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;