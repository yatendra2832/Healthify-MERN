import React from "react";

const UserDashboardCard = ({ imageSrc, altText, title }) => {
  return (
    <div className="feature col mx-4 shadow p-3 mb-5 bg-body-tertiary rounded userCard w-100 h-100 ">
      <div className="text-center p-2">
        <img src={imageSrc} alt={altText} width={100} height={100} />
      </div>
      <h3 className="fs-2 text-primary text-center p-2">
        <a href="#" className="text-decoration-none">{title}</a>
      </h3>
    </div>
  );
};

export default UserDashboardCard;
